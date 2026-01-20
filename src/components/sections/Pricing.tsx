'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: '1 Month',
        price: '9.99',
        period: '/mo',
        description: 'Perfect for short trips',
        features: ['1 Device', 'Standard Speed', '30-day money-back'],
        highlight: false,
    },
    {
        name: '2 Years',
        price: '1.99',
        period: '/mo',
        billed: 'Billed $47.76 every 2 years',
        description: 'Best Value - Save 80%',
        features: ['10 Devices', 'Maximum Speed', 'Streaming Optimized', 'AdBlocker Included', '30-day money-back'],
        highlight: true,
    },
    {
        name: '1 Year',
        price: '4.99',
        period: '/mo',
        billed: 'Billed $59.88 yearly',
        description: 'Great balance',
        features: ['5 Devices', 'High Speed', 'Streaming Optimized', '30-day money-back'],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your plan</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">All plans include our 30-day money-back guarantee.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 ${plan.highlight
                                    ? 'bg-primary-600 shadow-2xl shadow-primary-900/50 scale-105 z-10'
                                    : 'bg-gray-800 border border-gray-700'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                                    <span className="bg-accent-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-1">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-5xl font-bold">{plan.price}</span>
                                <span className="text-gray-300 ml-1">{plan.period}</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-6 h-6">{plan.billed || ''}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-primary-400'}`} />
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 px-6 rounded-xl font-bold transition-all text-center ${plan.highlight
                                        ? 'bg-white text-primary-700 hover:bg-gray-100'
                                        : 'bg-primary-600 text-white hover:bg-primary-700'
                                    }`}
                            >
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
