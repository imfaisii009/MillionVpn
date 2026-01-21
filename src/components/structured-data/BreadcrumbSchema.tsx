interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Helper function to generate breadcrumb items
export function generateBreadcrumbs(
  path: string,
  customNames?: Record<string, string>
): BreadcrumbItem[] {
  const baseUrl = 'https://millionvpn.com'
  const segments = path.split('/').filter(Boolean)

  const defaultNames: Record<string, string> = {
    blog: 'Blog',
    help: 'Help Center',
    download: 'Download',
    pricing: 'Pricing',
    features: 'Features',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    'refund-policy': 'Refund Policy',
    ...customNames,
  }

  const items: BreadcrumbItem[] = [{ name: 'Home', url: baseUrl }]

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const name = defaultNames[segment] || segment.replace(/-/g, ' ')
    items.push({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url: `${baseUrl}${currentPath}`,
    })
  })

  return items
}

// Pre-configured breadcrumbs for common pages
export function BlogBreadcrumb({ postTitle }: { postTitle?: string }) {
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://millionvpn.com' },
    { name: 'Blog', url: 'https://millionvpn.com/blog' },
  ]

  if (postTitle) {
    items.push({
      name: postTitle,
      url: '#', // Current page
    })
  }

  return <BreadcrumbSchema items={items} />
}

export function HelpBreadcrumb({ articleTitle }: { articleTitle?: string }) {
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://millionvpn.com' },
    { name: 'Help Center', url: 'https://millionvpn.com/help' },
  ]

  if (articleTitle) {
    items.push({
      name: articleTitle,
      url: '#', // Current page
    })
  }

  return <BreadcrumbSchema items={items} />
}

export function DownloadBreadcrumb({ platform }: { platform?: string }) {
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://millionvpn.com' },
    { name: 'Download', url: 'https://millionvpn.com/download' },
  ]

  if (platform) {
    items.push({
      name: `Download for ${platform}`,
      url: '#',
    })
  }

  return <BreadcrumbSchema items={items} />
}
