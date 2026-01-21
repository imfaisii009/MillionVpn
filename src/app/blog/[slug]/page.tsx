import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogPostContent from './BlogPostContent';
import { SpeakableSchema } from '@/components/structured-data/SpeakableSchema';

// ISR: Revalidate every 30 minutes
export const revalidate = 1800;

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    // SEO-optimized title: keyword-front-loaded, under 60 chars
    const seoTitle = `${post.title} | MillionVPN`;

    return {
        title: seoTitle,
        description: post.metaDescription,
        authors: [{ name: post.author }],
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            modifiedTime: post.lastUpdated ? new Date(post.lastUpdated).toISOString() : undefined,
            authors: [post.author],
            section: post.category,
            tags: post.keywords,
            images: [
                {
                    url: post.image.startsWith('/') ? `https://millionvpn.com${post.image}` : post.image,
                    width: 1200,
                    height: 630,
                    alt: post.imageAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.metaDescription,
            images: [post.image.startsWith('/') ? `https://millionvpn.com${post.image}` : post.image],
        },
        alternates: {
            canonical: `https://millionvpn.com/blog/${slug}`,
        },
    };
}

// Article Schema for SEO
function ArticleSchema({ post }: { post: typeof blogPosts[0] }) {
    const imageUrl = post.image.startsWith('/') ? `https://millionvpn.com${post.image}` : post.image;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription,
        image: {
            '@type': 'ImageObject',
            url: imageUrl,
            width: 1200,
            height: 630,
        },
        author: {
            '@type': 'Person',
            name: post.author,
            description: post.authorBio,
        },
        publisher: {
            '@type': 'Organization',
            name: 'MillionVPN',
            logo: {
                '@type': 'ImageObject',
                url: 'https://millionvpn.com/logo.png',
                width: 200,
                height: 60,
            },
        },
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.lastUpdated || post.date).toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://millionvpn.com/blog/${post.slug}`,
        },
        articleSection: post.category,
        wordCount: post.content?.split(/\s+/).length || 500,
        keywords: post.keywords.join(', '),
        inLanguage: 'en-US',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// FAQ Schema - extract FAQ-style content from articles
function FAQSchema({ post }: { post: typeof blogPosts[0] }) {
    // Extract Q&A pairs from content that follows patterns like "## Why..?" or "## What...?"
    const faqPatterns = post.content.match(/## (What|Why|How|Is|Does|Can|Should|Will)[^#]+/g);

    if (!faqPatterns || faqPatterns.length === 0) return null;

    const faqs = faqPatterns.slice(0, 5).map((section) => {
        const lines = section.trim().split('\n');
        const question = lines[0].replace('## ', '').trim();
        // Get the answer (first paragraph after heading)
        const answer = lines.slice(1).filter(line =>
            line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('|')
        ).slice(0, 2).join(' ').replace(/\*\*/g, '').trim();

        return { question, answer };
    }).filter(faq => faq.answer.length > 20);

    if (faqs.length === 0) return null;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.slice(0, 300) + (faq.answer.length > 300 ? '...' : ''),
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Breadcrumb Schema
function BreadcrumbSchema({ post }: { post: typeof blogPosts[0] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://millionvpn.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://millionvpn.com/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `https://millionvpn.com/blog/${post.slug}`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts for internal linking
    const relatedPosts = post.relatedPosts
        ? blogPosts.filter(p => post.relatedPosts?.includes(p.id))
        : [];

    return (
        <main className="min-h-screen bg-white">
            {/* Structured Data */}
            <ArticleSchema post={post} />
            <BreadcrumbSchema post={post} />
            <FAQSchema post={post} />
            <SpeakableSchema
                pageName={post.title}
                description={post.metaDescription}
                url={`https://millionvpn.com/blog/${post.slug}`}
            />

            <Navbar />
            <BlogPostContent post={post} relatedPosts={relatedPosts} />
            <Footer />
        </main>
    );
}
