'use client';

export default function Logo({ className = "h-8 w-8", withText = false }: { className?: string, withText?: boolean }) {
    return (
        <div className="flex items-center gap-2">
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Background Shield Outline */}
                <path
                    d="M50 5 L85 20 V50 C85 75 50 95 50 95 C50 95 15 75 15 50 V20 L50 5 Z"
                    stroke="#2D9D9C"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                />

                {/* Central 'M' / Pulse Shape */}
                <path
                    d="M30 40 L50 60 L70 40 M50 60 V30"
                    stroke="#2D9D9C"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                />

                {/* Tech Dot */}
                <circle cx="50" cy="20" r="4" fill="#2D9D9C" />
            </svg>
            {withText && (
                <span className="font-bold text-2xl text-gray-900 tracking-tight">MillionVPN</span>
            )}
        </div>
    );
}
