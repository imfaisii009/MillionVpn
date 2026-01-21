import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogContent from './BlogContent';
import { blogPosts } from '@/data/blogData';

// ISR: Revalidate every 30 minutes
export const revalidate = 1800;

export const metadata: Metadata = {
    title: 'VPN Security & Privacy Blog | MillionVPN',
    description:
        'Expert VPN security guides, online privacy tips, and cybersecurity news. Learn to protect yourself online with MillionVPN expert articles.',
    keywords: [
        'VPN blog',
        'VPN security tips',
        'online privacy guide',
        'cybersecurity news',
        'streaming VPN tips',
        'digital privacy',
        'VPN tutorials',
        'internet security',
    ],
    openGraph: {
        title: 'VPN Security & Privacy Blog | MillionVPN',
        description:
            'Expert VPN security guides and online privacy tips. Stay safe online with MillionVPN.',
        type: 'website',
        url: 'https://millionvpn.com/blog',
        images: [
            {
                url: 'https://millionvpn.com/images/blog-og.png',
                width: 1200,
                height: 630,
                alt: 'MillionVPN Blog - Security & Privacy Insights',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VPN Security & Privacy Blog | MillionVPN',
        description:
            'Expert VPN security guides and online privacy tips. Stay safe online.',
    },
    alternates: {
        canonical: 'https://millionvpn.com/blog',
    },
};

// Breadcrumb Schema
function BreadcrumbSchema() {
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
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// Blog CollectionPage Schema with ItemList
function BlogCollectionSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'MillionVPN Blog',
        description: 'Expert VPN security guides, online privacy tips, and cybersecurity news.',
        url: 'https://millionvpn.com/blog',
        isPartOf: {
            '@type': 'WebSite',
            name: 'MillionVPN',
            url: 'https://millionvpn.com',
        },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: blogPosts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'BlogPosting',
                    headline: post.title,
                    description: post.metaDescription,
                    url: `https://millionvpn.com/blog/${post.slug}`,
                    image: post.image.startsWith('/') ? `https://millionvpn.com${post.image}` : post.image,
                    datePublished: new Date(post.date).toISOString(),
                    author: {
                        '@type': 'Person',
                        name: post.author,
                    },
                },
            })),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <BreadcrumbSchema />
            <BlogCollectionSchema />
            <Navbar theme="dark" />
            <BlogContent />
            <Footer />
        </main>
    );
}
