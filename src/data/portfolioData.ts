import { Project, SkillCategory, EducationItem, ExperienceItem, CertificationItem, AchievementItem } from '../types/portfolio';

// Dynamic base path for GitHub Pages and local development
const rawBaseUrl = (import.meta as { env?: { BASE_URL?: string } })?.env?.BASE_URL || '/';
const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export const personalInfo = {
  name: "Gaurav Patel",
  fullName: "Patel Gaurav Dinesh",
  role: "Diploma in Information Technology Student",
  subtitle: "Software Developer & Aspiring IT Professional",
  shortIntro: "I am a Diploma in Information Technology student with a strong interest in software development, web development, mobile applications, cybersecurity, and emerging AI technologies. I enjoy building practical projects and learning technologies by working on real-world applications.",
  aboutText: "I am an Information Technology student who enjoys turning ideas into working software. My interests span application development, web technologies, cybersecurity, databases, and artificial intelligence.\n\nI have worked on multiple academic and practical open-source projects on GitHub, including the Rakshak Connect Flutter emergency safety mobile application, Car Market Trends Data Analytics suite (VOIS Project-4), AI-Based Network Intrusion Detection Systems (NIDS), and cybersecurity test utilities. I particularly enjoy experimenting with new technologies and solving practical technical problems.\n\nMy goal is to continue developing my technical skills, gain industry experience, and build a career in the IT industry.",
  location: "Valsad, Gujarat, India",
  email: "gauravpatel2060@gmail.com",
  phone: "+91 9510182060",
  githubUrl: "https://github.com/Gauravpatel44",
  githubUsername: "Gauravpatel44",
  linkedinUrl: "https://www.linkedin.com/in/gaurav-patel-7ab896375",
  resumeUrl: "https://drive.google.com/file/d/18EFM66SFcyxiyGr9VfCf2oqgU9ObeeaP/view?usp=drivesdk",
  stats: {
    latestSpi: "9.35",
    latestSpiLabel: "Latest SPI (Sem 4)",
    projectsCount: "4+",
    projectsLabel: "Real GitHub Repos",
    journeyYears: "2024 – 2027",
    journeyLabel: "Diploma Journey",
    industryPrograms: "3 Verified",
    industryProgramsLabel: "Certifications & Internships"
  }
};

export const educationData: EducationItem = {
  institution: "Government Polytechnic Valsad",
  degree: "Diploma in Information Technology",
  period: "2024 – 2027",
  location: "Valsad, Gujarat, India",
  status: "Current Diploma Student",
  description: "Pursuing a comprehensive curriculum covering computer engineering fundamentals, data structures, relational databases, software design, and practical system architectures.",
  semesters: [
    { semester: "Semester 1", spi: 8.95, maxSpi: 10.0, highlight: "Strong foundation in Computer Fundamentals & Programming logic", status: "Completed" },
    { semester: "Semester 2", spi: 8.95, maxSpi: 10.0, highlight: "Excellence in Web Basics, Data Structures & Mathematics", status: "Completed" },
    { semester: "Semester 3", spi: 9.05, maxSpi: 10.0, highlight: "Crossed 9.0+ milestone in Database Systems & OOP in Java/Python", status: "Completed" },
    { semester: "Semester 4", spi: 9.35, maxSpi: 10.0, highlight: "Personal Best SPI (9.35) with advanced system implementations", status: "Completed" }
  ],
  nextGoal: {
    title: "Future Academic Pathway",
    college: "To Be Decided",
    details: "Planning to pursue B.Tech in Information Technology to further deepen expertise in software architecture, distributed systems, and modern AI engineering."
  }
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    description: "Core languages used for building software, scripts, and algorithms",
    skills: [
      { name: "Python", level: "Hands-on", iconName: "python" },
      { name: "Dart", level: "Hands-on", iconName: "code" },
      { name: "Java", level: "Hands-on", iconName: "coffee" },
      { name: "SQL", level: "Hands-on", iconName: "database" },
      { name: "PHP", level: "Hands-on", iconName: "server" },
      { name: "HTML5", level: "Proficient", iconName: "layout" },
      { name: "CSS3", level: "Proficient", iconName: "palette" }
    ]
  },
  {
    name: "Frameworks & Technologies",
    description: "App and web development frameworks used in projects",
    skills: [
      { name: "Flutter", level: "Hands-on", iconName: "smartphone" },
      { name: "Django", level: "Hands-on", iconName: "layers" },
      { name: "Android Development", level: "Hands-on", iconName: "tablet" },
      { name: "Web Development", level: "Proficient", iconName: "globe" },
      { name: "Kivy", level: "Experimented", iconName: "box" }
    ]
  },
  {
    name: "Data Science & Python",
    description: "Libraries for data manipulation, statistical analysis and visualizations",
    skills: [
      { name: "Pandas", level: "Hands-on", iconName: "table" },
      { name: "NumPy", level: "Hands-on", iconName: "cpu" },
      { name: "Matplotlib", level: "Hands-on", iconName: "bar-chart-2" },
      { name: "Seaborn", level: "Hands-on", iconName: "pie-chart" },
      { name: "Pillow (PIL)", level: "Hands-on", iconName: "image" },
      { name: "yt-dlp", level: "Hands-on", iconName: "download" }
    ]
  },
  {
    name: "Databases",
    description: "Relational and document databases for persistent storage",
    skills: [
      { name: "SQL (MySQL / SQLite)", level: "Hands-on", iconName: "database" },
      { name: "MongoDB", level: "Experimented", iconName: "hard-drive" }
    ]
  },
  {
    name: "Development Tools",
    description: "Workflows, code editors, version control and terminal environments",
    skills: [
      { name: "Git", level: "Hands-on", iconName: "git-branch" },
      { name: "GitHub", level: "Hands-on", iconName: "github" },
      { name: "VS Code", level: "Proficient", iconName: "terminal" },
      { name: "Jupyter / Colab", level: "Hands-on", iconName: "book-open" },
      { name: "Android Studio", level: "Hands-on", iconName: "smartphone" },
      { name: "Termux", level: "Hands-on", iconName: "terminal" },
      { name: "Pydroid3", level: "Hands-on", iconName: "play" }
    ]
  },
  {
    name: "Areas of Interest",
    description: "Technical domains actively learning and exploring",
    skills: [
      { name: "Software Development", level: "Proficient", iconName: "code-2" },
      { name: "Mobile App Development", level: "Hands-on", iconName: "smartphone" },
      { name: "Data Analytics & ML", level: "Hands-on", iconName: "bar-chart" },
      { name: "Cybersecurity & NIDS", level: "Learning", iconName: "shield" },
      { name: "Artificial Intelligence", level: "Learning", iconName: "bot" },
      { name: "Generative AI", level: "Learning", iconName: "sparkles" },
      { name: "Database Management", level: "Hands-on", iconName: "database" },
      { name: "UI/UX Design", level: "Hands-on", iconName: "layout-template" }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "rakshak-connect",
    title: "Rakshak Connect",
    category: "Mobile App",
    type: "Mobile Application (Flutter / Dart)",
    shortDescription: "Smart Emergency Response, Citizen Safety & Assistance System in Flutter designed for rapid emergency SOS dispatch and safety alarms.",
    fullDescription: "Rakshak Connect is an open-source emergency and personal safety application engineered with Flutter and Dart. It empowers citizens during critical situations by delivering immediate one-tap access to emergency SOS alerts, high-decibel audible sirens, emergency contact communication, and a safety-focused interface optimized for rapid response.",
    technologies: ["Flutter", "Dart", "Android SDK", "Mobile UI", "Background Services"],
    features: [
      "One-Tap Emergency SOS Alert dispatch",
      "High-decibel audible emergency siren mechanism",
      "Safety-focused high contrast emergency interface",
      "Emergency contact communication and location coordinate payload",
      "Background operation and quick action handling",
      "Clean, modern mobile user experience"
    ],
    problem: "In life-threatening emergencies, navigating complex phone menus or unlocking multiple screens creates dangerous delays. Users require instantaneous, single-tap access to audible deterrents and emergency broadcasts.",
    solution: "Engineered Rakshak Connect with an emergency-first, distraction-free UI where vital safety actions can be triggered with single gestures, clear feedback, and robust offline reliability.",
    challenges: [
      "Managing responsive audio triggers and hardware sirens across various Android device specifications",
      "Architecting state management for rapid button triggers without UI lag",
      "Designing an intuitive UI that remains accessible under stress or low-light situations"
    ],
    learnings: [
      "Mastered Flutter widget lifecycle and state management patterns",
      "Learned background audio services and hardware permission flows on Android",
      "Gained deep appreciation for accessibility and high-contrast UX in emergency tooling"
    ],
    githubUrl: "https://github.com/Gauravpatel44/rakshak-connect",
    isOpenSource: true,
    featured: true,
    badge: "Open Source Spotlight",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "car-market-trends",
    title: "Car Market Trends & Depreciation Analysis",
    category: "AI & Data",
    type: "Data Analytics & Exploratory Analysis (Python)",
    shortDescription: "VOIS For Tech Data Analytics DIY Project-4: Used-car dataset analysis from Car Dekho to identify vehicle market trends, pricing patterns, and depreciation factors.",
    fullDescription: "An in-depth data analytics and market trend analysis project built for the VOIS For Tech initiative. Analyzes thousands of used-car records from Car Dekho to examine price distributions, calculate vehicle depreciation percentages over time, evaluate fuel-type/transmission impact on resale values, and extract actionable market insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Comprehensive data cleaning, duplicate handling, and outlier investigation",
      "Feature engineering for Car Age and Depreciation Percentage formulas",
      "Exploratory Data Analysis (EDA) comparing selling prices across fuel types, transmission & owners",
      "Correlation matrix heatmaps and statistical price distributions",
      "Visual market trend reports and actionable resale value insights"
    ],
    problem: "Understanding used-car resale valuation and depreciation patterns requires rigorous statistical analysis across complex multi-variable datasets (mileage, age, fuel type, transmission, seller type).",
    solution: "Developed an automated Python data pipeline using Pandas and Seaborn to clean the dataset, engineer domain features (Car Age & Depreciation Rate), and visualize key market trends.",
    challenges: [
      "Investigating high-mileage data points and determining valid data boundaries without introducing bias",
      "Constructing normalized depreciation percentage equations across varying price ranges"
    ],
    learnings: [
      "Advanced proficiency with Pandas data manipulation, aggregation, and groupby metrics",
      "Mastered data visualization techniques with Matplotlib and Seaborn for executive presentations",
      "Learned practical end-to-end data analytics methodology from raw data to actionable insights"
    ],
    githubUrl: "https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data",
    isOpenSource: true,
    featured: false,
    badge: "VOIS Analytics Project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ai-nids-project",
    title: "AI-Based Network Intrusion Detection System",
    category: "Cybersecurity",
    type: "AI & Cybersecurity Project (Python)",
    shortDescription: "An intelligent AI and machine learning-driven network intrusion detection system designed to detect malicious network traffic, anomalies, and unauthorized intrusions.",
    fullDescription: "Developed as part of practical cybersecurity research, this project explores machine learning algorithms and network packet inspection to classify benign vs. malicious traffic patterns, detect port scanning, denial-of-service signatures, and flag abnormal network behaviors.",
    technologies: ["Python", "Machine Learning", "Cybersecurity", "Network Protocols", "Scikit-Learn"],
    features: [
      "Network packet feature analysis and flow categorization",
      "Machine learning models trained to classify normal vs. anomalous network activity",
      "Automated threat detection logic for common attack signatures",
      "Structured log generation and alert classification"
    ],
    problem: "Traditional rule-based firewalls often fail to catch zero-day anomalies and stealthy network intrusions without adaptive machine learning models.",
    solution: "Created an AI-based intrusion detection framework that leverages statistical analysis and machine learning classifiers to flag suspicious traffic in near real-time.",
    challenges: [
      "Balancing false positive rates in high-throughput network flow simulations",
      "Feature selection from complex packet header captures"
    ],
    learnings: [
      "Understood core network security architecture and packet inspection workflows",
      "Applied machine learning classification algorithms to cybersecurity datasets"
    ],
    githubUrl: "https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-",
    isOpenSource: true,
    featured: false,
    badge: "Cybersecurity & AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "python-security-keylogger",
    title: "Python Security Audit & Keylogger Lab",
    category: "Cybersecurity",
    type: "Security Exploration & Scripting (Python)",
    shortDescription: "An educational cybersecurity tool exploring low-level keyboard input hooking, event monitoring, file encoding, and defensive threat mitigations.",
    fullDescription: "A hands-on cybersecurity lab script developed to examine endpoint security vulnerabilities, Windows/Linux input event listeners, encrypted local file recording, and techniques employed by malware analysis researchers to build defensive countermeasures.",
    technologies: ["Python", "Cybersecurity", "OS Hooks", "Threading", "Encryption"],
    features: [
      "Low-level event hook listener implementation in Python",
      "Multi-threaded background execution and state handling",
      "Encrypted log generation and periodic dispatch concepts",
      "Documentation of defensive detection and endpoint security mitigations"
    ],
    problem: "Defending systems against keystroke logging and unauthorized input capture requires understanding how input hooks and OS background processes operate under the hood.",
    solution: "Constructed an educational security audit script to understand keystroke interception mechanisms and implement corresponding defensive detection strategies.",
    challenges: [
      "Managing OS-specific keyboard hook differences and background thread lifecycles",
      "Handling character encoding and special key combinations accurately"
    ],
    learnings: [
      "Deepened practical understanding of system-level hooks and threading in Python",
      "Gained valuable perspective on endpoint threat modeling and malware defense"
    ],
    githubUrl: "https://github.com/Gauravpatel44/Python-Keylogger",
    isOpenSource: true,
    featured: false,
    badge: "Security Lab Tool",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "vois-cybersecurity",
    organization: "Vodafone Idea Foundation & VOIS",
    role: "Virtual Internship on 'Cybersecurity with Gen AI'",
    duration: "4-Week Virtual Internship",
    dateRange: "09 Dec 2025 – 06 Jan 2026",
    type: "Internship",
    partner: "AICTE and 'VOIS for Tech University Engagement Program' implemented by Edunet Foundation",
    description: "Completed the AICTE and 'VOIS for Tech University Engagement Program' led Virtual Internship on 'Cybersecurity with Gen AI' implemented by Edunet Foundation. Built the Car Market Trends Data Analytics DIY Project-4 as part of practical initiatives.",
    highlights: [
      "Hands-on study of core cybersecurity principles, threat vectors, and network defenses",
      "Built the Car Market Trends Analysis with Car Dekho Data (VOIS Project-4) repository",
      "Awarded official Certificate of Internship signed by Vodafone Idea Foundation & Edunet Foundation"
    ],
    badgeColor: "emerald",
    certificateUrl: "https://drive.google.com/file/d/1HSFoUFtK40ThU21Rjwgmab3xydswoBHX/view?usp=drivesdk",
    certificateImage: "/certificates/vois-vi-certificate.png"
  },
  {
    id: "microsoft-edunet-ai",
    organization: "Microsoft",
    role: "Foundations of AI Internship",
    duration: "4-Week Internship",
    dateRange: "10 April 2025 – 10 May 2025",
    type: "Internship",
    partner: "Implemented by Edunet Foundation in collaboration with AICTE",
    description: "Successfully completed a 4-week internship on Foundations of AI, a Microsoft initiative implemented by Edunet Foundation in collaboration with All India Council for Technical Education (AICTE).",
    highlights: [
      "Covered essential AI algorithms, machine learning concepts, and predictive models",
      "Student ID: STU679b11c9366d51738215881 | Internship ID: INTERNSHIP_174175788467d11dbc1d08d",
      "Earned formal Microsoft & AICTE Certificate of Completion"
    ],
    badgeColor: "cyan",
    certificateUrl: "https://drive.google.com/file/d/1-Tj0QH2ksx0jEOFScX7qwM6aDm6kx0Cv/view?usp=drivesdk",
    certificateImage: "/certificates/microsoft-ai-certificate.png"
  },
  {
    id: "ibm-skillsbuild-agentic",
    organization: "BharatCares & IBM",
    role: "Skill Based Training: AI Data Science & Agentic Systems",
    duration: "2-Week Intensive (Total Weeks: 2)",
    dateRange: "15 June 2026 – 30 June 2026",
    type: "Skill Training",
    partner: "BharatCares (by SMEC Trust) in collaboration with IBM",
    mentor: "Mr. Tushar Khandelwal",
    description: "Completed Skill Based Training in the field of AI Data Science & Agentic Systems from 15th June 2026 to 30th June 2026 under the guidance of Mr. Tushar Khandelwal.",
    highlights: [
      "Enrollment No: 246290316044 (Diploma Government Polytechnic Valsad)",
      "Studied modern data science pipelines, feature engineering, and agentic autonomous systems",
      "Evaluated as sincere, enthusiastic, and dedicated toward work assigned"
    ],
    badgeColor: "violet",
    certificateUrl: "https://drive.google.com/file/d/1pJ5ZBFU0sgW0EKWPeDgCWR5NpUTjqQIW/view?usp=drivesdk",
    certificateImage: "/certificates/ibm-bharatcares-certificate.png"
  }
];

export const certificationData: CertificationItem[] = [
  {
    id: "cert-vois-cyber-genai",
    title: "Cybersecurity with Gen AI",
    certificateType: "Certificate of Internship",
    issuer: "Vodafone Idea Foundation & VOIS",
    partners: "AICTE & Connecting Dreams Foundation, implemented by Edunet Foundation",
    date: "January 2026",
    dateRange: "09 Dec 2025 to 06 Jan 2026",
    category: "Cybersecurity",
    credentialId: "AICTE / VOIS Tech Engagement",
    verificationUrl: "https://drive.google.com/file/d/1HSFoUFtK40ThU21Rjwgmab3xydswoBHX/view?usp=drivesdk",
    imageUrl: "/certificates/vois-vi-certificate.png",
    icon: "shield-check",
    recipientName: "PATEL GAURAV DINESH",
    institution: "Government Polytechnic Valsad",
    signatories: [
      "Deepender Kumar (Head, Vodafone Idea Foundation)",
      "Nagesh Singh (Chairman, Edunet Foundation)"
    ],
    summary: "Completed the AICTE and 'VOIS for Tech University Engagement Program' led Virtual Internship on 'Cybersecurity with Gen AI' implemented by Edunet Foundation."
  },
  {
    id: "cert-microsoft-ai",
    title: "Foundations of AI",
    certificateType: "Certificate of Completion",
    issuer: "Microsoft",
    partners: "Implemented by Edunet Foundation in collaboration with AICTE",
    date: "May 2025",
    dateRange: "10 April 2025 to 10 May 2025",
    credentialId: "STU679b11c9366d51738215881",
    internshipId: "INTERNSHIP_174175788467d11dbc1d08d",
    verificationUrl: "https://drive.google.com/file/d/1-Tj0QH2ksx0jEOFScX7qwM6aDm6kx0Cv/view?usp=drivesdk",
    imageUrl: "/certificates/microsoft-ai-certificate.png",
    category: "AI & ML",
    icon: "sparkles",
    recipientName: "PATEL GAURAV DINESH",
    institution: "GOVERNMENT POLYTECHNIC, VALSAD",
    signatories: [
      "Nagesh Singh (Chairman, Edunet Foundation)"
    ],
    summary: "Successfully completed a 4-week internship on Foundations of AI, a Microsoft initiative implemented by Edunet Foundation in collaboration with AICTE."
  },
  {
    id: "cert-ibm-data-agentic",
    title: "AI Data Science & Agentic Systems",
    certificateType: "Certificate of Training",
    issuer: "BharatCares & IBM",
    partners: "BharatCares (by SMEC Trust) in collaboration with IBM",
    date: "June 2026",
    dateRange: "15 June 2026 to 30 June 2026",
    enrollmentNo: "246290316044",
    verificationUrl: "https://drive.google.com/file/d/1pJ5ZBFU0sgW0EKWPeDgCWR5NpUTjqQIW/view?usp=drivesdk",
    imageUrl: "/certificates/ibm-bharatcares-certificate.png",
    category: "Data Science",
    icon: "bot",
    recipientName: "Patel Gaurav Dinesh",
    institution: "Diploma Government Polytechnic Valsad",
    signatories: [
      "Ms. Sneha Singh (Manager, CSR Programs, BharatCares)",
      "Ms. Shrilakshmi Nair (Senior Manager, CSR Programs, BharatCares)",
      "Mr. Tushar Khandelwal (Guidance & Mentorship)"
    ],
    summary: "Completed Skill Based Training in the field of AI Data Science & Agentic Systems (Total Weeks: 2) under the guidance of Mr. Tushar Khandelwal."
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Consistently Strong Academic Performance",
    category: "Academic",
    description: "Maintained a continuous upward trajectory with Sem 1: 8.95, Sem 2: 8.95, Sem 3: 9.05, and Sem 4: 9.35 SPI at Government Polytechnic Valsad.",
    metric: "9.35 Latest SPI"
  },
  {
    id: "ach-2",
    title: "Built Open-Source Safety Application (Rakshak Connect)",
    category: "Open Source",
    description: "Designed and engineered an open-source Flutter mobile safety application with SOS siren and emergency contact features on GitHub.",
    metric: "Open Source App"
  },
  {
    id: "ach-3",
    title: "Car Market Trends Analytics Project (VOIS Project-4)",
    category: "Development",
    description: "Completed comprehensive exploratory analysis and depreciation modeling on Car Dekho dataset with Pandas & Seaborn.",
    metric: "VOIS Project-4"
  },
  {
    id: "ach-4",
    title: "Completed 3 Official Industry Internships & Trainings",
    category: "Training",
    description: "Verified certificates from Vodafone Idea Foundation/VOIS, Microsoft AICTE, and BharatCares/IBM in AI Data Science, Agentic Systems & Cybersecurity.",
    metric: "3 Verified Certs"
  }
];
