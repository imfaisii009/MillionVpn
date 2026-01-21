'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ShieldAlert } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-900 flex flex-col">
            <Navbar theme="dark" />

            <div className="flex-grow relative flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative inline-block"
                    >
                        <h1 className="text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 animate-gradient bg-300%">
                            404
                        </h1>
                        <motion.div
                            initial={{ x: -20 }}
                            animate={{ x: 20 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
                            className="absolute -top-4 -right-8"
                        >
                            <ShieldAlert className="w-16 h-16 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Connection Terminated
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto">
                            The page you are looking for has vanished into the digital void or never existed. Secure your connection and return to safety.
                        </p>

                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-lg shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all border border-teal-400/20"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Return to Landing Page
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
