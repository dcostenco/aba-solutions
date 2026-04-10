export default function sitemap() {
  const baseUrl = 'https://aba-solutions.vercel.app';

  const routes = [
    '', '/about', '/services', '/locations',
    '/resources', '/contact', '/privacy', '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
