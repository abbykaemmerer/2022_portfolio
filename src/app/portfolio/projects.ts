export type CardTone = 'olive' | 'blue' | 'wine';
export type ProjectCta = 'live' | 'comingSoon' | 'sneakPeek';

export interface ProjectCard {
  title: string;
  description: string;
  tech: string;
  image?: string;
  alt: string;
  href?: string;
  tone: CardTone;
  cta: ProjectCta;
}

export const professionalProjects: ProjectCard[] = [
  {
    title: 'Emma Highley Charm Builder',
    description:
      'A custom Shopify charm builder that lets shoppers choose a base necklace, add charms, and preview their combination before purchasing. Currently in development.',
    tech: 'Shopify · JavaScript · HTML · CSS',
    alt: 'Coming soon placeholder for the Emma Highley charm builder',
    tone: 'olive',
    cta: 'comingSoon',
  },
  {
    title: 'interos.ai',
    description:
      'Rebuilt and owned Interos’ customer-facing web platform, leading front-end architecture, reusable systems, accessibility, performance, releases, and ongoing production development.',
    tech: 'React · TypeScript · WordPress · HTML · CSS',
    image: '/assets/img/professional-work/interos.png',
    alt: 'Screenshot of the interos.ai customer-facing website',
    href: 'https://www.interos.ai',
    tone: 'blue',
    cta: 'live',
  },
  {
    title: 'Nowadays Film',
    description:
      'Designed and built a Squarespace site for a photographer, including the site structure, custom styling, color palette, logo, and overall brand direction. The site has since been client-managed.',
    tech: 'Squarespace · JavaScript · HTML · CSS',
    image: '/assets/img/professional-work/nowadays.png',
    alt: 'Screenshot of the Nowadays Film website',
    tone: 'wine',
    href: 'https://nowadaysfilm.com',
    cta: 'live',
  },
  {
    title: 'Emily Duddy Art',
    description:
      `Designed and built a Squarespace site and logo for artist Emily Duddy to showcase her work, sell available pieces, and manage customer inquiries. The site has since been client-managed.`,
    tech: 'Squarespace · JavaScript · HTML · CSS',
    image: '/assets/img/professional-work/emily-duddy.png',
    alt: 'Screenshot of the Emily Duddy Art website',
    href: 'https://emily-duddy.com',
    tone: 'olive',
    cta: 'live',
  }
];

export const personalProjects: ProjectCard[] = [
  {
    title: 'What Should Abby Do Tonight?',
    description:
      'A React + TypeScript app that uses weather, sunset, mood, and company to recommend one Austin activity for the night, with a couple of backup options if the first pick doesn’t hit.',
    tech: 'React · TypeScript · APIs · CSS',
    alt: 'Coming soon placeholder for What Should Abby Do Tonight?',
    tone: 'olive',
    cta: 'comingSoon',
  },
  {
    title: 'Clothing Swap Invitation & RSVP',
    description:
      'A mobile-first invitation and RSVP app for clothing swaps, designed to keep event details, attendance, and guest communication in one place.',
    tech: 'React · JavaScript · HTML · CSS',
    image: '/assets/img/personal-projects/swap.png',
    alt: 'Screenshot of the clothing swap invitation app',
    href: 'https://krabby-swap.netlify.app/',
    tone: 'wine',
    cta: 'live',
  },
  {
    title: 'Adventure Awaits',
    description:
      'A travel-booking concept for browsing tours, experiences, and excursions, built as an early React project focused on reusable UI and component-based development.',
    tech: 'React · JavaScript · HTML · CSS',
    image: '/assets/img/personal-projects/adventure.png',
    alt: 'Screenshot of the Adventure Awaits travel site',
    href: 'https://adventure-awaits-ak.netlify.app/',
    tone: 'blue',
    cta: 'live',
  },
  {
    title: 'TDH Portfolio',
    description:
      'A portfolio site for a multidisciplinary creative, built to showcase custom rugs, graphic design, and other commissioned work.',
    tech: 'Angular · TypeScript · HTML · CSS',
    image: '/assets/img/personal-projects/tdh.png',
    alt: 'Screenshot of the TDH portfolio site',
    href: 'https://tdh-offical.netlify.app/',
    tone: 'olive',
    cta: 'live',
  },
  {
    title: '4PAWS',
    description:
      'My bootcamp capstone: a pet-product shopping app built as a modular single-page experience for browsing products by animal and category.',
    tech: 'JavaScript · HTML · CSS',
    image: '/assets/img/personal-projects/4paws.jpg',
    alt: 'Screenshot of the 4PAWS pet products app',
    href: 'https://abby-kaemmerer-capstone.netlify.com',
    tone: 'wine',
    cta: 'live',
  },
  {
    title: 'The RGB Game',
    description:
      'A color-guessing game where players match an RGB value to the correct swatch. One of my earliest JavaScript projects.',
    tech: 'JavaScript · HTML · CSS',
    image: '/assets/img/personal-projects/game.jpg',
    alt: 'Screenshot of the RGB color guessing game',
    href: 'https://thegreatestcolorgameever.netlify.app/',
    tone: 'blue',
    cta: 'live',
  },
];
