interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  dateModified?: string
}

export function WebPageSchema({
  name,
  description,
  url,
  dateModified = new Date().toISOString(),
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    dateModified,
    isPartOf: {
      '@type': 'WebSite',
      name: 'MillionVPN',
      url: 'https://millionvpn.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MillionVPN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://millionvpn.com/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Website schema for the root layout
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MillionVPN',
    url: 'https://millionvpn.com',
    description:
      'Fast, secure, and affordable VPN service. Protect your privacy with military-grade encryption.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://millionvpn.com/help?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
