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
    title: 'interos.ai',
    description:
      'Production work on the company’s customer-facing marketing website: a React and TypeScript rebuild covering architecture, releases, accessibility, and performance.',
    tech: 'React, TypeScript, Storybook, HTML, CSS',
    image: '/assets/img/professional-work/interos.png',
    alt: 'Screenshot of the interos.ai customer-facing website',
    href: 'https://www.interos.ai',
    tone: 'blue',
    cta: 'live',
  },
  {
    title: 'Nowadays Film',
    description:
      'Squarespace website design and build for a photographer, including site structure, custom styling, color palette, logo design, and brand direction. Site has since been client-managed.',
    tech: 'Squarespace, JavaScript, HTML, CSS',
    image: '/assets/img/professional-work/nowadays.png',
    alt: 'Screenshot of the Nowadays Film website',
    tone: 'wine',
    href: 'https://nowadaysfilm.com',
    cta: 'live',
  },
  {
    title: 'Emily Duddy Art',
    description:
      `A website built for ZE Collective's client, Emily Duddy. To showcase her art, sell her current collection and allow people to contact her with inquires. Site has since been client-managed.`,
    tech: 'Squarespace, JavaScript, HTML, CSS',
    image: '/assets/img/professional-work/emily-duddy.png',
    alt: 'Screenshot of the Emily Duddy Art website',
    href: 'https://emily-duddy.com',
    tone: 'olive',
    cta: 'live',
  },
  {
    title: 'Emma Highley Charm Builder',
    description:
      'A custom React/Typescript charm-builder for an upcoming freelance client. Visitors will mix and match charms into a piece they can actually buy.',
    tech: 'Shopify, JavaScript, HTML, CSS',
    alt: 'Coming soon placeholder for the Emma Highley charm builder',
    tone: 'olive',
    cta: 'comingSoon',
  },
];

export const personalProjects: ProjectCard[] = [
  {
    title: 'Clothing Swap Invitation & RSVP system',
    description:
      'A mobile first clothing swap invitation application. Will include an RSVP system to allow the user to see who will be attending as well as messaging the host with the guest details.',
    tech: 'React, JavaScript, HTML, CSS, NPM',
    image: '/assets/img/personal-projects/swap.png',
    alt: 'Screenshot of the clothing swap invitation app',
    href: 'https://krabby-swap.netlify.app/',
    tone: 'wine',
    cta: 'live',
  },
  {
    title: 'Adventure Awaits',
    description:
      'A faux travel agency for booking tours, experiences and excursions. Built to practice my React skills.',
    tech: 'React, JavaScript, HTML, CSS, NPM',
    image: '/assets/img/personal-projects/adventure.png',
    alt: 'Screenshot of the Adventure Awaits travel site',
    href: 'https://adventure-awaits-ak.netlify.app/',
    tone: 'blue',
    cta: 'live',
  },
  {
    title: 'TDH Portfolio',
    description:
      'A portfolio for an individual offering a variety of custom creative projects including rugs and graphic design.',
    tech: 'TypeScript, JavaScript, Angular, Angular CLI, HTML, CSS, NPM',
    image: '/assets/img/personal-projects/tdh.png',
    alt: 'Screenshot of the TDH portfolio site',
    href: 'https://tdh-offical.netlify.app/',
    tone: 'olive',
    cta: 'live',
  },
  {
    title: '4PAWS',
    description:
      'An eCommerce web application designed to help pet owners find the best products for their pets. It is a state driven, modular single page application with functional components. 4PAWS was my capstone project built at the end of my coding bootcamp.',
    tech: 'JavaScript, HTML, CSS, NPM',
    image: '/assets/img/personal-projects/4paws.jpg',
    alt: 'Screenshot of the 4PAWS pet products app',
    href: 'https://abby-kaemmerer-capstone.netlify.com',
    tone: 'wine',
    cta: 'live',
  },
  {
    title: 'The RGB Game',
    description:
      'A simple project developed to practice JavaScript. Choose the color that coincides with the RBG code and you win!',
    tech: 'JavaScript, HTML, CSS, NPM',
    image: '/assets/img/personal-projects/game.jpg',
    alt: 'Screenshot of the RGB color guessing game',
    href: 'https://thegreatestcolorgameever.netlify.app/',
    tone: 'blue',
    cta: 'live',
  },
];
