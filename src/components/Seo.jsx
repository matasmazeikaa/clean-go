import React from "react"
import { Helmet } from "react-helmet"

const titleDefault =
  "Profesionalus patalpų, butų, namų, komercinių patalpų ir langų valymas"
const url = "https://cleango.lt/"
const defaultDescription =
  "Siūlome aukščiausios kokybės patalpų, butų, namų, komercinių patalpų ir langų valymo paslaugas. Mūsų komanda yra patyrusi ir profesionali. Susisiekite su mumis jau šiandien!"
const author = "Cleango"

export default function Seo({
  title = titleDefault,
  description = defaultDescription,
}) {
  return (
    <Helmet>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="lt" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />
      {/* Search Engine Optimization Meta Tags */}
      <title>{title} | Cleango</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="patalpų valymas, butų valymas, namų valymas, komercinių patalpų valymas, langų valymas, profesionalios paslaugos, kokybiškas valymas, cleango"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name="og:title" content={title} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={"/icons/share.png"} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        color="#000000"
        href="/icons/safari-pinned-tab.svg"
      />
      <link rel="apple-touch-startup-image" href="/startup.png" />
      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
    </Helmet>
  )
}
