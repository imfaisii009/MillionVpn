interface SoftwareAppSchemaProps {
  platform?: string
  downloadUrl?: string
}

export function SoftwareAppSchema({
  platform = 'Windows, macOS, iOS, Android, Linux',
  downloadUrl = 'https://millionvpn.com/download',
}: SoftwareAppSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MillionVPN',
    applicationCategory: 'SecurityApplication',
    operatingSystem: platform,
    description:
      'Fast, secure VPN application with military-grade encryption, 10 Gbps speeds, and servers in 100+ countries. One-click connect for instant protection.',
    offers: {
      '@type': 'Offer',
      price: '1.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: downloadUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'AES-256 Encryption',
      'No-Logs Policy',
      'Kill Switch',
      '10 Gbps Speeds',
      '1000+ Servers',
      '100+ Countries',
      '5 Simultaneous Connections',
      'WireGuard Protocol',
      '24/7 Customer Support',
    ],
    screenshot: 'https://millionvpn.com/images/app-screenshot.png',
    softwareVersion: '2.0',
    downloadUrl,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Platform-specific schema variants
export function WindowsAppSchema() {
  return (
    <SoftwareAppSchema
      platform="Windows 10, Windows 11"
      downloadUrl="https://millionvpn.com/download/windows"
    />
  )
}

export function MacAppSchema() {
  return (
    <SoftwareAppSchema
      platform="macOS 11.0+"
      downloadUrl="https://millionvpn.com/download/mac"
    />
  )
}

export function IOSAppSchema() {
  return (
    <SoftwareAppSchema
      platform="iOS 14.0+"
      downloadUrl="https://millionvpn.com/download/ios"
    />
  )
}

export function AndroidAppSchema() {
  return (
    <SoftwareAppSchema
      platform="Android 8.0+"
      downloadUrl="https://millionvpn.com/download/android"
    />
  )
}
