export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Dr. S. Venkatesh',
    position: 'HOD, Computer Science Department',
    content:
      'Akash\'s NoDueForm project has significantly streamlined our department\'s clearance process. The system reduced paperwork by 90% and improved efficiency during student clearance. The intuitive interface and robust backend demonstrate his strong full-stack development skills.',
    image: '/assets/people/prof1.jpg',
  },
  {
    id: 2,
    name: 'Prof. A. Kumar',
    position: 'Admission Committee Head',
    content:
      'The Admission Management System developed by Akash has revolutionized our admission process. The automated document verification and real-time status updates have reduced processing time by 70%. His attention to security and data integrity is commendable.',
    image: '/assets/people/prof2.jpg',
  },
  {
    id: 3,
    name: 'Dr. M. Reddy',
    position: 'Dean, Academic Affairs',
    content:
      'Akash\'s projects showcase his ability to understand institutional needs and translate them into technical solutions. Both NoDueForm and the Admission System have received positive feedback from staff and students alike for their reliability and user-friendly design.',
    image: '/assets/people/prof3.jpg',
  },
];

export const myProjects = [
  {
    title: 'PromptLingo – AI Prompt Generation',
    description: 'Converts regional language inputs into structured English prompts using AI.',
    subdesc: 'Built with modern web technologies and AI integration.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { name: 'AI', color: 'blue-text-gradient' },
      { name: 'SaaS', color: 'green-text-gradient' }
    ]
  },
  {
    title: 'EduTrack – Student Performance Analytics',
    description: 'A comprehensive analytics dashboard for tracking and improving student performance metrics.',
    subdesc: 'Built with React, Node.js, and data visualization libraries for educational insights.',
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#0A1D37',
      border: '0.2px solid #0F2A4A',
      boxShadow: '0px 0px 60px 0px #1E3A8A4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'DataViz', color: 'pink-text-gradient' }
    ]
  },
  {
    title: 'TaskFlow – Project Management Tool',
    description: 'A streamlined project management application for teams to track tasks and collaborate effectively.',
    subdesc: 'Built with a focus on simplicity and user experience for optimal team productivity.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Firebase', color: 'orange-text-gradient' },
      { name: 'Redux', color: 'purple-text-gradient' }
    ]
  },
  {
    title: 'CodeCollab – Real-time Code Editor',
    description: 'A collaborative code editor with real-time synchronization for pair programming and team coding sessions.',
    subdesc: 'Built with WebSockets for real-time collaboration and code execution capabilities.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'WebSockets', color: 'pink-text-gradient' }
    ]
  },
  {
    title: 'DevConnect – Developer Social Network',
    description: 'A social platform for developers to connect, share projects, and collaborate on open-source initiatives.',
    subdesc: 'Built with modern authentication, real-time updates, and a developer-focused feature set.',
    href: '#',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'pink-text-gradient' },
      { name: 'GraphQL', color: 'purple-text-gradient' }
    ]
  },
];

export const contactInfo = {
  email: 'akashduddekunta@gmail.com',
  phone: '+91 90145 67678',
  address: 'Kadapa, Andhra Pradesh, India',
  social: [
    { name: 'GitHub', url: 'https://github.com/akashduddekunta' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/akashduddekunta' },
    { name: 'Twitter', url: 'https://twitter.com/akashduddekunta' },
    { name: 'Instagram', url: 'https://instagram.com/akashduddekunta' },
  ],
};

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const whatIDo = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies like React, Next.js, and Node.js.',
    icon: '/assets/code.svg',
    animation: 'typing',
  },
  {
    id: 2,
    name: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    icon: '/assets/design.svg',
    animation: 'designing',
  },
  {
    id: 3,
    name: 'Full-Stack Solutions',
    description: 'Developing end-to-end solutions with both frontend and backend technologies for seamless integration.',
    icon: '/assets/stack.svg',
    animation: 'coding',
  },
  {
    id: 4,
    name: 'Problem Solving',
    description: 'Analyzing complex problems and implementing efficient, scalable solutions.',
    icon: '/assets/problem-solving.svg',
    animation: 'thinking',
  },
];
