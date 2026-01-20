'use client';

import { Check, X, HelpCircle } from 'lucide-react';

export default function Comparison() {
    return (
        <section id="comparison" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose MillionVPN?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">See how we stack up against the competition. Don't settle for less.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-gray-100 w-1/4"></th>
                                <th className="p-4 border-b-2 border-primary-500 w-1/4 bg-primary-50 rounded-t-xl text-center">
                                    <span className="block text-xl font-bold text-primary-700">MillionVPN</span>
                                </th>
                                <th className="p-4 border-b-2 border-gray-100 w-1/4 text-center">
                                    <span className="block text-lg font-semibold text-gray-500">Free VPNs</span>
                                </th>
                                <th className="p-4 border-b-2 border-gray-100 w-1/4 text-center">
                                    <span className="block text-lg font-semibold text-gray-500">Other Paid VPNs</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {[
                                { name: 'Connection Speed', million: '10 Gbps', free: 'Slow / Throttled', paid: 'Varies' },
                                { name: 'Server Locations', million: '100+ Countries', free: 'Limited (< 5)', paid: '50-100' },
                                { name: 'No-Logs Policy', million: true, free: false, paid: 'Sometimes' },
                                { name: 'Streaming Support', million: true, free: false, paid: 'Varies' },
                                { name: 'Devices per Account', million: '10', free: '1', paid: '5-7' },
                                { name: 'Ad Blocker', million: true, free: false, paid: 'Rarely' },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-medium text-gray-900 flex items-center">
                                        {row.name}
                                        <HelpCircle className="h-4 w-4 ml-2 text-gray-300" />
                                    </td>
                                    <td className="p-6 text-center bg-primary-50/30 font-semibold text-gray-900">
                                        {row.million === true ? (
                                            <Check className="h-6 w-6 text-green-500 mx-auto" />
                                        ) : (
                                            row.million
                                        )}
                                    </td>
                                    <td className="p-6 text-center">
                                        {row.free === false ? (
                                            <X className="h-6 w-6 text-red-400 mx-auto" />
                                        ) : (
                                            row.free
                                        )}
                                    </td>
                                    <td className="p-6 text-center">
                                        {row.paid === 'Sometimes' || row.paid === 'Varies' || row.paid === 'Rarely' ? (
                                            <span className="text-yellow-600">{row.paid}</span>
                                        ) : (
                                            row.paid
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
