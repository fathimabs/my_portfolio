import { SiRender, SiCloudinary, SiJsonwebtokens } from "react-icons/si";


// All editable site content lives in this one file.

export const profile = {
  name: 'Fathima B S',
  role: 'MERN Stack Developer',
  tagline:
    'Bringing ideas to life through interactive experiences and modern tech. Explore my world of creativity and code.',
  resumeUrl: '/Fathima B S(React_Developer).pdf',
}


export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'contact', label: 'Contact' },
]

// Simple label list — used in the About "Skills" tab.
export const skills = [
  ' React.js',
  'Node.js',
  'Express.js',
  ' MongoDB',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'Redux',
  'REST APIs',
  'JWT Authentication',
  'Multer',
  'Cloudinary',
  'HTML5 & CSS3',
  'Git & GitHub',
  'Postman',
  'Figma',
  'Render',
  'Netlify',
  'MySQL',
  'PHP'
]

// Tech stack with real brand logos (via Devicon, loaded through a CDN
// stylesheet in index.html) for the Tools & Tech section.
export const techStack = [
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Redux', icon: 'devicon-redux-original colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },

  { name: 'REST APIs', icon: 'devicon-fastapi-plain colored' }, // Alternative icon
  {
    name: "JWT Authentication", reactIcon: SiJsonwebtokens,
  },
  { name: 'Multer', icon: 'devicon-nodejs-plain colored' },
  { name: 'Cloudinary', reactIcon: SiCloudinary, }, // Alternative cloud icon

  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },

  { name: 'Render', reactIcon: SiRender, },
  { name: 'Netlify', icon: 'devicon-netlify-plain colored' },

  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: "XAMPP", image: "/icons/xaampp.png", }
]

export const experience = [
  {
    type: 'work',
    role: 'Trainee',
    company: 'Job Junction',
    period: 'Jan 2023 – Present',
    points: [
      'Developed a full-stack web application using React, Node.js, and Express.',
      'Designed and implemented RESTful APIs supporting CRUD operations and structured data flow.',
      'Integrated MongoDB for data storage and efficient querying.',
      'Built a responsive, component-based UI using Tailwind CSS, implementing mobile-first design.',
    ],
  },
  {
    type: 'work',
    role: 'Web Developer',
    company: 'Softzane Solutions',
    period: 'June 2021 – Dec 2022',
    points: [
      'Created and managed multiple web projects using PHP, MySQL, and Smarty templates, improving development efficiency and project scalability.',
      'Built responsive layouts based on client requirements using HTML5 and CSS, ensuring accurate implementation of design specifications.',
    ],
  },
  {
    type: 'education',
    role: 'Inern',
    company: 'Softzane Solutions',
    period: 'June 2021 – Dec 2022',
    points: [
      'Created and managed multiple web projects using PHP, MySQL, and Smarty templates, improving development efficiency and project scalability.',
      'Built responsive layouts based on client requirements using HTML5 and CSS, ensuring accurate implementation of design specifications.',
    ],
  },
]

export const education = [
  {

    degree: 'Bachelor of Computer Science',
    institute: 'University of Kerala',
    period: 'June 2018 – March 2021',
  },
]

// Placeholder projects — swap these out with your real work.
export const projects = [
  {
    name: 'project-one',
    description: 'A short description of this project goes here — what it does and the problem it solves.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    name: 'project-two',
    description: 'A short description of this project goes here — what it does and the problem it solves.',
    stack: ['Express', 'MySQL', 'PHP'],
    link: '#',
  },
  {
    name: 'project-three',
    description: 'A short description of this project goes here — what it does and the problem it solves.',
    stack: ['React', 'Tailwind CSS'],
    link: '#',
  },
]

export const contact = {
  email: 'dev.fathimabs@gmail.com',
  github: 'https://github.com/fathimabs',
  linkedin: 'https://www.linkedin.com/in/fathimabs',
  phone: '+91 7736209945',
  location: 'Trivandrum , Kerala , India',
}



















