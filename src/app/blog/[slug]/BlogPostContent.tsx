'use client';

import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    metaDescription: string;
    category: string;
    author: string;
    authorBio?: string;
    date: string;
    lastUpdated?: string;
    readTime: string;
    image: string;
    imageAlt: string;
    featured: boolean;
    keywords: string[];
    relatedPosts?: number[];
    content: string;
}

interface Props {
    post: BlogPost;
    relatedPosts?: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts = [] }: Props) {
    // Generate table of contents from headings
    const tableOfContents = useMemo(() => {
        const headings: { level: number; text: string; id: string }[] = [];
        const lines = post.content.split('\n');

        lines.forEach((line) => {
            if (line.startsWith('## ')) {
                const text = line.replace('## ', '');
                headings.push({
                    level: 2,
                    text,
                    id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                });
            } else if (line.startsWith('### ')) {
                const text = line.replace('### ', '');
                headings.push({
                    level: 3,
                    text,
                    id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                });
            }
        });

        return headings;
    }, [post.content]);
    // Markdown Renderer
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            // Bold text handling
            const renderBoldText = (text: string) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                });
            };

            if (line.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-3xl md:text-5xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">
                        {line.replace('# ', '')}
                    </h1>
                );
            }
            if (line.startsWith(':::tldr')) {
                return null; // Skip the opening tag
            }
            if (line.startsWith(':::')) {
                return null; // Skip the closing tag
            }
            // Handle the content inside the custom block (we'll need a better parser or a specific convention)
            // simplifying convention: The TLDR block will be passed as a specific markdown convention or just a blockquote with a class?
            // Custom convention: lines starting with "TLDR: " are wrapped in the div.

            if (line.startsWith('TLDR: ')) {
                return (
                    <div key={index} className="speakable-tldr bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-lg">
                        <p className="font-bold text-teal-900 mb-1">QUICK SUMMARY</p>
                        <p className="text-teal-800">{renderBoldText(line.replace('TLDR: ', ''))}</p>
                    </div>
                );
            }

            if (line.startsWith('## ')) {
                const text = line.replace('## ', '');
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                    <h2 key={index} id={id} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-24">
                        {text}
                    </h2>
                );
            }
            if (line.startsWith('### ')) {
                const text = line.replace('### ', '');
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                    <h3 key={index} id={id} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 scroll-mt-24">
                        {text}
                    </h3>
                );
            }
            if (line.startsWith('- ')) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 mr-3 flex-shrink-0" />
                        <span className="text-lg leading-relaxed">{renderBoldText(line.replace('- ', ''))}</span>
                    </div>
                );
            }
            if (line.match(/^\d+\. /)) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-3 text-slate-600">
                        <span className="font-bold text-teal-600 mr-3 min-w-[24px] text-lg">
                            {line.match(/^\d+\./)?.[0]}
                        </span>
                        <span className="text-lg leading-relaxed">{renderBoldText(line.replace(/^\d+\. /, ''))}</span>
                    </div>
                );
            }
            if (line.startsWith('> ')) {
                return (
                    <div
                        key={index}
                        className="border-l-4 border-teal-500 bg-teal-50 p-6 my-8 rounded-r-xl italic text-xl text-teal-900"
                    >
                        &ldquo;{line.replace('> ', '')}&rdquo;
                    </div>
                );
            }
            if (line.trim() === '') {
                return <div key={index} className="h-6" />;
            }
            return (
                <p key={index} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                    {renderBoldText(line)}
                </p>
            );
        });
    };

    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const shareText = `${post.title} - MillionVPN Blog`;

    const handleShare = (platform: string) => {
        if (!shareUrl) return;

        const urls: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        };

        window.open(urls[platform], '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* Immersive Header */}
            <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900">
                <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 pb-20 md:p-12 md:pb-24 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-teal-500/90 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider mb-6 inline-block shadow-lg shadow-teal-500/20">
                            {post.category}
                        </span>
                        <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight drop-shadow-sm">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-700 font-medium">
                            <span className="flex items-center">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random`}
                                    className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                                    alt={post.author}
                                />
                                {post.author}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-teal-600" aria-hidden="true" />
                                <time dateTime={post.date}>{post.date}</time>
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-teal-600" aria-hidden="true" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 -mt-12 relative z-10 pb-20">
                {/* Table of Contents - for longer articles */}
                {tableOfContents.length > 3 && (
                    <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10" aria-label="Table of contents">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">In This Article</h2>
                        <ul className="space-y-2">
                            {tableOfContents.filter(h => h.level === 2).map((heading, idx) => (
                                <li key={idx}>
                                    <a
                                        href={`#${heading.id}`}
                                        className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <div className="prose prose-lg prose-slate max-w-none">{renderContent(post.content || '')}</div>

                {/* Keywords/Tags for SEO */}
                {post.keywords && post.keywords.length > 0 && (
                    <div className="mt-10 pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                            {post.keywords.map((keyword, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Last Updated for freshness signal */}
                {post.lastUpdated && (
                    <p className="mt-6 text-sm text-slate-500">
                        Last updated: <time dateTime={post.lastUpdated}>{post.lastUpdated}</time>
                    </p>
                )}

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <Share2 className="w-5 h-5 mr-2" aria-hidden="true" /> Share this article
                    </h3>
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleShare('twitter')}
                            className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleShare('facebook')}
                            className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                            aria-label="Share on LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Related Posts for Internal Linking */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.imageAlt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-bold uppercase">
                                            {relatedPost.category}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-teal-600 text-sm font-medium mt-3 group-hover:translate-x-1 transition-transform">
                                            Read more <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center font-bold text-teal-600 hover:text-teal-700 hover:-translate-x-1 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" /> Back to Blog
                    </Link>
                </div>
            </article>
        </>
    );
}
