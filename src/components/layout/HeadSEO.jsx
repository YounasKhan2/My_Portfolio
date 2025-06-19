// File: src/components/layout/HeadSEO.jsx
import Head from 'next/head';

const HeadSEO = () => {
  // Centralized SEO data
  const seoData = {
    title: "Muhammad Younas - Web & App Developer",
    description: "Full Stack Developer specializing in Next.js, Flutter, and Python. Building modern web applications and mobile solutions with focus on performance and user experience.",
    keywords: "Muhammad Younas, Web Developer, App Developer, Flutter Developer, Next.js, Full Stack Developer, Python Developer",
    siteUrl: "https://muhammadyounas.com", // Replace with your actual domain
    imageUrl: "/images/og-image.png", // Make sure this image exists in your public folder
    twitterHandle: "@yourusername", // Replace with your Twitter handle
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content="Muhammad Younas" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.siteUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={`${seoData.siteUrl}${seoData.imageUrl}`} />
      <meta property="og:site_name" content="Muhammad Younas Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoData.twitterHandle} />
      <meta name="twitter:creator" content={seoData.twitterHandle} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={`${seoData.siteUrl}${seoData.imageUrl}`} />

      {/* Favicon */}
      <link rel="icon" href="/my-favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/my-apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/my-favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/my-favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0F172A" media="(prefers-color-scheme: dark)" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="google" content="notranslate" />
      <link rel="canonical" href={seoData.siteUrl} />

      {/* Preconnect for Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Preload main font */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadSEO;