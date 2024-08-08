export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Portfolio | Luiz Doretto',
  description: 'Luiz Doretto Frontend Developer Portfolio.',
  navItems: [
    {
      label: 'home',
      href: 'home',
    },
    {
      label: 'about',
      href: 'about',
    },
    {
      label: 'skills',
      href: 'skills',
    },
    // {
    //   label: 'Projects',
    //   href: 'projects',
    // },
    {
      label: 'contact',
      href: 'contact',
    },
  ],
  links: {
    github: 'https://github.com/lhneves',
    gmail: 'mailto:luiz.n.doretto@gmail.com',
    linkedin: 'https://www.linkedin.com/in/luiz-doretto/',
  },
};
