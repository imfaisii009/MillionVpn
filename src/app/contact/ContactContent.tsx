'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactContent() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Something went wrong');
            }

            setFormState('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: 'General Inquiry',
                message: '',
            });
        } catch (error) {
            setFormState('error');
            setErrorMessage(error instanceof Error ? error.message : 'Please try again');
        }
    };

    return (
        <>
            <section className="pt-32 pb-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Contact our team
                    </motion.h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We&apos;re here to help. Whether you have technical questions or need enterprise
                        solutions, our team is ready to assist you 24/7.
                    </p>
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <div className="bg-primary-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <MessageSquare className="h-5 w-5 mr-2 text-primary-600" aria-hidden="true" />
                                Live Chat
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Get instant answers from our support agents. Average wait time: 2 mins.
                            </p>
                            <button className="text-primary-600 font-semibold hover:text-primary-700 text-sm">
                                Start Chat &rarr;
                            </button>
                        </div>

                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-primary-600" aria-hidden="true" />
                                Email Support
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                For complex queries. We usually respond within 24 hours.
                            </p>
                            <a
                                href="mailto:support@millionvpn.com"
                                className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                            >
                                support@millionvpn.com
                            </a>
                        </div>

                        <div className="flex items-start text-gray-500 text-sm px-2">
                            <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <address className="not-italic">
                                Turner Business Centre
                                <br />
                                Greengate, Middleton
                                <br />
                                Manchester M24 1RU
                            </address>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            {formState === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="h-8 w-8 text-green-600" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">
                                        We&apos;ve received your request and will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="mt-6 text-primary-600 font-medium hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Billing Issue</option>
                                            <option>Feature Request</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            required
                                            className="w-full rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                        ></textarea>
                                    </div>

                                    {formState === 'error' && errorMessage && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm" role="alert">
                                            <AlertCircle className="h-4 w-4" aria-hidden="true" />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full py-3 px-6 rounded-xl text-white bg-primary-600 hover:bg-primary-700 font-semibold shadow-md transition-all flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formState === 'submitting' ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin mr-2" aria-hidden="true" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
