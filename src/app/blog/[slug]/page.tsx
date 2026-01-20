'use client';

import { useParams, notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Markdown Renderer
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl md:text-5xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 mr-3 flex-shrink-0" />
                        <span className="text-lg leading-relaxed">{line.replace('- ', '')}</span>
                    </div>
                );
            }
            if (line.match(/^\d+\. /)) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-3 text-slate-600">
                        <span className="font-bold text-teal-600 mr-3 min-w-[24px] text-lg">{line.match(/^\d+\./)?.[0]}</span>
                        <span className="text-lg leading-relaxed">{line.replace(/^\d+\. /, '')}</span>
                    </div>
                );
            }
            if (line.startsWith('> ')) {
                return (
                    <div key={index} className="border-l-4 border-teal-500 bg-teal-50 p-6 my-8 rounded-r-xl italic text-xl text-teal-900">
                        "{line.replace('> ', '')}"
                    </div>
                );
            }
            if (line.trim() === '') {
                return <div key={index} className="h-6" />;
            }
            return <p key={index} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">{line}</p>;
        });
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Immersive Audio/Visual Header */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight drop-shadow-sm">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-700 font-medium">
                            <span className="flex items-center">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                                    className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                                    alt={post.author}
                                />
                                {post.author}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-teal-600" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 -mt-12 relative z-10 pb-20">
                {/* Glass card background not needed due to gradient design, but spacing is good */}

                <div className="prose prose-lg prose-slate max-w-none">
                    {renderContent(post.content || '')}
                </div>

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <Share2 className="w-5 h-5 mr-2" /> Share this article
                    </h3>
                    <div className="flex gap-4">
                        <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </button>
                        <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-800 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center font-bold text-teal-600 hover:text-teal-700 hover:-translate-x-1 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    );
}
