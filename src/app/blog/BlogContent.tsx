'use client';

import { motion } from 'framer-motion';
import { blogPosts, categories } from '@/data/blogData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogContent() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
    const regularPosts = blogPosts.filter((post) => post.id !== featuredPost.id);

    const filteredPosts = selectedCategory
        ? regularPosts.filter((post) => post.category === selectedCategory)
        : regularPosts;

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/20 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-sm font-medium mb-4">
                            MillionVPN Blog
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Latest insights on <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                                Security & Privacy
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400">
                            Stay ahead of digital threats with expert articles, guides, and industry news.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <Link href={`/blog/${featuredPost.slug}`}>
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-slate-700/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-4xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wider">
                                        {featuredPost.category}
                                    </span>
                                    <span className="flex items-center text-slate-300 text-sm">
                                        <Clock className="w-4 h-4 mr-1" aria-hidden="true" /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-teal-400 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-300 text-lg mb-6 max-w-2xl line-clamp-2">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
                                    Read Article <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                                </div>
                            </div>
                        </motion.article>
                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center" role="tablist" aria-label="Blog categories">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedCategory
                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        role="tab"
                        aria-selected={!selectedCategory}
                    >
                        All Posts
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                            role="tab"
                            aria-selected={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="block h-full">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer flex flex-col h-full"
                            >
                                <div className="relative overflow-hidden h-48 flex-shrink-0">
                                    <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                                        {post.category}
                                    </span>
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                                        <span className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                                            <time dateTime={post.date}>{post.date}</time>
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" aria-hidden="true" /> {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-xs font-medium text-slate-900">by {post.author}</span>
                                        <span className="text-teal-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                            Read <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
