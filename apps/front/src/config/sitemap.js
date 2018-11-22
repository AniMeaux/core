const categories = (k) => {
  return ['cat', 'dog', 'rodent', 'bird', 'reptile'].map(v => ({
    url: `/${k}/${v}`,
    changefreq: 'weekly',
    priority: 0.8,
  }));
};

module.exports = {
  path: '/sitemap.xml',
  hostname: 'https://www.animeaux.org',
  cacheTime: 1000 * 60 * 15,
  gzip: true,
  generate: false,
  exclude: [
    '/become-member',
    '/donate',
    '/sheets',
    '/404',
    '/500',
    '/events',
  ],
  routes: [
    {
      url: '/',
      changefreq: 'monthly',
      priority: 1,
    },
    {
      url: '/adopt',
      changefreq: 'weekly',
      priority: 0.9,
    },
    ...categories('adopt'),
    {
      url: '/success',
      changefreq: 'weekly',
      priority: 0.9,
    },
    ...categories('success'),
    {
      url: '/legal',
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: 0.5,
    },
  ],
};
