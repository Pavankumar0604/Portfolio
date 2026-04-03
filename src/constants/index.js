const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Software Engineer", imgPath: "/images/code.svg" },
  { text: "Product-Driven", imgPath: "/images/ideas.svg" },
  { text: "Web & Mobile", imgPath: "/images/designs.svg" },
  { text: "Cross-Platform", imgPath: "/images/concepts.svg" },
  { text: "Mobility Tech", imgPath: "/images/designs.svg" },
  { text: "Python & Django", imgPath: "/images/code.svg" },
  { text: "Flutter & React", imgPath: "/images/code.svg" },
  { text: "Full-Stack Setup", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 99, suffix: "%", label: "System Reliability" },
  { value: 15, suffix: "%", label: "Conversion Lift" },
  { value: 30, suffix: "%", label: "Speed Optimization" },
  { value: 100, suffix: "%", label: "Client Success" },
];

const logoIconsList = [
  { imgPath: "/images/logos/logo.png", name: "Mindmesh" },
  { imgPath: "/images/ienergizer.png", name: "IEnergizer" },
  { imgPath: "/images/logos/react.png", name: "React" },
  { imgPath: "/images/logos/python.svg", name: "Python" },
  { imgPath: "/images/logos/git.svg", name: "Git" },
  { imgPath: "/images/logos/node.png", name: "Node.js" },
  { imgPath: "/images/logos/three.png", name: "Three.js" },
];

const abilities = [
  {
    imgPath: "/images/concepts.svg",
    title: "End-to-End Development",
    desc: "Architecting and deploying production-ready ecosystems for web and mobile.",
  },
  {
    imgPath: "/images/code.svg",
    title: "Cross-Platform Mastery",
    desc: "Building unified Android/iOS experiences with high-performance frameworks.",
  },
  {
    imgPath: "/images/designs.svg",
    title: "UI/UX & Client Strategy",
    desc: "Focusing on intuitive designs that scale gracefully with business growth.",
  },
];

const techStackImgs = [
  { name: "ReactJS", imgPath: "/images/logos/react.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "JavaScript", imgPath: "/images/logos/javascript.png" },
  { name: "TailwindCSS", imgPath: "/images/logos/tailwindcss.png" },
  { name: "Flutter", imgPath: "/images/logos/flutter.png" },
  { name: "Supabase", imgPath: "/images/logos/supabase.png" },
  { name: "PostgreSQL", imgPath: "/images/logos/sql.png" },
  { name: "Figma", imgPath: "/images/logos/figma.png" },
  { name: "VS Code", imgPath: "/images/logos/vscode.png" },
  { name: "HTML", imgPath: "/images/logos/html.png" },
  { name: "CSS", imgPath: "/images/logos/css.png" },
];

const techStackIcons = [
  {
    name: "ReactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 3,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Driving end-to-end development of production-scale mobility ecosystems and engineering robust backend systems.",
    imgPath: "/images/logos/logo.png",
    logoPath: "/images/logos/logo.png",
    title: "Software Engineer",
    date: "Oct 2024 - Present",
    responsibilities: [
      "Mindmesh Solutions Private Limited – Bangalore.",
      "Spearheading development of roadrobos.com, integrating full-stack components.",
      "Optimizing cross-platform Flutter applications for high-concurrency rental traffic.",
      "Implementing and testing Django/Python services to ensure clean code standards.",
      "Ensuring responsive, bug-free web architectures for business-critical features."
    ],
  },
  {
    review: "Provided rigorous customer support, ensuring 100% resolution accuracy while adapting to high-volume user needs.",
    imgPath: "/images/ienergizer.png",
    logoPath: "/images/ienergizer.png",
    title: "Customer Support Executive",
    date: "Oct 2023 - Sep 2024",
    responsibilities: [
      "iEnergizer – Greater Noida.",
      "Managed client interactions and ensured premier technical routing and support.",
      "Fostered deep problem-solving capabilities in high-stakes ticket resolution.",
      "Delivered empathetic, efficient communication across diverse user groups.",
      "Maintained rapid response quotas while sustaining top-tier quality scores."
    ],
  },
];

const expLogos = [
  {
    name: "Mindmesh",
    imgPath: "/images/logos/logo.png",
  },
  {
    name: "IEnergizer",
    imgPath: "/images/ienergizer.png",
  },
];

const testimonials = [
  {
    name: "Pavan Kumar",
    mentions: "@pavankumar0604",
    review:
      "Software Engineer building production-grade products. Expert in translating complex mobility requirements into seamless digital experiences.",
    imgPath: "/images/person.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/Pavankumar0604",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/penumuru-pavan-kumar-bb1b00147/",
  },
];

const projects = [
  {
    title: "RoadRobos – Mobility Web Application",
    category: "Featured Client Projects",
    type: "Professional Project",
    shortTagline: "Production-scale bike rental & taxi ecosystem.",
    description: [
      "Engineered a large-scale mobility platform (roadrobos.com) managing end-to-end booking and automated rental workflows.",
      "Ensured a highly responsive web infrastructure with robust backend integration for real-time tracking."
    ],
    techStack: ["React", "Python", "Django", "Tailwind CSS"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "https://roadrobos.com",
    imgPath: "/images/projects/roadrobos_web.png",
    featured: true
  },
  {
    title: "RoadRobos – Android & iOS Apps",
    category: "Featured Client Projects",
    type: "Professional Project",
    shortTagline: "Unified mobile experience for vehicle rentals.",
    description: [
      "Developed high-performance cross-platform mobile apps using Flutter to synchronize live fleet data.",
      "Implemented streamlined user interfaces specifically tailored for rapid mobile booking and navigation."
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "Firebase"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "#",
    imgPath: "/images/project1.png",
    featured: true
  },
  {
    title: "Payment Gateway Integration",
    category: "Professional Projects",
    type: "Software Engineer",
    shortTagline: "Secure, high-efficiency transactional pipelines.",
    description: [
      "Designed and deployed compliant, high-security payment integrations (e.g., Razorpay) for commercial ecosystems.",
      "Optimized checkout flows to reduce latency and successfully prevent drop-offs during transactions."
    ],
    techStack: ["Python", "Django", "JavaScript", "REST APIs"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "#",
    imgPath: "/images/projects/image1.jpg",
    featured: true
  },
  {
    title: "Online Medicare System",
    category: "Academic Projects",
    type: "Healthcare",
    shortTagline: "Django-based platform for healthcare management.",
    description: [
      "Developed a Django-powered medical portal enabling rapid doctor discovery and seamless appointment scheduling.",
      "Engineered a custom healthcare backend using Python and SQLite for secure patient history management."
    ],
    techStack: ["Django", "Python", "SQLite", "Bootstrap"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "#",
    imgPath: "/images/projects/image3.jpg",
    featured: false
  },
  {
    title: "Decentralized Voting System",
    category: "Academic Projects",
    type: "Blockchain",
    shortTagline: "Secure, transparent voting using blockchain logic.",
    description: [
      "Built a secure validation platform concept designed to guarantee tamper-proof environments and verifiable results.",
      "Showcased strict data integrity models and advanced testing flows to ensure absolute process transparency."
    ],
    techStack: ["Python", "Django", "JavaScript", "Responsive UI"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "#",
    imgPath: "/images/projects/image2.jpg",
    featured: false
  },
  {
    title: "Personal Portfolio Website",
    category: "Personal Projects",
    type: "Frontend Engineering",
    shortTagline: "Interactive 3D web experience showcasing professional work.",
    description: [
      "Designed an immersive, high-performance portfolio incorporating immersive 3D graphics and clean React architecture.",
      "Prioritized responsive design, polished animations, and recruiter-focused content delivery."
    ],
    techStack: ["ReactJS", "Tailwind CSS", "Three.js", "GSAP"],
    repoLink: "https://github.com/Pavankumar0604",
    liveLink: "#",
    imgPath: "/images/projects/image4.png",
    featured: false
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
