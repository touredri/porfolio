import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  nyeusi,
  coverhunt,
  kelhel,
  microverse,
  dine_sira,
  budget,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const translations = {
  en: {
    'Frontend Developer': 'Frontend Developer',
    'Backend Developer': 'Backend Developer',
    'UI/UX Design': 'UI/UX Design',
    'Software Prototyping': 'Software Prototyping',
  },
  fr: {
    'Frontend Developer': 'Développeur Frontend',
    'Backend Developer': 'Développeur Backend',
    'UI/UX Design': 'Design UI/UX',
    'Software Prototyping': 'Prototypage de logiciels',
  },
};

let currentLanguage = localStorage.getItem('language') || 'fr';

const services = [
  {
    title: translations[currentLanguage]['Frontend Developer'],
    icon: frontend,
  },
  {
    title: translations[currentLanguage]['Backend Developer'],
    icon: backend,
  },
  {
    title: translations[currentLanguage]['UI/UX Design'],
    icon: ux,
  },
  {
    title: translations[currentLanguage]['Software Prototyping'],
    icon: prototyping,
  },
];
const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'AREPEL',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2022 - Jan 2023',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2023 - Sep 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Freelancer',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Now',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'tchi-gnouma',
    description: 'A delivery service website for our company as a landing page',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/touredri/tchi-gnouma',
    demo: 'https://touredri.github.io/tchi-gnouma/',
  },
  {
    id: 'project-2',
    name: 'Fuit Web App',
    description:
      'A small web application in mobile view that provides information about fruit nutritional',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/touredri/fruit',
    demo: 'https://dev--superb-taiyaki-212be8.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Budget',
    description:
      'This is a web app that allow user to manage their budget and make plan for better use of teir money.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: budget,
    repo: 'https://github.com/touredri/my-budget',
    demo: 'https://budget-zbvh.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'Dine Sira',
    description: `A mobile application that allow user to know prayer time for it local zone or a Masdjid and the itinerary to go there.`,
    tags: [
      {
        name: 'Ionic',
        color: 'blue-text-gradient',
      },
      {
        name: 'Angular',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: dine_sira,
    repo: 'https://github.com/touredri/app-mosque',
    demo: 'https://docs.google.com/document/d/1wB1D6B2ZxsjOnQGynccAp4PC8P1VDRVIxtifHpoy44E/edit?usp=sharing',
  },
  {
    id: 'project-5',
    name: 'JS event',
    description:
      'This is a demo event website for a BootCamp to learn JavaScript .',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/touredri/JS-Bootcamp',
    demo: 'https://touredri.github.io/JS-Bootcamp',
  },
];

export { services, technologies, experiences, projects };
