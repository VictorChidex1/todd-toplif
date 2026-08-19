import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  path: string
  ogType?: string
}

const SITE_URL = "https://todd-toplif.vercel.app"
const OG_IMAGE = "/assets/todd-toplif.jpg"

export function SEO({ title, description, path, ogType = "website" }: SEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Todd Topliff" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  )
}
