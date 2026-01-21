interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Default VPN FAQs for the main FAQ section
export const defaultVPNFaqs: FAQItem[] = [
  {
    question: 'What is a VPN?',
    answer:
      'A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, protecting your online privacy and security. It creates a secure tunnel between your device and the internet, preventing third parties from tracking your online activities.',
  },
  {
    question: 'How much does MillionVPN cost?',
    answer:
      'MillionVPN starts at $1.99/month on the 2-year plan (90% off regular price). Monthly plans are $9.99/month, and 1-year plans are $4.99/month. All plans include a 7-day free trial and 30-day money-back guarantee.',
  },
  {
    question: 'Is MillionVPN safe?',
    answer:
      'Yes, MillionVPN uses military-grade AES-256 encryption, the same standard used by governments and security experts worldwide. We maintain a strict no-logs policy, meaning we never track, collect, or share your browsing data.',
  },
  {
    question: 'Does MillionVPN have a free trial?',
    answer:
      'Yes, MillionVPN offers a 7-day free trial on all plans. No credit card is required to start. You can test all premium features risk-free before committing to a subscription.',
  },
  {
    question: 'How many devices can I connect?',
    answer:
      'All MillionVPN plans allow up to 5 simultaneous device connections. You can protect your computer, smartphone, tablet, and other devices all at once with a single subscription.',
  },
  {
    question: 'What is a kill switch?',
    answer:
      'A kill switch is a security feature that automatically disconnects your device from the internet if your VPN connection drops unexpectedly. This prevents your real IP address and data from being exposed, ensuring continuous protection.',
  },
  {
    question: 'Can I use MillionVPN for streaming?',
    answer:
      'Yes, MillionVPN works with popular streaming services including Netflix, Hulu, BBC iPlayer, Disney+, and more. Our servers are optimized for streaming with 10 Gbps speeds to ensure buffer-free viewing.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'MillionVPN offers a 30-day money-back guarantee on all plans. If you are not satisfied for any reason within the first 30 days, contact our support team for a full refund. No questions asked.',
  },
  {
    question: 'Which devices are supported?',
    answer:
      'MillionVPN is available on Windows, macOS, iOS, Android, Linux, and browser extensions for Chrome and Firefox. We also support router configuration for whole-home protection.',
  },
]

// Export a pre-configured FAQ schema with default questions
export function DefaultFAQSchema() {
  return <FAQSchema faqs={defaultVPNFaqs} />
}
