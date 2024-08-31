import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  htmlIcon,
  fullstack,
  python,
  react,
  carrent,
  jobit,
  tripguide,
  reactdashboard,
  nikeclone,
  threejs,
  pirategame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "HTML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "Python",
    icon: python,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed reliable backend systems using Python, focusing on clean, efficient code.",
      "Designed and implemented scalable APIs to meet high-performance standards.",
      "Conducted rigorous testing and debugging to ensure application stability.",
      "Continuously optimized Python code for performance and maintainability.",
    ],
  },
  {
    title: "HTML Developer",
    company_name: "HTML/CSS/JS",
    icon: htmlIcon,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Built responsive and visually appealing web interfaces using HTML, CSS, and JavaScript.",
      "Translated design concepts into interactive, user-friendly web pages.",
      "Ensured cross-browser compatibility and optimized front-end performance.",
      "Managed front-end development, from initial design through to final deployment.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "React",
    icon: react,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built dynamic, interactive web applications using React.js, focusing on reusable components.",
      "Implemented state management and routing to create responsive, high-performance applications.",
      "Optimized React.js applications for fast load times and improved user experience.",
      "Managed the React.js development process from initial setup through to final deployment.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Python/React/JS",
    icon: fullstack,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed full-stack web applications, handling both front-end and backend tasks seamlessly.",
      "Integrated diverse technologies to create cohesive, end-to-end web solutions.",
      "Managed databases, server configurations, and user interfaces with a focus on usability.",
      "Delivered complete, fully functional web applications that ensure all components work together smoothly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Dashboard",
    description:
      "A React-based dashboard that allows users to track and manage all income and expenses, providing an efficient solution for financial oversight. The platform includes dynamic charts that visually present financial data, helping users easily monitor trends and make informed decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactdashboard,
    source_code_link: "https://github.com/AnupisBoss/React-Dashboard/",
  },
  {
    name: "Pirate Game",
    description:
      "A 2D platformer game built with Pygame, where players control a pirate who stomps on enemies, collects coins, and advances through levels. The game includes classic mechanics like earning extra lives and overcoming obstacles, offering a fun and challenging pirate adventure.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: pirategame,
    source_code_link: "https://github.com/AnupisBoss/Pirate-Game/",
  },
  {
    name: "Nike Clone",
    description:
      "A Nike clone website built with HTML, CSS, and JavaScript, allowing users to browse, search, and filter through a range of footwear and apparel. The site features a modern design with intuitive navigation, providing a user-friendly experience for exploring and discovering the latest athletic gear.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: nikeclone,
    source_code_link: "https://github.com/AnupisBoss/Nike-Clone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
