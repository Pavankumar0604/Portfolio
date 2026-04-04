import codeImg from "../assets/images/code.svg";
import ideasImg from "../assets/images/ideas.svg";
import designsImg from "../assets/images/designs.svg";
import conceptsImg from "../assets/images/concepts.svg";
import logoImg from "../assets/images/logos/logo.png";
import ienergizerImg from "../assets/images/ienergizer.png";
import reactImg from "../assets/images/logos/react.png";
import pythonImg from "../assets/images/logos/python.svg";
import gitImg from "../assets/images/logos/git.svg";
import nodeImg from "../assets/images/logos/node.png";
import threeImg from "../assets/images/logos/three.png";
import javascriptImg from "../assets/images/logos/javascript.png";
import tailwindImg from "../assets/images/logos/tailwindcss.png";
import flutterImg from "../assets/images/logos/flutter.png";
import supabaseImg from "../assets/images/logos/supabase.png";
import sqlImg from "../assets/images/logos/sql.png";
import figmaImg from "../assets/images/logos/figma.png";
import vscodeImg from "../assets/images/logos/vscode.png";
import htmlImg from "../assets/images/logos/html.png";
import cssImg from "../assets/images/logos/css.png";
import personImg from "../assets/images/person.png";
import linkedinIcon from "../assets/images/linkedin.png";
import roadrobosWebImg from "../assets/images/projects/roadrobos_web.png";
import project1Img from "../assets/images/project1.png";
import projectImg1 from "../assets/images/projects/image1.jpg";
import projectImg2 from "../assets/images/projects/image2.jpg";
import projectImg3 from "../assets/images/projects/image3.jpg";
import projectImg4 from "../assets/images/projects/image4.png";

// Models
import reactModel from "../assets/models/react_logo-transformed.glb";
import nodeModel from "../assets/models/node-transformed.glb";
import pythonModel from "../assets/models/python-transformed.glb";
import threeModel from "../assets/models/three.js-transformed.glb";
import gitModel from "../assets/models/git-svg-transformed.glb";

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
  { text: "Software Engineer", imgPath: codeImg },
  { text: "Product-Driven", imgPath: ideasImg },
  { text: "Web & Mobile", imgPath: designsImg },
  { text: "Cross-Platform", imgPath: conceptsImg },
  { text: "Mobility Tech", imgPath: designsImg },
  { text: "Python & Django", imgPath: codeImg },
  { text: "Flutter & React", imgPath: codeImg },
  { text: "Full-Stack Setup", imgPath: ideasImg },
];

const counterItems = [
  { value: 99, suffix: "%", label: "System Reliability" },
  { value: 15, suffix: "%", label: "Conversion Lift" },
  { value: 30, suffix: "%", label: "Speed Optimization" },
  { value: 100, suffix: "%", label: "Client Success" },
];

const logoIconsList = [
  { imgPath: logoImg, name: "Mindmesh" },
  { imgPath: ienergizerImg, name: "IEnergizer" },
  { imgPath: reactImg, name: "React" },
  { imgPath: pythonImg, name: "Python" },
  { imgPath: gitImg, name: "Git" },
  { imgPath: nodeImg, name: "Node.js" },
  { imgPath: threeImg, name: "Three.js" },
];

const abilities = [
  {
    imgPath: conceptsImg,
    title: "End-to-End Development",
    desc: "Architecting and deploying production-ready ecosystems for web and mobile.",
  },
  {
    imgPath: codeImg,
    title: "Cross-Platform Mastery",
    desc: "Building unified Android/iOS experiences with high-performance frameworks.",
  },
  {
    imgPath: designsImg,
    title: "UI/UX & Client Strategy",
    desc: "Focusing on intuitive designs that scale gracefully with business growth.",
  },
];

const techStackImgs = [
  { name: "ReactJS", imgPath: reactImg },
  { name: "Node.js", imgPath: nodeImg },
  { name: "Python", imgPath: pythonImg },
  { name: "Git", imgPath: gitImg },
  { name: "Three.js", imgPath: threeImg },
  { name: "JavaScript", imgPath: javascriptImg },
  { name: "TailwindCSS", imgPath: tailwindImg },
  { name: "Flutter", imgPath: flutterImg },
  { name: "Supabase", imgPath: supabaseImg },
  { name: "PostgreSQL", imgPath: sqlImg },
  { name: "Figma", imgPath: figmaImg },
  { name: "VS Code", imgPath: vscodeImg },
  { name: "HTML", imgPath: htmlImg },
  { name: "CSS", imgPath: cssImg },
];

const techStackIcons = [
  {
    name: "ReactJS",
    modelPath: reactModel,
    scale: 0.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: nodeModel,
    scale: 3,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python",
    modelPath: pythonModel,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js",
    modelPath: threeModel,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: gitModel,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Driving end-to-end development of production-scale mobility ecosystems and engineering robust backend systems.",
    imgPath: logoImg,
    logoPath: logoImg,
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
    imgPath: ienergizerImg,
    logoPath: ienergizerImg,
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
    imgPath: logoImg,
  },
  {
    name: "IEnergizer",
    imgPath: ienergizerImg,
  },
];

const testimonials = [
  {
    name: "Pavan Kumar",
    mentions: "@pavankumar0604",
    review:
      "Software Engineer building production-grade products. Expert in translating complex mobility requirements into seamless digital experiences.",
    imgPath: personImg,
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: gitImg,
    link: "https://github.com/Pavankumar0604",
  },
  {
    name: "linkedin",
    imgPath: linkedinIcon,
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
    imgPath: roadrobosWebImg,
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
    imgPath: project1Img,
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
    imgPath: projectImg1,
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
    imgPath: projectImg3,
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
    imgPath: projectImg2,
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
    imgPath: projectImg4,
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
