module.exports = {
  title: 'Association de protection animale',
  titleTemplate: 'Ani\'Meaux - %s',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Ani\'Meaux - Association de protection animale',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Site officiel de l\'association de protection animale Ani\'Meaux, basé sur la ville de Meaux et ses environs.',
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: 'Ani\'Meaux - Association de protection animale',
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: 'Site officiel de l\'association de protection animale Ani\'Meaux, basé sur la ville de Meaux et ses environs.',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://www.animeaux.org',
    },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    {
      rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png',
    },
    {
      rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'theme-color', content: '#ffffff' },
    { rel: 'msapplication-TileColor', content: '#ffffff' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500|Material+Icons' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: `{
        "@context": "http://www.schema.org",
        "@type": "NGO",
        "name": "Ani'Meaux",
        "url": "https://www.animeaux.org",
        "logo": "https://www.animeaux.org/logo.png",
        "image": "https://www.animeaux.org/main-picture.png",
        "description": "Nous sauvons, accueillons en famille d’accueil et plaçons tous les animaux que nos routes et déroutes croisent.",
        "email": "contact@animeaux.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "81, Rue du Faubourg Saint-Nicolas",
          "addressLocality": "Meaux",
          "addressRegion": "Seine-et-Marne",
          "postalCode": "77100",
          "addressCountry": "France"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33612194392",
          "email": "contact@animeaux.org",
          "contactOption" : "TollFree",
          "areaServed" : "FR",
          "contactType": "customer service"
        }
      }`,
    },
  ],
  htmlAttrs: {
    lang: 'fr',
  },
  __dangerouslyDisableSanitizers: ['script'],
};
