export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MillionVPN',
    url: 'https://millionvpn.com',
    logo: 'https://millionvpn.com/logo.png',
    description:
      'Fast, secure, and affordable VPN service. Protect your privacy with military-grade AES-256 encryption, 10 Gbps speeds, and servers in 100+ countries.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/millionvpn',
      'https://facebook.com/millionvpn',
      'https://instagram.com/millionvpn',
      'https://youtube.com/@millionvpn',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@millionvpn.com',
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
