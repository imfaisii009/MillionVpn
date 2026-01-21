interface SpeakableSchemaProps {
  pageName: string
  description: string
  url: string
  priceFrom?: string
}

export function SpeakableSchema({
  pageName,
  description,
  url,
  priceFrom,
}: SpeakableSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageName,
    description: priceFrom
      ? `${description} Prices from ${priceFrom} per month with 7-day free trial.`
      : description,
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.speakable-headline',
        '.speakable-tldr',
        '.speakable-pricing',
        '.speakable-cta',
      ],
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'MillionVPN',
      url: 'https://millionvpn.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-configured speakable schemas for key pages
export function HomeSpeakableSchema() {
  return (
    <SpeakableSchema
      pageName="MillionVPN - Fast, Secure & Affordable VPN Service"
      description="MillionVPN offers military-grade AES-256 encryption, 10 Gbps speeds, and servers in 100+ countries. Protect 5 devices simultaneously."
      url="https://millionvpn.com"
      priceFrom="$1.99"
    />
  )
}

export function PricingSpeakableSchema() {
  return (
    <SpeakableSchema
      pageName="VPN Pricing Plans | MillionVPN"
      description="Choose your MillionVPN plan. Monthly, yearly, or 2-year options available. All plans include unlimited bandwidth, kill switch, and 30-day money-back guarantee."
      url="https://millionvpn.com/pricing"
      priceFrom="$1.99"
    />
  )
}

export function FeaturesSpeakableSchema() {
  return (
    <SpeakableSchema
      pageName="VPN Features | MillionVPN"
      description="Military-grade AES-256 encryption, strict no-logs policy, automatic kill switch, WireGuard protocol, and 10 Gbps server speeds."
      url="https://millionvpn.com/features"
    />
  )
}

export function DownloadSpeakableSchema() {
  return (
    <SpeakableSchema
      pageName="Download VPN for All Devices | MillionVPN"
      description="Download MillionVPN for Windows, macOS, iOS, Android, Linux, and browser extensions. One-click setup, connect in seconds."
      url="https://millionvpn.com/download"
    />
  )
}
