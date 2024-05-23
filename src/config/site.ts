export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Portfolio | Luiz Doretto',
  description: 'Luiz Doretto Frontend Developer Portfolio.',
  navItems: [
    {
      label: 'Home',
      href: 'home',
    },
    {
      label: 'About',
      href: 'about',
    },
    {
      label: 'Skills',
      href: 'skills',
    },
    // {
    //   label: 'Projects',
    //   href: 'projects',
    // },
    {
      label: 'Contact',
      href: 'contact',
    },
  ],
  links: {
    github: 'https://github.com/lhneves',
    gmail: 'mailto:luiz.n.doretto@gmail.com',
    linkedin: 'https://www.linkedin.com/in/luiz-doretto/',
  },
};
