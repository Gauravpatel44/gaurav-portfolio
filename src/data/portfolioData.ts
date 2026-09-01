import { 
  Project, 
  SkillCategory, 
  CertificationItem, 
  ExperienceItem, 
  EducationItem, 
  AchievementItem, 
  PersonalInfo 
} from '../types/portfolio';

// Dynamic base path for GitHub Pages and local development
const rawBaseUrl = (import.meta as { env?: { BASE_URL?: string } })?.env?.BASE_URL || '/';
const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export const personalInfo: PersonalInfo = {
  name: 'Gaurav Patel',
  formalName: 'Patel Gaurav Dinesh',
  title: 'Diploma in Information Technology Student & Software Developer',
  tagline: 'Crafting responsive mobile applications, data analytics suites, and intelligent software systems.',
  institution: 'Government Polytechnic Valsad',
  program: 'Diploma in Information Technology',
  years: '2024 – 2027',
  location: 'Valsad, Gujarat, India',
  email: 'gauravpatel2060@gmail.com',
  phone: '+91 9510182060',
  githubUsername: 'Gauravpatel44',
  githubUrl: 'https://github.com/Gauravpatel44',
  linkedinUrl: 'https://www.linkedin.com/in/gaurav-patel-7ab896375',
  resumeDriveUrl: 'https://drive.google.com/file/d/18EFM66SFcyxiyGr9VfCf2oqgU9ObeeaP/view?usp=drivesdk',
  latestSpi: 9.35,
  averageSpi: 9.07,
};

export const educationData: EducationItem = {
  institution: 'Government Polytechnic Valsad',
  degree: 'Diploma in Information Technology',
  period: '2024 – 2027',
  location: 'Valsad, Gujarat, India',
  status: 'Currently Pursuing (Semester 4 Completed)',
  description: 'Top academic percentile student pursuing diploma coursework with heavy hands-on software development focus.',
  semesters: [
    { semester: 'Semester 1', spi: 8.95, status: 'Completed' },
    { semester: 'Semester 2', spi: 9.00, status: 'Completed' },
    { semester: 'Semester 3', spi: 9.00, status: 'Completed' },
    { semester: 'Semester 4', spi: 9.35, status: 'Completed', highlight: true }
  ],
  highlights: [
    'Top academic percentile with consistent 9.0+ SPI throughout curriculum',
    'Specialized in Object-Oriented Programming, Database Management, and Network Security',
    'Actively applied classroom theoretical concepts to production open-source applications'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages used for building software, scripts, and algorithms',
    skills: [
      { name: 'Python', level: 'Hands-on' },
      { name: 'Dart', level: 'Hands-on' },
      { name: 'Java', level: 'Hands-on' },
      { name: 'SQL', level: 'Hands-on' },
      { name: 'PHP', level: 'Hands-on' },
      { name: 'HTML5', level: 'Proficient' },
      { name: 'CSS3', level: 'Proficient' }
    ]
  },
  {
    name: 'Frameworks & Technologies',
    description: 'Modern app and backend frameworks powering practical projects',
    skills: [
      { name: 'Flutter', level: 'Hands-on' },
      { name: 'Django', level: 'Learning' },
      { name: 'Bootstrap', level: 'Hands-on' },
      { name: 'Tailwind CSS', level: 'Hands-on' },
      { name: 'REST APIs', level: 'Hands-on' }
    ]
  },
  {
    name: 'Data Science & Python',
    description: 'Scientific and analytical Python libraries for EDA and modeling',
    skills: [
      { name: 'Pandas', level: 'Hands-on' },
      { name: 'NumPy', level: 'Hands-on' },
      { name: 'Matplotlib', level: 'Hands-on' },
      { name: 'Seaborn', level: 'Hands-on' },
      { name: 'Scikit-Learn', level: 'Experimented' }
    ]
  },
  {
    name: 'Databases',
    description: 'Relational and document storage systems for application data',
    skills: [
      { name: 'MySQL', level: 'Hands-on' },
      { name: 'PostgreSQL', level: 'Experimented' },
      { name: 'Firebase Firestore', level: 'Hands-on' }
    ]
  },
  {
    name: 'Development Tools',
    description: 'Essential developer toolchain, version control, and environments',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'VS Code', level: 'Proficient' },
      { name: 'Android Studio', level: 'Hands-on' },
      { name: 'Jupyter Notebook', level: 'Hands-on' },
      { name: 'Postman', level: 'Hands-on' }
    ]
  },
  {
    name: 'Areas of Interest',
    description: 'Domain specializations and cutting-edge computing interests',
    skills: [
      { name: 'Mobile App Engineering', level: 'Hands-on' },
      { name: 'Cybersecurity Fundamentals', level: 'Hands-on' },
      { name: 'Artificial Intelligence', level: 'Hands-on' },
      { name: 'Data Analytics & Visualization', level: 'Hands-on' }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'rakshak-connect',
    title: 'Rakshak Connect',
    category: 'Mobile App',
    badge: 'Open Source Spotlight',
    shortDescription: 'Smart Emergency Response, Citizen Safety & Assistance System in Flutter designed for rapid emergency SOS dispatch and safety alarms.',
    fullDescription: 'Rakshak Connect is an open-source mobile safety application engineered in Flutter and Dart to address critical distress response gaps. The application provides immediate panic-triggered SMS broadcasts with GPS pinpointing, background sensor listeners, hardware siren triggering, and local emergency helpline directories.',
    technologies: ['Flutter', 'Dart', 'Android SDK', 'Mobile UI', 'SMS Gateway', 'Geolocation'],
    githubUrl: 'https://github.com/Gauravpatel44/rakshak-connect',
    features: [
      'Instant One-Tap SOS with automated live GPS location broadcasting via SMS',
      'High-decibel hardware emergency siren override for immediate alert signaling',
      'Curated offline emergency hotline directories (Police, Medical, Fire, Disaster)',
      'Clean dark-themed UI engineered with battery-efficient background services'
    ],
    architecture: [
      'Flutter reactive UI state management for ultra-low latency response during panic actions',
      'Native Android intent bridges for direct cellular SMS fallback during network blackouts',
      'Encrypted local SQLite storage for emergency contacts and user preferences'
    ]
  },
  {
    id: 'car-market-trends',
    title: 'Car Market Trends Analysis',
    category: 'AI & Data',
    badge: 'VOIS Project-4',
    shortDescription: 'Comprehensive exploratory data analysis on automobile market trends using Car Dekho datasets with Python, Pandas, and Seaborn.',
    fullDescription: 'Built as the practical project for the VOIS (Vodafone Idea Foundation) Tech Engagement program. Performs deep-dive exploratory data analysis (EDA), multi-variable statistical correlations, feature distributions, depreciation modeling, and pricing outlier detections on large real-world automotive listings.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    githubUrl: 'https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    features: [
      'Comprehensive dataset cleaning, imputation, and categorical encoding pipeline',
      'Multi-variable statistical visualizations examining depreciation curves across vehicle types',
      'Automated pricing distribution insights across fuel types, transmission, and mileage',
      'Detailed Jupyter Notebook with structured analytical narrative and executive summaries'
    ],
    architecture: [
      'Pandas data frames optimized for vectorized statistical transformations',
      'Seaborn heatmap matrix for rapid multi-feature correlation coefficient inspection'
    ]
  },
  {
    id: 'network-intrusion-detection',
    title: 'AI Network Intrusion Detection',
    category: 'Cybersecurity',
    badge: 'Security Research',
    shortDescription: 'Machine learning based network anomaly and malicious traffic classification system for proactive cyber defense.',
    fullDescription: 'An automated security analysis engine applying classification algorithms to identify network traffic anomalies, port scans, and denial-of-service attempts. Built to bridge applied AI modeling with foundational network security architectures.',
    technologies: ['Python', 'Scikit-Learn', 'Network Security', 'Machine Learning', 'Pandas'],
    githubUrl: 'https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-',
    features: [
      'Packet feature vectorization and network anomaly detection',
      'Evaluation metrics comparing classification precision and false-positive minimization',
      'Simulated attack vector detection and security event logging'
    ],
    architecture: [
      'Scikit-learn classification pipeline with standardized feature scaling'
    ]
  },
  {
    id: 'python-keylogger-audit',
    title: 'Python Keylogger Security Audit',
    category: 'Cybersecurity',
    badge: 'Academic Research',
    shortDescription: 'Educational security audit tool demonstrating keystroke logging mechanics and defensive mitigation counter-strategies.',
    fullDescription: 'Developed strictly for educational research and vulnerability understanding. Investigates how endpoint processes capture input hooks and how endpoint detection and response (EDR) solutions identify and quarantine unauthorized keyboard interception hooks.',
    technologies: ['Python', 'OS System Hooks', 'Cybersecurity', 'Defensive Hardening'],
    githubUrl: 'https://github.com/Gauravpatel44/Python-Keylogger',
    features: [
      'Low-level input listener hook demonstration in Python',
      'Analysis of process isolation techniques to mitigate unauthorized event hooks',
      'Comprehensive educational documentation on defensive endpoint hardening'
    ],
    architecture: [
      'Pynput / OS-level event queue listener architecture for educational analysis'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'vodafone-vois',
    organization: 'Vodafone Idea Foundation & VOIS',
    role: "Virtual Internship on 'Cybersecurity with Gen AI'",
    type: 'Internship',
    dateRange: '09 Dec 2025 – 06 Jan 2026',
    duration: '4-Week Virtual Internship',
    partner: "AICTE and 'VOIS for Tech University Engagement Program' implemented by Edunet Foundation",
    description: "Completed the AICTE and 'VOIS for Tech University Engagement Program' led Virtual Internship on 'Cybersecurity with Gen AI' implemented by Edunet Foundation. Built the Car Market Trends Data Analytics DIY Project-4 as part of practical initiatives.",
    highlights: [
      'Hands-on study of core cybersecurity principles, threat vectors, and network defenses',
      'Built the Car Market Trends Analysis with Car Dekho Data (VOIS Project-4) repository',
      'Awarded official Certificate of Internship signed by Vodafone Idea Foundation & Edunet Foundation'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1HSFoUFtK40ThU21Rjwgmab3xydswoBHX/view?usp=drivesdk'
  },
  {
    id: 'microsoft-edunet',
    organization: 'Microsoft & Edunet Foundation',
    role: 'Foundations of AI',
    type: 'Internship',
    dateRange: '10 April 2025 – 10 May 2025',
    duration: '4-Week Internship',
    partner: 'Collaboration with AICTE',
    description: 'Successfully completed a 4-week internship on Foundations of AI, a Microsoft initiative implemented by Edunet Foundation in collaboration with AICTE. Gained foundational grounding in machine learning concepts, computer vision basics, and AI solution architectures.',
    highlights: [
      'Explored core AI algorithms, neural network fundamentals, and data preprocessing workflows',
      'Completed practical assignments covering automated classification and regression models',
      'Official Certificate of Completion awarded with AICTE & Microsoft credential registration'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1-Tj0QH2ksx0jEOFScX7qwM6aDm6kx0Cv/view?usp=drivesdk'
  },
  {
    id: 'ibm-bharatcares',
    organization: 'BharatCares & IBM SkillsBuild',
    role: 'Front-End Web Development Internship & AI Data Science Training',
    type: 'Internship & Training',
    dateRange: '15 June 2026 – 30 June 2026',
    duration: '2-Week Skill-Based Training',
    partner: 'IBM SkillsBuild CSR Initiative',
    description: 'Participated in comprehensive skill-based training and front-end development internship curriculum under the guidance of industry mentor Mr. Tushar Khandelwal. Focused on building responsive modern web applications and foundational AI agentic workflows.',
    highlights: [
      'Mastered responsive layouts, modern HTML5/CSS3 semantics, and JavaScript DOM manipulation',
      'Received Certificate of Training in AI Data Science & Agentic Systems',
      'Official verified credential registered under Student ID 246290316044'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1pJ5ZBFU0sgW0EKWPeDgCWR5NpUTjqQIW/view?usp=drivesdk'
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: 'cert-vois-cybersecurity',
    title: 'Cybersecurity with Gen AI',
    certificateType: 'Certificate of Internship',
    issuer: 'Vodafone Idea Foundation & VOIS',
    partners: 'AICTE & Edunet Foundation',
    recipientName: 'PATEL GAURAV DINESH',
    dateRange: '09 Dec 2025 to 06 Jan 2026',
    credentialId: 'AICTE / VOIS Tech Engagement',
    imageUrl: `${baseUrl}certificates/vois-vi-certificate.png`,
    verificationUrl: 'https://drive.google.com/file/d/1HSFoUFtK40ThU21Rjwgmab3xydswoBHX/view?usp=drivesdk',
    category: 'Cybersecurity',
    icon: 'shield-check',
    summary: "Completed the AICTE and 'VOIS for Tech University Engagement Program' led Virtual Internship on 'Cybersecurity with Gen AI' implemented by Edunet Foundation."
  },
  {
    id: 'cert-microsoft-ai',
    title: 'Foundations of AI',
    certificateType: 'Certificate of Completion',
    issuer: 'Microsoft',
    partners: 'Edunet Foundation & AICTE',
    recipientName: 'PATEL GAURAV DINESH',
    dateRange: '10 April 2025 to 10 May 2025',
    credentialId: 'STU679b11c9366d51738215881',
    imageUrl: `${baseUrl}certificates/microsoft-ai-certificate.png`,
    verificationUrl: 'https://drive.google.com/file/d/1-Tj0QH2ksx0jEOFScX7qwM6aDm6kx0Cv/view?usp=drivesdk',
    category: 'AI & ML',
    icon: 'sparkles',
    summary: 'Successfully completed a 4-week internship on Foundations of AI, a Microsoft initiative implemented by Edunet Foundation in collaboration with AICTE.'
  },
  {
    id: 'cert-ibm-bharatcares',
    title: 'AI Data Science & Agentic Systems',
    certificateType: 'Certificate of Training',
    issuer: 'BharatCares & IBM',
    partners: 'CSR Initiative & Edunet',
    recipientName: 'Patel Gaurav Dinesh',
    dateRange: '15 June 2026 to 30 June 2026',
    credentialId: '246290316044',
    imageUrl: `${baseUrl}certificates/ibm-bharatcares-certificate.png`,
    verificationUrl: 'https://drive.google.com/file/d/1pJ5ZBFU0sgW0EKWPeDgCWR5NpUTjqQIW/view?usp=drivesdk',
    category: 'Data Science',
    icon: 'bot',
    summary: 'Completed Skill Based Training in the field of AI Data Science & Agentic Systems (Total Weeks: 2) under the guidance of Mr. Tushar Khandelwal.'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: '1',
    title: 'Semester 4 Top Academic Ranking (9.35 SPI)',
    organization: 'Government Polytechnic Valsad',
    date: '2025',
    category: 'Academic',
    description: 'Achieved a peak semester performance index of 9.35, placing among the top percentile in the Diploma Information Technology cohort.',
    metric: '9.35 SPI'
  },
  {
    id: '2',
    title: 'Completed VOIS & Edunet Project-4 Challenge',
    organization: 'Vodafone Idea Foundation',
    date: '2026',
    category: 'Project',
    description: 'Successfully engineered the Car Market Trends Analysis with Car Dekho Data repository as an independent project initiative.',
    metric: 'VOIS Project-4'
  },
  {
    id: '3',
    title: 'Published Rakshak Connect Open-Source Safety App',
    organization: 'GitHub Open Source',
    date: '2026',
    category: 'Open Source',
    description: 'Architected and released a complete Flutter citizen safety application with SOS SMS broadcast and GPS integration.',
    metric: 'Open Source'
  }
];
