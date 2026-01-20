'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Search, Book, MessageCircle, FileText, Settings, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

import { articles, categories } from '@/data/helpData';

export default function HelpCenter() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="bg-primary-900 text-white pt-32 pb-20 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-accent-teal opacity-20 blur-[80px] rounded-full" />
                    <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary-500 opacity-20 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        How can we help you?
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-teal sm:text-lg sm:leading-6"
                            placeholder="Search for articles, guides, and more..."
                        />
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 text-primary-600">
                                <cat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.name}</h3>
                            <p className="text-sm text-gray-500">{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {articles.map((article, i) => (
                            <Link
                                key={article.id}
                                href={`/help/${article.slug}`}
                                className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
                            >
                                <FileText className="h-5 w-5 text-gray-400 mr-3 group-hover:text-primary-600" />
                                <span className="text-gray-700 font-medium group-hover:text-primary-900">{article.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
