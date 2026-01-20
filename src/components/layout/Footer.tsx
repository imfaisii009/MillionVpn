import Link from 'next/link';
import { Twitter, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <Logo className="h-8 w-8" />
                            <span className="font-bold text-2xl text-gray-900 tracking-tight">MillionVPN</span>
                        </Link>
                        <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
                            Secure your digital life with military-grade encryption. Access content from anywhere in the world at lightning speeds.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Github, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-primary-600 transition-colors p-2 hover:bg-primary-50 rounded-full">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li><Link href="/#features" className="text-gray-500 hover:text-primary-600 transition-colors">Features</Link></li>
                            <li><Link href="/#pricing" className="text-gray-500 hover:text-primary-600 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary-600 transition-colors">Servers</Link></li>
                            <li><Link href="/download" className="text-gray-500 hover:text-primary-600 transition-colors">Download</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/blog" className="text-gray-500 hover:text-primary-600 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-primary-600 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/help" className="text-gray-500 hover:text-primary-600 transition-colors">Help Center</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary-600 transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-500 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} MillionVPN. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <span>Made with ❤️ for privacy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
