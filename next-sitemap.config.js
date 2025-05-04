// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://ivpankaj.vercel.app', // 🔁 Replace with your real domain
    generateRobotsTxt: true,           // Automatically create robots.txt
    sitemapSize: 7000,                 // Max URLs per sitemap file
    changefreq: 'daily',
    priority: 0.7,
   // Optional: exclude private routes
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/admin'],
        },
      ],
    },
  }
  