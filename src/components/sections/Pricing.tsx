import Link from 'next/link';
import { Check } from 'lucide-react';

// Plan data for both display and schema
const plans = [
    {
        name: '1 Month',
        fullName: 'MillionVPN Monthly Plan',
        price: '9.99',
        totalPrice: '9.99',
        period: '/mo',
        description: 'Perfect for short trips',
        sku: 'MVPN-1M',
        features: ['1 Device', 'Standard Speed', '30-day money-back'],
        highlight: false,
    },
    {
        name: '2 Years',
        fullName: 'MillionVPN 2-Year Plan',
        price: '1.99',
        totalPrice: '47.76',
        period: '/mo',
        billed: 'Billed $47.76 every 2 years',
        description: 'Best Value - Save 80%',
        sku: 'MVPN-2Y',
        features: ['10 Devices', 'Maximum Speed', 'Streaming Optimized', 'AdBlocker Included', '30-day money-back'],
        highlight: true,
    },
    {
        name: '1 Year',
        fullName: 'MillionVPN 1-Year Plan',
        price: '4.99',
        totalPrice: '59.88',
        period: '/mo',
        billed: 'Billed $59.88 yearly',
        description: 'Great balance',
        sku: 'MVPN-1Y',
        features: ['5 Devices', 'High Speed', 'Streaming Optimized', '30-day money-back'],
        highlight: false,
    },
];

// Product Schema for SEO rich snippets
function PricingSchemaScript() {
    const schemas = plans.map((plan) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: plan.fullName,
        description: `${plan.description}. Fast, secure VPN service with ${plan.features.join(', ')}.`,
        brand: {
            '@type': 'Brand',
            name: 'MillionVPN',
        },
        sku: plan.sku,
        offers: {
            '@type': 'Offer',
            price: plan.totalPrice,
            priceCurrency: 'USD',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            url: 'https://millionvpn.com/#pricing',
            seller: {
                '@type': 'Organization',
                name: 'MillionVPN',
            },
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '1250',
            bestRating: '5',
            worstRating: '1',
        },
    }));

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-900 text-white">
            {/* Product Schema for rich snippets */}
            <PricingSchemaScript />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your plan</h2>
                    {/* Speakable pricing summary */}
                    <p className="speakable-pricing text-gray-400 max-w-2xl mx-auto">
                        VPN plans starting at $1.99/month. All plans include our 30-day money-back guarantee and 7-day free trial.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-1 ${plan.highlight
                                    ? 'bg-primary-600 shadow-2xl shadow-primary-900/50 scale-105 z-10'
                                    : 'bg-gray-800 border border-gray-700'
                                }`}
                            itemScope
                            itemType="https://schema.org/Product"
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                                    <span className="bg-accent-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2" itemProp="name">{plan.name}</h3>
                            <div className="flex items-baseline mb-1" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                <span className="text-4xl font-bold">$</span>
                                <span className="text-5xl font-bold" itemProp="price">{plan.price}</span>
                                <meta itemProp="priceCurrency" content="USD" />
                                <meta itemProp="availability" content="https://schema.org/InStock" />
                                <span className="text-gray-300 ml-1">{plan.period}</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-6 h-6">{plan.billed || ''}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-primary-400'}`} aria-hidden="true" />
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/signup"
                                className={`block w-full py-4 px-6 rounded-xl font-bold transition-all text-center ${plan.highlight
                                        ? 'bg-white text-primary-700 hover:bg-gray-100'
                                        : 'bg-primary-600 text-white hover:bg-primary-700'
                                    }`}
                                aria-label={`Get started with ${plan.fullName}`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
