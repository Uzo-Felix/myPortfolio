import {ai, ecommerce, gallery04, logo} from '../assets/images/gallery'

export const projects = [
  {
    title: 'Ecommerce',
    description: "A modern fullstack ecommerce app with nextjs, mongodb for database and stripe for payments",
      image: ecommerce,
      tags: ['React','Nextjs', 'Tailwindcss', 'Mongodb','Stripe'],
    source: 'https://github.com/Uzo-Felix/ecommerce',
    visit: 'https://ecommerce-muy6-8d2ui7ite-uzo-felix.vercel.app/',
    id: 0,
  },
  {
    title: 'Gpt-3',
    description: "Beautifully designed and highly responsive ui/ux React application transformed from figma design",
      image: ai,
      tags: ['React', 'figma'],
    source: 'https://github.com/Uzo-Felix/gpt-3_Felix',
    visit: 'https://uzo-felix.github.io/gpt3/',
    id: 0,
  },
  {
    title: 'Bank App',
    description: "Figma design transformed into react app",
    image: logo,
    tags: ['React', 'Vite', 'Tailwind'],
    source: 'https://github.com/Uzo-Felix/bank',
    visit: 'https://uzo-felix.github.io/bank',
    id: 1,
  },
  {
    title: 'Restaurant',
    description: "Figma design transformed into React App",
    image: gallery04,
    tags: ['React', 'Figma'],
    source: 'https://github.com/Uzo-Felix/restaurant',
    visit: 'https://uzo-felix.github.io/restaurant',
    id: 3,
  },
  {
    title: 'Reviews',
    description: "fetches data from an API to display latest reviews from users",
    image: '/images/3.jpg',
    tags: ['React'],
    source: 'https://github.com/Uzo-Felix/Reviews',
    visit: 'https://uzo-felix.github.io/Reviews',
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2022, text: 'Started my journey', },
];