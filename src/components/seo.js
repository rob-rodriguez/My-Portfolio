import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import SharingImage from '../images/sharing-image.jpg'

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  }

  if (pathname === '/') {
    var pagetitle = defaultTitle;
  } else {
    var pagetitle = seo.title + ' | ' + defaultTitle;
  }

  return (
    <>
      <html lang="en" />
      <title>{pagetitle}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={SharingImage} /> */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      {/* <meta property="twitter:image" content={SharingImage} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}

      {children}
    </>
  )
}

export default SEO;