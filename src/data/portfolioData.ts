export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  technologies: string[];
  objective: string;
  keyFeatures: string[];
  implementationStatus: string;
  githubUrl: string; // real GitHub profile link: https://github.com/rakchu2007-web
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    level: string; // descriptive, e.g. "Core Proficiency", "Foundational", "Practical Application"
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  type: string;
  context: string;
  summary: string;
  focusArea: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  scoreOrDetail: string;
  description: string;
  skillsAcquired: string[];
  hasExternalLink: boolean;
}

export const PERSONAL_INFO = {
  name: 'Ranjitha M',
  headline: "Hi, I'm Ranjitha M",
  subtitle: 'Aspiring Software Developer | AI & Web Development Enthusiast',
  shortBio: 'I’m a Computer Science and Business Systems student interested in building practical software solutions using programming, web technologies, and AI.',
  email: 'rakchu2007@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/ranjitha-m-ba236a381/',
  githubUrl: 'https://github.com/rakchu2007-web',
  college: "St. Peter's College of Engineering and Technology",
  degree: 'B.Tech Computer Science and Business Systems (CSBS)',
  year: 'Second Year',
  cgpa: '8.24',
  expectedGraduation: '2029',
  location: 'Chennai, Tamil Nadu, India',
  interests: [
    'Software Development',
    'Artificial Intelligence & NLP',
    'Web Application Development',
    'Algorithmic Problem-Solving',
    'Continuous Learning & Technology Exploration',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'resume-checker',
    title: 'Resume Relevance Checker',
    category: 'AI & Web Development',
    shortDescription:
      'A project focused on comparing resumes with job requirements using natural language processing to evaluate skill alignment.',
    technologies: ['Python', 'Flask', 'Basic NLP', 'HTML/CSS'],
    objective:
      'To build an automated tool that parses candidate resumes and job descriptions, identifying keyword overlaps, required qualifications, and missing competencies.',
    keyFeatures: [
      'Text extraction and preprocessing from candidate resumes',
      'Term frequency and keyword relevance matching against job descriptions',
      'Categorized feedback on matched technical skills and missing requirements',
      'Clean Flask web interface for submitting text and viewing relevance reports',
    ],
    implementationStatus: 'Academic Prototype',
    githubUrl: 'https://github.com/rakchu2007-web',
  },
  {
    id: 'sign-language-translator',
    title: 'Sign Language Translator',
    category: 'Computer Vision & AI',
    shortDescription:
      'A project exploring sign-language recognition and translation into readable text to support accessible communication.',
    technologies: ['Python', 'Computer Vision', 'AI', 'Image Processing'],
    objective:
      'To explore camera-based hand gesture recognition that translates sign language alphabet and common gestures into text for hearing-impaired accessibility.',
    keyFeatures: [
      'Exploration of hand landmark tracking and spatial orientation detection',
      'Frame-by-frame gesture classification pipeline',
      'Translation mapping from detected gestures to alphanumeric characters',
      'Accessibility-focused user interface design concept',
    ],
    implementationStatus: 'Experimental Prototype',
    githubUrl: 'https://github.com/rakchu2007-web',
  },
  {
    id: 'nira-tamil-assistant',
    title: 'Nira — Tamil Voice Assistant',
    category: 'Speech & Regional NLP',
    shortDescription:
      'A project focused on helping users explore information about government schemes through a Tamil voice assistant.',
    technologies: ['Python', 'Speech Recognition', 'Tamil NLP', 'AI Tools'],
    objective:
      'To break language barriers for rural and native Tamil speakers seeking information about state and central government welfare schemes.',
    keyFeatures: [
      'Voice input processing with Tamil speech recognition',
      'Intent matching and query parsing for government welfare programs',
      'Structured scheme details retrieval (eligibility, benefits, application steps)',
      'Spoken audio response generation and text readout for enhanced accessibility',
    ],
    implementationStatus: 'Regional Tech Prototype',
    githubUrl: 'https://github.com/rakchu2007-web',
  },
  {
    id: 'ai-code-debugger',
    title: 'AI Code Debugger & Test Agent',
    category: 'Developer Tools & AI',
    shortDescription:
      'A project focused on AI-assisted code debugging and automated test case generation to accelerate developer workflows.',
    technologies: ['Python', 'AI Tools', 'Automated Testing', 'AST Analysis'],
    objective:
      'To assist student and junior developers in pinpointing syntax and logic errors, providing actionable explanations and automated test suites.',
    keyFeatures: [
      'Code parsing to identify common logical pitfalls and runtime exceptions',
      'AI prompt-driven error analysis with clear, educational correction explanations',
      'Automated generation of boundary condition unit tests',
      'Interactive code snippet inspection interface',
    ],
    implementationStatus: 'Tool Prototype',
    githubUrl: 'https://github.com/rakchu2007-web',
  },
  {
    id: 'retailnova-smart-trolley',
    title: 'RetailNova Smart Trolley',
    category: 'Smart Retail & IoT',
    shortDescription:
      'A smart retail concept focused on trolley-based product scanning and automated billing to eliminate checkout lines.',
    technologies: ['Python', 'IoT Concept', 'Web Dashboard', 'Database Logic'],
    objective:
      'To design an automated in-cart checkout experience where shoppers scan items directly as they place them into the trolley.',
    keyFeatures: [
      'Trolley-mounted barcode/RFID scanning simulation and item registration',
      'Real-time running subtotal and item count calculation on trolley display',
      'Automated digital cart synchronization with store billing database',
      'Instant digital invoice generation to allow cashier-free store exit',
    ],
    implementationStatus: 'Smart Retail System Concept',
    githubUrl: 'https://github.com/rakchu2007-web',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for algorithmic logic, OOP, and software engineering.',
    skills: [
      {
        name: 'Python',
        description: 'Primary language used for scripting, AI prototypes, data handling, and backend logic.',
        level: 'Core Language',
      },
      {
        name: 'Java',
        description: 'Object-Oriented Programming, data structures, and multi-paradigm software principles (NPTEL certified at 79%).',
        level: 'NPTEL Certified (79%)',
      },
    ],
  },
  {
    category: 'Web & Frameworks',
    description: 'Foundational front-end styling and lightweight backend server architecture.',
    skills: [
      {
        name: 'HTML5',
        description: 'Semantic markup, accessibility structure, forms, and responsive document trees.',
        level: 'Web Standard',
      },
      {
        name: 'CSS3',
        description: 'Modern flexbox, grid layouts, responsive styling, and UI component design.',
        level: 'Web Styling',
      },
      {
        name: 'Flask',
        description: 'Python micro-framework used for building RESTful endpoints and linking AI models to web interfaces.',
        level: 'Backend Framework',
      },
    ],
  },
  {
    category: 'AI & Intelligent Systems',
    description: 'Natural language techniques and modern developer AI workflows.',
    skills: [
      {
        name: 'Basic NLP',
        description: 'Text preprocessing, tokenization, keyword matching, and linguistic analysis for search & voice systems.',
        level: 'Applied Domain',
      },
      {
        name: 'AI Tools',
        description: 'Prompt engineering, LLM assistance for coding & testing, and integrating intelligent toolchains.',
        level: 'Modern Tooling',
      },
    ],
  },
  {
    category: 'Productivity & Office Tools',
    description: 'Documentation, structured data organization, and professional reporting.',
    skills: [
      {
        name: 'Microsoft Word',
        description: 'Technical report writing, academic documentation, project specifications, and professional resumes.',
        level: 'Documentation',
      },
      {
        name: 'Microsoft Excel',
        description: 'Tabular data organization, data sorting, basic formulas, and academic project analytics.',
        level: 'Data Management',
      },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'hackarena',
    title: 'HackArena Hackathon',
    type: 'Hackathon Participation',
    context: 'Competitive Coding & Rapid Solution Building',
    summary:
      'Participated in HackArena, collaborating on rapid prototyping, developing time-constrained software solutions, and pitching functional technical prototypes to evaluators.',
    focusArea: 'Rapid Software Prototyping',
  },
  {
    id: 'code4edtech',
    title: 'Code4EdTech Hackathon',
    type: 'Hackathon Participation',
    context: 'Educational Technology & Learning Innovation',
    summary:
      'Engaged in the Code4EdTech Hackathon focused on solving real-world challenges in education and student learning experiences through creative technical systems.',
    focusArea: 'EdTech Solutions',
  },
  {
    id: 'ey-techathon',
    title: 'EY Techathon 6.0',
    type: 'National Challenge Participation',
    context: 'Enterprise & Emerging Technology Challenge',
    summary:
      'Participated in EY Techathon 6.0, addressing real-world problem statements through innovative business and technology solutions relevant to modern industry.',
    focusArea: 'Enterprise Tech & Business Systems',
  },
  {
    id: 'paper-presentations',
    title: 'Technical Paper Presentations',
    type: 'Academic & Technical Presentations',
    context: 'Symposiums & Technical Forums',
    summary:
      'Delivered technical paper presentations on emerging computing topics, effectively communicating technical architecture, methodology, and problem-solving strategies.',
    focusArea: 'Research & Technical Communication',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'nptel-java',
    title: 'Programming in Java (NPTEL / SWAYAM)',
    organization: 'NPTEL — IIT Kharagpur / SWAYAM',
    scoreOrDetail: '79% Score',
    description:
      'Comprehensive 12-week course covering core Java, Object-Oriented Programming, multithreading, exception handling, collections framework, and applet architectures.',
    skillsAcquired: ['Java Core', 'OOP Concepts', 'Exception Handling', 'Collections'],
    hasExternalLink: false,
  },
  {
    id: 'training-ai',
    title: 'Training in Artificial Intelligence',
    organization: 'Professional Training Program',
    scoreOrDetail: 'Completed Coursework',
    description:
      'Foundational training in AI concepts, machine learning workflows, model evaluation, and applying AI developer tools to real-world software tasks.',
    skillsAcquired: ['AI Fundamentals', 'Machine Learning Basics', 'Prompt Engineering'],
    hasExternalLink: false,
  },
  {
    id: 'training-data-analytics',
    title: 'Training in Data Analytics',
    organization: 'Professional Training Program',
    scoreOrDetail: 'Completed Coursework',
    description:
      'Practical training in exploratory data analysis, dataset cleaning, statistical summaries, and extracting actionable business insights from tabular data.',
    skillsAcquired: ['Data Preprocessing', 'Exploratory Analysis', 'Tabular Metrics'],
    hasExternalLink: false,
  },
  {
    id: 'training-digital-marketing',
    title: 'Training in Digital Marketing',
    organization: 'Professional Training Program',
    scoreOrDetail: 'Completed Coursework',
    description:
      'Exploration of digital communication channels, content reach, SEO fundamentals, and brand positioning in digital ecosystems.',
    skillsAcquired: ['Digital Outreach', 'SEO Principles', 'Content Strategy'],
    hasExternalLink: false,
  },
];
