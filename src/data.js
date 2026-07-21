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
  { name: "JWT Authentication", reactIcon: SiJsonwebtokens },
  { name: 'Multer', icon: 'devicon-nodejs-plain colored' },
  { name: 'Cloudinary', reactIcon: SiCloudinary }, // Alternative cloud icon

  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },

  { name: 'Render', reactIcon: SiRender },
  { name: 'Netlify', icon: 'devicon-netlify-plain colored' },
  { name: 'Vercel', icon: 'devicon-vercel-plain colored' },

  { name: 'MongoDB Atlas', image: "/icons/mongodb-atlas.png" },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: "XAMPP", image: "/icons/xaampp.png", }
]

export const experience = [
  {
    type: 'work',
    role: 'Software Developer Intern',
    company: 'Oxium Tech Consultancy PVT LTD , Bangalore',
    period: 'March 2026 - June 2026',
    points: [
      ' Studied the workflow and architecture of the Telinfy business communication platform.',

      'Gained an understanding of WhatsApp Business messaging, chatbot workflows and customer engagement solutions.',

      'Learned how marketing campaigns are created, scheduled and delivered through the platform.',

      'Gained exposure to industry software development workflows and team collaboration.'],
  },
  {
    type: 'work',
    role: 'Trainee',
    company: 'Job Junction , Trivandrum',
    period: 'Dec 2025 - Feb 2026',
    points: [
      'Developed responsive web applications using React.js, Node.js, Express.js and MongoDB.',
      'Built reusable React components and implemented mobile-first user interfaces with Tailwind CSS.',
      'Designed and integrated RESTful APIs with secure JWT-based authentication.',
      'Worked with MongoDB to implement efficient CRUD operations and data management.',
      'Used Git, GitHub, Postman, and modern development workflows for testing, debugging, collaborationand deployment.'
    ]
  },
  {
    type: 'work',
    role: 'Web Developer',
    company: 'Softzane Solutions, Kollam',
    period: 'Jan 2022 - Jan 2023',
    points: [
      'Developed and maintained dynamic web applications using PHP, MySQL, HTML5, CSS3, JavaScript and Smarty templates.',
      'Built responsive, user-friendly websites based on client requirements, ensuring consistent UI and cross-browser compatibility.',
      'Managed MySQL databases and implemented efficient data handling to support reliable web applications.',
      'Collaborated with developers to build, test, debug and maintain scalable web solutions following industry best practices.',
      'Mentored students on real-world web development projects, providing guidance on programming concepts, debugging techniques and software development best practices.'
    ],
  },
  {
    type: 'work',
    role: 'Inernship Trainee',
    company: 'Softzane Solutions, Kollam',
    period: 'Aug 2021 - Jan 2022',
    points: [
      'Completed training in Angular Full Stack Development with hands-on exposure to real-world web application development.',
      'Developed reusable Angular components and implemented routing and form validation.',
      'Learned frontend-backend integration, REST API concepts, and component-based application architecture.',
      'Participated in debugging and testing activities while following software development best practices.',
      'Strengthened problem-solving, collaboration, and software development skills through practical assignments.'
    ]
  }
]

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    institute: 'University of Kerala',
    period: '2018 – 2021',
  },
  {
    degree: 'Higher Secondary Education',
    institute: 'Rajaravi Varma Girls Higher Secondary School, Trivandrum',
    period: '2016 – 2018',
  },
  {
    degree: 'Secondary Education',
    institute: 'Ezhippuram Higher Secondary School, Kollam',
    period: '2014 – 2015',
  }
]

// Placeholder projects — swap these out with your real work.
export const projects = [
  {
    name: 'Mythra',
    description: 'Mythra is a full-stack MERN application designed for movie and book enthusiasts to discover, organize, and manage their collections. Built with React, Node.js, Express.js, and MongoDB, it features secure JWT authentication, RESTful APIs, advanced search and filtering, Cloudinary integration and a responsive Tailwind CSS interface for a seamless user experience.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://mythra.netlify.app/',
  },
  {
    name: 'HappyPaw',
    description:
      'A fully responsive pet care website built using HTML5 and CSS3, featuring a clean, user-friendly interface with mobile-first design, Flexbox layouts, and cross-browser compatibility.',
    stack: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design'],
    link: 'https://fathimabs.github.io/HappyPaw/',
  },
  {
    name: 'CarRentalService',
    description:
      'A responsive MERN-based car rental application featuring vehicle browsing, search, filtering, booking workflows and a modern user interface designed using reusable React components.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Context API', 'redux'],
    link: 'https://github.com/fathimabs/carRentalservice',
  },
  {
    name: 'SpiceHeaven',
    description:
      'A responsive restaurant website built with HTML5 and CSS3, featuring a modern user interface, clean layouts and a mobile-first design for an engaging browsing experience.',
    stack: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design'],
    link: 'https://fathimabs.github.io/SpiceHeaven/',
  },
  {
    name: 'BlogSpace',
    description: 'A MERN-based blogging platform featuring user authentication, blog creation, editing, deletion, and responsive content management through a modern React interface.',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    link: 'https://github.com/fathimabs/BlogSpace',
  }
]

export const contact = {
  email: 'dev.fathimabs@gmail.com',
  github: 'https://github.com/fathimabs',
  linkedin: 'https://www.linkedin.com/in/fathimabs',
  phone: '+91 7736209945',
  location: 'Trivandrum , Kerala , India',
}



















