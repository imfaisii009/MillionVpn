interface ProductSchemaProps {
  name: string
  description: string
  price: string
  priceCurrency?: string
  priceValidUntil?: string
  url?: string
  sku?: string
  ratingValue?: string
  reviewCount?: string
}

export function ProductSchema({
  name,
  description,
  price,
  priceCurrency = 'USD',
  priceValidUntil = '2026-12-31',
  url = 'https://millionvpn.com/pricing',
  sku = 'MVPN-2Y',
  ratingValue = '4.8',
  reviewCount = '1250',
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'MillionVPN',
    },
    sku,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      priceValidUntil,
      availability: 'https://schema.org/InStock',
      url,
      seller: {
        '@type': 'Organization',
        name: 'MillionVPN',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-configured schemas for each pricing plan
export function PricingSchemas() {
  const plans = [
    {
      name: 'MillionVPN Monthly Plan',
      description:
        'Fast, secure VPN service with monthly billing. Includes 10 Gbps speeds, 100+ server locations, and 5 simultaneous device connections.',
      price: '9.99',
      sku: 'MVPN-1M',
    },
    {
      name: 'MillionVPN 1-Year Plan',
      description:
        'Fast, secure VPN service with annual billing. Save 50% with 12-month commitment. Includes all premium features.',
      price: '59.88',
      sku: 'MVPN-1Y',
    },
    {
      name: 'MillionVPN 2-Year Plan - Best Value',
      description:
        'Fast, secure VPN service at the best price. Save 90% with 24-month commitment. Includes 7-day free trial and 30-day money-back guarantee.',
      price: '47.76',
      sku: 'MVPN-2Y',
    },
  ]

  return (
    <>
      {plans.map((plan) => (
        <ProductSchema
          key={plan.sku}
          name={plan.name}
          description={plan.description}
          price={plan.price}
          sku={plan.sku}
        />
      ))}
    </>
  )
}
