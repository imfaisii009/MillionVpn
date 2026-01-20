'use client';

import { useParams, notFound } from 'next/navigation';
import { articles, categories } from '@/data/helpData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Calendar, Clock, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug;
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        notFound();
    }

    const category = categories.find(c => c.id === article.category);

    // Simple Markdown Renderer
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 mr-3 flex-shrink-0" />
                        <span>{line.replace('- ', '')}</span>
                    </div>
                );
            }
            if (line.startsWith('> ')) {
                return (
                    <div key={index} className="border-l-4 border-accent-teal bg-teal-50 p-4 my-4 rounded-r-lg text-teal-900">
                        {line.replace('> ', '')}
                    </div>
                );
            }
            if (line.match(/^\d+\. /)) {
                return (
                    <div key={index} className="flex items-start ml-4 mb-2 text-gray-600">
                        <span className="font-bold text-primary-600 mr-3 min-w-[20px]">{line.match(/^\d+\./)?.[0]}</span>
                        <span>{line.replace(/^\d+\. /, '')}</span>
                    </div>
                );
            }
            if (line.trim() === '') {
                return <div key={index} className="h-4" />;
            }
            return <p key={index} className="text-gray-600 leading-relaxed mb-4">{line}</p>;
        });
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-gray-100 pt-24 pb-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">
                            <Home className="h-4 w-4" />
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <Link href="/help" className="hover:text-primary-600 transition-colors">Help Center</Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="text-gray-900 truncate max-w-[200px]">{article.title}</span>
                    </div>

                    <Link href="/help" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Help Center
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        {article.title}
                    </motion.h1>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
                        {category && (
                            <div className="flex items-center text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                                <category.icon className="h-4 w-4 mr-2" />
                                {category.name}
                            </div>
                        )}
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {article.readTime}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Updated {article.lastUpdated}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 max-w-none"
                >
                    {renderContent(article.content)}
                </motion.article>

                {/* Helpful? */}
                <div className="mt-12 text-center border-t border-gray-200 pt-12">
                    <p className="text-gray-900 font-medium mb-4">Was this article helpful?</p>
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-600">
                            👍 Yes
                        </button>
                        <button className="px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-600">
                            👎 No
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
