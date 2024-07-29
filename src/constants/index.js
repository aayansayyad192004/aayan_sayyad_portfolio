import {
  mobile,
  backend,
  creator,
  web,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  github,
  github2,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  squirrel_infotech,
  petme,
  demo,
  threejs,
  portfolio,
  visionai_project
  
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  
  /*{
    name: "TypeScript",
    icon: typescript,
  }*/,
  {
    name: "React JS",
    icon: reactjs,
  },
  /*{
    name: "Redux Toolkit",
    icon: redux,
  }*/,
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    name: "Github",
    icon: github2,
  },
 /* {
    name: "figma",
    icon: figma,
  },*/
  {
    name: "Java",
    icon: java,
  },

  /*{
    name: "docker",
    icon: docker,
  }*/,
];

const experiences = [
 
  {
    title: "C#.NET Trainee Intern ",
    company_name: "Squirrel's Infotech, Satara ",
    icon: squirrel_infotech,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "	Mastered C# basics.",
      "	Created a student-friendly MCQ Exam System to demonstrate C# skills.",
      
,
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, iure.",
    name: "Arbaj Sayyad",
    designation: "Product Engineer",
    company: "IKS",
    image: "",
  },
  
];

const projects = [
  {
    name: "Pet Me",
    description:
      "Developed a comprehensive pet adoption platform using the MERN stack and Tailwind CSS, featuring user authentication, profile management, advance searching, secure messaging, Razorpay payment integration. ",
    tags: [
      
      {
        name: "Mern Stack",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: petme,
    source_code_link: "https://github.com/aayansayyad192004/petme_mern_project",
    demo_link: "https://petme-mern-project.onrender.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "Developed a dynamic portfolio using React.js and Three.js, showcasing skills and projects with 3D models and animations. Integrated Email.js for direct communication through a Contact Me section.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Email.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/aayansayyad192004/aayan_sayyad_portfolio",
    demo_link: "https://aayansayyadportfolio-iq9zl4mzs-aayan-sayyads-projects.vercel.app/"
  },
  {
    name: "VisionAI Image Generator",
    description:
      "Developed a responsive website using HTML, CSS, and JavaScript to generate AI images from user prompts. Integrated Pexels API for real-time image fetching and optimized performance with efficient input handling.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Pexels API",
        color: "blue-text-gradient",
      },
    ],
    image: visionai_project,
    source_code_link: "https://github.com/aayansayyad192004/visionai_image_generator",
    demo_link: "https://vision-ai-image-generator.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
