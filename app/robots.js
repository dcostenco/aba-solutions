export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portal/', '/auth/'],
    },
    sitemap: 'https://aba-solutions.vercel.app/sitemap.xml',
  };
}
