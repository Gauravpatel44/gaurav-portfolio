/**
 * Material 3 Developer Portfolio — Gaurav Patel
 * Vanilla JavaScript (No Frameworks, Zero Emojis)
 */

// ==========================================================================
// 1. Data Store
// ==========================================================================
const personalInfo = {
  name: 'Gaurav Patel',
  formalName: 'Patel Gaurav Dinesh',
  title: 'Diploma in Information Technology Student & Software Developer',
  tagline: 'Building practical digital experiences, mobile applications, and intelligent software systems.',
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

const featuredProjects = [
  {
    id: 'rakshak-connect',
    title: 'Rakshak Connect',
    category: 'Mobile App',
    badge: 'Featured Project',
    shortDescription: 'Emergency response, citizen safety, and assistance application built with Flutter and Dart for instant SOS broadcast and offline helpline access.',
    fullDescription: 'Rakshak Connect is an open-source mobile safety application engineered in Flutter and Dart to address critical distress response gaps. The application provides immediate panic-triggered SMS broadcasts with GPS pinpointing, background sensor listeners, hardware siren triggering, and local emergency helpline directories.',
    technologies: ['Flutter', 'Dart', 'Android SDK', 'SMS Gateway', 'Geolocation', 'SQLite'],
    githubUrl: 'https://github.com/Gauravpatel44/rakshak-connect',
    problem: 'During personal distress emergencies, users often experience connectivity blackouts, high latency in manual dialing, or panic disorientation when broadcasting their live coordinates.',
    solution: 'Engineered an ultra-low latency mobile architecture that automates one-tap SMS distress dispatches with GPS coordinates, triggers audible sirens, and functions reliably without active cellular data.',
    features: [
      'Instant One-Tap SOS with automated live GPS location broadcasting via cellular SMS',
      'High-decibel hardware emergency siren override for immediate audible alert signaling',
      'Curated offline emergency hotline directory for police, medical, fire, and disaster teams',
      'Battery-efficient background listeners with native Android intent fallback'
    ]
  },
  {
    id: 'car-market-trends',
    title: 'Car Market Trends Analysis',
    category: 'AI & Data',
    badge: 'VOIS Program Project',
    shortDescription: 'Exploratory data analysis on automobile resale pricing trends using Car Dekho datasets with Python, Pandas, and Seaborn.',
    fullDescription: 'Built as the practical project for the VOIS (Vodafone Idea Foundation) Tech Engagement program. Performs deep-dive exploratory data analysis (EDA), multi-variable statistical correlations, feature distributions, depreciation modeling, and pricing outlier detections on large real-world automotive listings.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    githubUrl: 'https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    problem: 'Automobile market values exhibit non-linear depreciation influenced by vehicle age, fuel variations, transmission types, and odometer metrics that are challenging to evaluate in raw form.',
    solution: 'Constructed an end-to-end Python exploratory data analysis pipeline that cleanses raw automotive records, executes statistical correlations, and renders high-density visualization matrices.',
    features: [
      'Dataset cleansing, missing value imputation, and categorical feature encoding',
      'Multi-variable statistical visualizations examining depreciation curves across vehicle classes',
      'Pricing distribution insights across fuel types, transmission, and mileage metrics',
      'Structured Jupyter Notebook with analytical findings and executive summaries'
    ]
  },
  {
    id: 'network-intrusion-detection',
    title: 'AI Network Intrusion Detection',
    category: 'Cybersecurity',
    badge: 'Security Research',
    shortDescription: 'Machine learning based network anomaly and malicious traffic classification system for proactive defense.',
    fullDescription: 'An automated security analysis engine applying classification algorithms to identify network traffic anomalies, port scans, and denial-of-service attempts. Built to bridge applied AI modeling with foundational network security architectures.',
    technologies: ['Python', 'Scikit-Learn', 'Network Security', 'Machine Learning', 'Pandas'],
    githubUrl: 'https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-',
    problem: 'Manual inspection of high-volume network telemetry packets is incapable of detecting subtle multi-stage scanning attacks and distributed anomalies in real time.',
    solution: 'Designed a machine-learning classification pipeline trained on vectorized packet feature vectors to automatically classify benign traffic versus malicious network behaviors.',
    features: [
      'Packet feature vectorization and network anomaly detection',
      'Evaluation metrics comparing classification precision and false-positive minimization',
      'Simulated attack vector detection and security event classification',
      'Standardized feature scaling pipeline for defensive network telemetry'
    ]
  },
  {
    id: 'python-keylogger-audit',
    title: 'Python Keylogger Security Audit',
    category: 'Cybersecurity',
    badge: 'Educational Audit',
    shortDescription: 'Educational security audit tool demonstrating input listener mechanics and defensive hardening countermeasures.',
    fullDescription: 'Developed strictly for educational research and vulnerability understanding. Investigates how endpoint processes capture input hooks and how endpoint detection and response (EDR) solutions identify and quarantine unauthorized keyboard interception hooks.',
    technologies: ['Python', 'OS System Hooks', 'Cybersecurity', 'Defensive Hardening'],
    githubUrl: 'https://github.com/Gauravpatel44/Python-Keylogger',
    problem: 'Operating system input dispatch pipelines can be vulnerable to unauthorized background listeners that capture keystrokes.',
    solution: 'Constructed an educational proof-of-concept audit tool that analyzes OS event dispatch hooks and formulates defensive hardening countermeasures.',
    features: [
      'Low-level input listener hook demonstration in Python for security research',
      'Analysis of process isolation techniques to mitigate unauthorized event hooks',
      'Educational documentation detailing defensive endpoint protection strategies'
    ]
  }
];

const certificationData = [
  {
    id: 'cert-vois-cybersecurity',
    title: 'Cybersecurity with Gen AI',
    certificateType: 'Certificate of Internship',
    issuer: 'Vodafone Idea Foundation & VOIS',
    partners: 'AICTE & Edunet Foundation',
    recipientName: 'PATEL GAURAV DINESH',
    dateRange: '09 Dec 2025 to 06 Jan 2026',
    credentialId: 'AICTE / VOIS Tech Engagement',
    imageUrl: 'assets/certificates/vois-vi-certificate.png',
    verificationUrl: 'https://drive.google.com/file/d/1HSFoUFtK40ThU21Rjwgmab3xydswoBHX/view?usp=drivesdk',
    category: 'Cybersecurity',
    summary: "Completed the AICTE and VOIS Tech University Engagement Program Virtual Internship on Cybersecurity with Gen AI implemented by Edunet Foundation."
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
    imageUrl: 'assets/certificates/microsoft-ai-certificate.png',
    verificationUrl: 'https://drive.google.com/file/d/1-Tj0QH2ksx0jEOFScX7qwM6aDm6kx0Cv/view?usp=drivesdk',
    category: 'AI & ML',
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
    imageUrl: 'assets/certificates/ibm-bharatcares-certificate.png',
    verificationUrl: 'https://drive.google.com/file/d/1pJ5ZBFU0sgW0EKWPeDgCWR5NpUTjqQIW/view?usp=drivesdk',
    category: 'Data Science',
    summary: 'Completed skill-based training in the field of AI Data Science & Agentic Systems under the guidance of Mr. Tushar Khandelwal.'
  }
];

const fallbackRepos = [
  {
    name: 'rakshak-connect',
    description: 'Smart Emergency Response, Citizen Safety & Assistance System in Flutter with instant SOS dispatch.',
    html_url: 'https://github.com/Gauravpatel44/rakshak-connect',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Dart'
  },
  {
    name: 'Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    description: 'Comprehensive exploratory data analysis on automobile market trends using Python, Pandas, and Seaborn.',
    html_url: 'https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Jupyter Notebook'
  },
  {
    name: 'AI-Based-Network-Intrusion-Detection-System-',
    description: 'Machine learning based network anomaly and malicious traffic classification system.',
    html_url: 'https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python'
  },
  {
    name: 'Python-Keylogger',
    description: 'Educational security audit tool demonstrating keystroke logging mechanics and defensive mitigation.',
    html_url: 'https://github.com/Gauravpatel44/Python-Keylogger',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python'
  }
];

// ==========================================================================
// 2. Material 3 Theme Switcher (Light Mode Default)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const lightIcon = document.getElementById('themeLightIcon');
  const darkIcon = document.getElementById('themeDarkIcon');

  // Retrieve saved theme or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      lightIcon?.style.setProperty('display', 'block');
      darkIcon?.style.setProperty('display', 'none');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to light mode');
    } else {
      lightIcon?.style.setProperty('display', 'none');
      darkIcon?.style.setProperty('display', 'block');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

// ==========================================================================
// 3. Navigation & Scrollspy
// ==========================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.toggle('open');
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });

  // Scrollspy
  window.addEventListener('scroll', () => {
    const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
    const scrollPosition = window.scrollY + 180;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  });
}

// ==========================================================================
// 4. Project Filtering
// ==========================================================================
function initProjects() {
  const filterChips = document.querySelectorAll('#projectFilters .filter-chip');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter') || 'All';

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'All' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 5. Project Dialog Modal
// ==========================================================================
function openProjectModal(projectId) {
  const project = featuredProjects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectDialog');
  const modalCategory = document.getElementById('dialogProjectCategory');
  const modalTitle = document.getElementById('dialogProjectTitle');
  const modalDescription = document.getElementById('dialogProjectDescription');
  const modalProblem = document.getElementById('dialogProjectProblem');
  const modalSolution = document.getElementById('dialogProjectSolution');
  const modalFeatures = document.getElementById('dialogProjectFeatures');
  const modalTechs = document.getElementById('dialogProjectTechs');
  const modalGithubLink = document.getElementById('dialogProjectGithubLink');

  if (modalCategory) modalCategory.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDescription) modalDescription.textContent = project.fullDescription || project.shortDescription;
  
  if (modalProblem) modalProblem.textContent = project.problem;
  if (modalSolution) modalSolution.textContent = project.solution;

  if (modalFeatures) {
    modalFeatures.innerHTML = project.features
      .map(
        (f) => `
      <div style="display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem;border-radius:var(--md-shape-m);background-color:var(--md-sys-color-surface-container);border:1px solid var(--md-sys-color-outline-variant);font-size:0.875rem;">
        <svg style="width:1.125rem;height:1.125rem;color:var(--md-sys-color-success);flex-shrink:0;margin-top:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </div>
    `
      )
      .join('');
  }

  if (modalTechs) {
    modalTechs.innerHTML = project.technologies
      .map((t) => `<span class="md-chip">${t}</span>`)
      .join('');
  }

  if (modalGithubLink) {
    modalGithubLink.href = project.githubUrl;
  }

  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectDialog');
  modal?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// ==========================================================================
// 6. Certificate & Resume Dialog Modals
// ==========================================================================
function openCertificateModal(certId) {
  const cert = certificationData.find((c) => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('certDialog');
  const certImage = document.getElementById('certDialogImage');
  const certType = document.getElementById('certDialogType');
  const certTitle = document.getElementById('certDialogTitle');
  const certIssuer = document.getElementById('certDialogIssuer');
  const certPartners = document.getElementById('certDialogPartners');
  const certDates = document.getElementById('certDialogDates');
  const certIdRow = document.getElementById('certDialogId');
  const certDriveLink = document.getElementById('certDialogDriveLink');

  if (certImage) {
    certImage.src = cert.imageUrl;
    certImage.alt = cert.title;
  }
  if (certType) certType.textContent = cert.certificateType;
  if (certTitle) certTitle.textContent = cert.title;
  if (certIssuer) certIssuer.textContent = cert.issuer;
  if (certPartners) certPartners.textContent = cert.partners;
  if (certDates) certDates.textContent = cert.dateRange;
  if (certIdRow) certIdRow.textContent = cert.credentialId || 'AICTE / VOIS Tech Engagement';
  if (certDriveLink) certDriveLink.href = cert.verificationUrl;

  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
  const modal = document.getElementById('certDialog');
  modal?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

function openResumeModal() {
  const modal = document.getElementById('resumeDialog');
  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  const modal = document.getElementById('resumeDialog');
  modal?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Global modal esc key handling
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeCertificateModal();
    closeResumeModal();
  }
});

// ==========================================================================
// 7. Live GitHub API Repositories Fetch
// ==========================================================================
async function loadGitHubRepositories() {
  const container = document.getElementById('githubGrid');
  if (!container) return;

  let repos = fallbackRepos;

  try {
    const res = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`, {
      headers: { Accept: 'application/vnd.github.v3+json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        repos = data;
      }
    }
  } catch (e) {
    repos = fallbackRepos;
  }

  container.innerHTML = repos
    .map(
      (repo) => `
    <div class="md-card" style="justify-content:space-between;">
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.75rem;">
          <span class="md-badge md-badge-neutral">
            <svg style="width:0.875rem;height:0.875rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
            <span>Repository</span>
          </span>
          ${repo.language ? `<span class="md-badge md-badge-primary">${repo.language}</span>` : ''}
        </div>

        <h3 class="md-title-medium" style="margin-bottom:0.375rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          ${repo.name}
        </h3>

        <p class="md-body-small" style="margin-bottom:1.25rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">
          ${repo.description || 'Open-source software repository with structured documentation.'}
        </p>
      </div>

      <div style="padding-top:0.875rem;border-top:1px solid var(--md-sys-color-outline-variant);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:0.75rem;font-size:0.8125rem;color:var(--md-sys-color-on-surface-variant);">
          <span style="display:inline-flex;align-items:center;gap:0.25rem;">
            <svg style="width:0.875rem;height:0.875rem;color:var(--md-sys-color-outline);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${repo.stargazers_count || 0}
          </span>
          <span style="display:inline-flex;align-items:center;gap:0.25rem;">
            <svg style="width:0.875rem;height:0.875rem;color:var(--md-sys-color-outline);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
            ${repo.forks_count || 0}
          </span>
        </div>

        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="md-btn md-btn-text" style="font-size:0.8125rem;padding:0.25rem 0.5rem;">
          <span>View on GitHub</span>
          <svg style="width:0.875rem;height:0.875rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  `
    )
    .join('');
}

// ==========================================================================
// 8. Clipboard Copy & Contact Form
// ==========================================================================
function initClipboardAndForm() {
  window.copyEmail = function () {
    navigator.clipboard.writeText(personalInfo.email);
    const feedback = document.querySelectorAll('.copy-email-btn');
    feedback.forEach((btn) => {
      const orig = btn.innerHTML;
      btn.innerHTML = `<svg style="width:1rem;height:1rem;color:var(--md-sys-color-success);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span style="color:var(--md-sys-color-success);font-size:0.8125rem;font-weight:600;">Copied</span>`;
      setTimeout(() => (btn.innerHTML = orig), 2000);
    });
  };

  window.copyPhone = function () {
    navigator.clipboard.writeText(personalInfo.phone);
    const feedback = document.querySelectorAll('.copy-phone-btn');
    feedback.forEach((btn) => {
      const orig = btn.innerHTML;
      btn.innerHTML = `<svg style="width:1rem;height:1rem;color:var(--md-sys-color-success);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span style="color:var(--md-sys-color-success);font-size:0.8125rem;font-weight:600;">Copied</span>`;
      setTimeout(() => (btn.innerHTML = orig), 2000);
    });
  };

  // Contact Form Mailto Handler
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('contactFormSuccess');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value || '';
    const email = document.getElementById('contactEmail')?.value || '';
    const subject = document.getElementById('contactSubject')?.value || `Message from ${name}`;
    const message = document.getElementById('contactMessage')?.value || '';

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;

    if (contactForm && formSuccess) {
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
      }, 6000);
    }
  });

  // Scroll to Top
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// ==========================================================================
// 9. Interactive 3D Cursor-Following Character Physics 
// ==========================================================================
function init3DAvatar() {
  const card = document.getElementById('hero3DCard') || document.getElementById('avatar3DBody');
  const bust = document.getElementById('hero3DBust') || document.getElementById('avatar3DPhoto');
  const glare = document.getElementById('hero3DGlare') || document.getElementById('avatar3DGlare');
  if (!card) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let targetRotateX = 0;
  let targetRotateY = 0;
  let isHovered = false;

  // Track cursor movement across the viewport
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (mouseX - centerX) / (window.innerWidth / 2);
    const deltaY = (mouseY - centerY) / (window.innerHeight / 2);

    // Natural 3D head and bust rotation
    targetRotateY = Math.max(-25, Math.min(25, deltaX * 24));
    targetRotateX = Math.max(-20, Math.min(20, -deltaY * 20));
  });

  // Touch tracking for mobile & tablet
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (touch.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (touch.clientY - centerY) / (window.innerHeight / 2);
      targetRotateY = Math.max(-22, Math.min(22, deltaX * 22));
      targetRotateX = Math.max(-18, Math.min(18, -deltaY * 18));
    }
  }, { passive: true });

  card.addEventListener('mouseenter', () => { isHovered = true; });
  card.addEventListener('mouseleave', () => { isHovered = false; });

  // 60FPS spring damping physics loop
  let idleTimer = 0;
  function updatePhysics() {
    idleTimer += 0.02;
    const idleX = Math.sin(idleTimer) * 2.5;
    const idleY = Math.cos(idleTimer * 0.75) * 2.5;

    const finalTargetX = targetRotateX + (isHovered ? 0 : idleX);
    const finalTargetY = targetRotateY + (isHovered ? 0 : idleY);

    // Spring damping
    currentRotateX += (finalTargetX - currentRotateX) * 0.08;
    currentRotateY += (finalTargetY - currentRotateY) * 0.08;

    // Apply 3D card rotation & subtle lift
    card.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(15px)`;

    // Apply parallax depth shift to inner 3D character bust
    if (bust) {
      const shiftX = (currentRotateY * 0.5).toFixed(2);
      const shiftY = (-currentRotateX * 0.5).toFixed(2);
      bust.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 30px) scale(1.03)`;
    }

    // Dynamic specular spotlight glare
    if (glare) {
      const glareX = 50 + currentRotateY * 1.5;
      const glareY = 40 - currentRotateX * 1.5;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0, 240, 192, 0.3) 0%, transparent 60%)`;
    }

    requestAnimationFrame(updatePhysics);
  }

  requestAnimationFrame(updatePhysics);
}

// ==========================================================================
// 10. Master Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjects();
  loadGitHubRepositories();
  initClipboardAndForm();
  init3DAvatar();
});

