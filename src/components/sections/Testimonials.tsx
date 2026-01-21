import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Digital Nomad',
        content: 'MillionVPN has been a lifesaver for my travels. I can work securely from any coffee shop in the world.',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    },
    {
        name: 'David Chen',
        role: 'Software Engineer',
        content: 'The speed is incredible. I consistently get max bandwidth on my 1Gbps fiber connection. Highly recommended.',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Privacy Advocate',
        content: 'Finally, a VPN that actually respects privacy. The open-source client and independent audits give me peace of mind.',
        image: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by our Beta Community</h2>
                    <p className="text-gray-600">Join the exclusive group of users helping shape the future of privacy.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <article key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-1 mb-4" role="img" aria-label="5 out of 5 stars">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                                ))}
                            </div>
                            <blockquote className="text-gray-700 italic mb-6">&ldquo;{t.content}&rdquo;</blockquote>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={t.image}
                                    alt={`Photo of ${t.name}`}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full bg-gray-200"
                                    loading="lazy"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
