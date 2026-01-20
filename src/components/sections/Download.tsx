'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download as DownloadIcon } from 'lucide-react';


const platforms = [
    {
        name: 'Windows',
        version: 'v2.4.1',
        requirements: 'Windows 10, 11',
        color: 'from-blue-500 to-cyan-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.724-1.602l12.518-1.748v11.45H10.724V1.847zm-10.724 10.957h9.75v8.303l-9.75-1.404v-6.899zm10.724 0h12.518v9.907l-12.518-1.68V12.804z" />
            </svg>
        ),
    },
    {
        name: 'macOS',
        version: 'v3.0.2',
        requirements: 'macOS 12+',
        color: 'from-gray-300 to-gray-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.61-.69.8-1.27 2.07-1.12 3.15 1.17.09 2.37-.82 3.11-1.65" />
            </svg>
        ),
    },
    {
        name: 'Linux',
        version: 'v1.5.0',
        requirements: 'Ubuntu, Debian, Fedora',
        color: 'from-yellow-400 to-orange-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 2.45a9.55 9.55 0 0 0-9.55 9.55A9.55 9.55 0 0 0 12 21.55a9.55 9.55 0 0 0 9.55-9.55A9.55 9.55 0 0 0 12 2.45zm2.14 13.56c-.52 1.13-2.56 1.34-3.56.24-.31-.33-.66-1.29-.12-1.8.85-.79 3.01-.76 3.68 1.56zm-7.6-6.1c0-1.77 2.06-2.45 3.57-1.2.65.53.82 1.5.54 2.27-.47 1.3-3.18 1.39-4.11.23-.39-.47-.44-1.12 0-1.3zm12.39 1.11c-.3.07-.63.2-.84.44-.94 1.11-3.66 1.05-4.12-.25-.26-.75.05-1.6 1.03-2.07 1.83-.87 3.58.53 3.93 1.88zm-5.46 3.44c-.67-2.31-2.9-2.34-3.68-1.56-.54.51-.19 1.47.12 1.8 1.01 1.1 3.04.88 3.56-.24z" />
            </svg>
        ),
        isPenguin: true // To handle custom linux svg if needed, but generic circle logic for now
    },
    {
        name: 'iOS',
        version: 'Latest',
        requirements: 'iPhone, iPad',
        color: 'from-indigo-400 to-purple-500',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.61-.69.8-1.27 2.07-1.12 3.15 1.17.09 2.37-.82 3.11-1.65" />
            </svg>
        ),
    },
    {
        name: 'Android',
        version: 'Latest',
        requirements: 'Phones, Tablets, TV',
        color: 'from-green-400 to-emerald-600',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M16.607 1.43c.48.814 1.348 1.405 2.278 1.678.93-.273 1.8-.864 2.28-1.678.368-.614 1.116-.856 1.764-.52.648.337.915 1.1.547 1.714-1.04 1.765-2.88 3.003-5.02 3.256v6.2c0 .93-.213 1.823-.593 2.628l2.94 5.92c.31.62-.05 1.38-.72 1.54-.67.16-1.33-.23-1.54-.89l-2.73-5.46c-.95.42-1.99.66-3.08.66s-2.13-.24-3.08-.66l-2.73 5.46c-.21.66-.87 1.05-1.54.89-.67-.16-1.03-.92-.72-1.54l2.94-5.92c-.38-.805-.593-1.698-.593-2.628v-6.2c-2.14-.253-3.98-1.49-5.02-3.256-.368-.614-.1-1.377.547-1.714.648-.337 1.396-.094 1.764.52.48.814 1.348 1.405 2.278 1.678.93-.273 1.8-.864 2.28-1.678.367-.614 1.115-.856 1.763-.52.648.337.915 1.1.547 1.714z" />
            </svg>
        ),
    },
    {
        name: 'Chrome',
        version: 'Extension',
        requirements: 'Chrome, Brave, Edge',
        color: 'from-red-400 to-yellow-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 4.909c2.283 0 4.31.91 5.798 2.385l-3.527 6.11H4.665c.677-4.835 4.885-8.495 9.773-8.495zM4.09 12c0 4.14 3.197 7.537 7.24 7.93l-4.14-7.17-2.625-4.55C4.305 9.38 4.09 10.662 4.09 12zm7.91 8c-3.17 0-5.968-1.564-7.662-3.957l4.032-6.983 2.97 5.143c.22.38.44.757.66 1.137.228.397-.04.9-.49.9H12zm2.09-8.44l3.25-5.63A7.906 7.906 0 0 1 19.91 12a7.89 7.89 0 0 1-1.63 4.85l-3.41-5.91-.01-.01a1.09 1.09 0 0 0 .14-.49c0-.608-.492-1.1-1.1-1.1-.216 0-.416.063-.585.17l-.005.004z" />
            </svg>
        ),
    },
];

export default function Download() {
    return (
        <section className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-6"
                    >
                        Download Everywhere
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        One subscription covers all your devices. Get secure access on any platform with our beautifully designed native apps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                    {platform.icon}
                                </div>

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                                            {platform.name}
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                            {platform.requirements}
                                        </p>
                                    </div>
                                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/10 text-xs font-mono rounded text-slate-600 dark:text-slate-300">
                                        {platform.version}
                                    </span>
                                </div>

                                <button className="w-full mt-6 py-3 px-4 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 group/btn transition-colors text-slate-900 dark:text-white font-medium">
                                    <DownloadIcon className="w-4 h-4" />
                                    <span>Download Now</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
