'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = theme === 'dark' && !scrolled;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Logo className="h-10 w-10" />
                        <span className={`font-bold text-2xl tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>MillionVPN</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#features" className={`${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary-600'} font-medium transition-colors`}>Features</Link>
                        <Link href="/#pricing" className={`${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary-600'} font-medium transition-colors`}>Pricing</Link>
                        <Link href="/#comparison" className={`${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary-600'} font-medium transition-colors`}>Comparison</Link>
                        <Link href="/#faq" className={`${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary-600'} font-medium transition-colors`}>FAQ</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/login"
                            className={`${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-primary-600'} font-medium px-4 py-2 transition-colors`}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/#pricing"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-primary hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get MillionVPN
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isDark ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'} p-2 rounded-lg transition-colors`}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with CSS transitions instead of framer-motion */}
            <div
                className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    <Link href="/#features" className="block px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/#pricing" className="block px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/#comparison" className="block px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Comparison</Link>
                    <Link href="/#faq" className="block px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <div className="pt-4 border-t border-gray-100 mt-2">
                        <Link href="/login" className="block px-3 py-3 text-gray-600 font-medium hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Sign in</Link>
                        <Link href="/#pricing" className="block w-full text-center mt-4 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg" onClick={() => setIsOpen(false)}>
                            Get MillionVPN
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
