interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  publishDate: string
  modifiedDate?: string
  image?: string
  url: string
  category?: string
}

export function ArticleSchema({
  title,
  description,
  author,
  publishDate,
  modifiedDate,
  image,
  url,
  category,
}: ArticleSchemaProps) {
  // Convert date strings to ISO format
  const formatDate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr)
      return date.toISOString()
    } catch {
      return new Date().toISOString()
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MillionVPN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://millionvpn.com/logo.png',
      },
    },
    datePublished: formatDate(publishDate),
    dateModified: formatDate(modifiedDate || publishDate),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    ...(category && {
      articleSection: category,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Blog post specific schema
export function BlogPostSchema({
  title,
  excerpt,
  author,
  date,
  slug,
  image,
  category,
}: {
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
  image?: string
  category?: string
}) {
  return (
    <ArticleSchema
      title={title}
      description={excerpt}
      author={author}
      publishDate={date}
      url={`https://millionvpn.com/blog/${slug}`}
      image={image}
      category={category}
    />
  )
}

// Help article specific schema (TechArticle type)
export function HelpArticleSchema({
  title,
  slug,
  lastUpdated,
  category,
}: {
  title: string
  slug: string
  lastUpdated: string
  category: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: `Learn ${title.toLowerCase()} with this step-by-step guide from MillionVPN Help Center.`,
    author: {
      '@type': 'Organization',
      name: 'MillionVPN Support Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MillionVPN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://millionvpn.com/logo.png',
      },
    },
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://millionvpn.com/help/${slug}`,
    },
    articleSection: category,
    about: {
      '@type': 'SoftwareApplication',
      name: 'MillionVPN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
