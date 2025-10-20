/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vanlearn.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://vanlearn.com/sitemap.xml']
  }
};
