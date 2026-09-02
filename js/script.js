/**
 * Gaurav Patel — Developer Portfolio (Vanilla JavaScript)
 * Fully Dependency-Free Implementation
 */

// ==========================================
// 1. Core Portfolio Data Store
// ==========================================
const personalInfo = {
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

const featuredProjects = [
  {
    id: 'rakshak-connect',
    title: 'Rakshak Connect',
    category: 'Mobile App',
    badge: 'Open Source Spotlight',
    shortDescription: 'Smart Emergency Response, Citizen Safety & Assistance System in Flutter designed for rapid emergency SOS dispatch and safety alarms.',
    fullDescription: 'Rakshak Connect is an open-source mobile safety application engineered in Flutter and Dart to address critical distress response gaps. The application provides immediate panic-triggered SMS broadcasts with GPS pinpointing, background sensor listeners, hardware siren triggering, and local emergency helpline directories.',
    technologies: ['Flutter', 'Dart', 'Android SDK', 'Mobile UI', 'SMS Gateway', 'Geolocation'],
    githubUrl: 'https://github.com/Gauravpatel44/rakshak-connect',
    problem: 'During distress or personal safety emergencies, individuals face delayed communication, panic disconnections, or lack of cellular data to broadcast their location coordinates.',
    solution: 'Engineered an ultra-low latency, one-tap mobile safety application that dispatches immediate SMS alerts with live GPS coordinates, triggers emergency hardware sirens, and accesses offline safety hotlines without requiring an active internet connection.',
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
    problem: 'Automobile valuation and resale trends involve complex non-linear depreciation factors across fuel types, age, odometer metrics, and transmission systems.',
    solution: 'Developed an end-to-end Python exploratory data analysis pipeline that cleanses raw automotive records, executes statistical correlations, and renders high-density visualization matrices.',
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
    problem: 'Manual inspection of high-volume network telemetry packets is incapable of detecting subtle multi-stage scanning attacks and distributed anomalies in real time.',
    solution: 'Designed a machine-learning classification model trained on vectorized packet feature vectors to automatically classify benign traffic vs suspicious network attacks.',
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
    problem: 'Endpoint operating systems can be vulnerable to background event hook listeners that silently harvest sensitive credentials.',
    solution: 'Constructed an educational proof-of-concept audit tool that analyzes OS event dispatch hooks and formulates defensive hardening countermeasures.',
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
    summary: 'Completed Skill Based Training in the field of AI Data Science & Agentic Systems (Total Weeks: 2) under the guidance of Mr. Tushar Khandelwal.'
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

// ==========================================
// 2. Interactive Canvas Background
// ==========================================
function initInteractiveCanvas() {
  const canvas = document.getElementById('interactiveCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const gridSize = 36;
  let cols = Math.ceil(width / gridSize);
  let rows = Math.ceil(height / gridSize);

  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovering: false,
    radius: 180,
  };

  const activeTiles = new Map();
  const colors = ['#00e5ff', '#00f0aa', '#38bdf8', '#22d3ee', '#818cf8'];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    cols = Math.ceil(width / gridSize);
    rows = Math.ceil(height / gridSize);
  };

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isHovering = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.isHovering = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.isHovering = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.isHovering = false;
  });

  window.addEventListener('click', (e) => {
    const clickCol = Math.floor(e.clientX / gridSize);
    const clickRow = Math.floor(e.clientY / gridSize);
    const shockRadius = 4;

    for (let r = -shockRadius; r <= shockRadius; r++) {
      for (let c = -shockRadius; c <= shockRadius; c++) {
        const dist = Math.sqrt(c * c + r * r);
        if (dist <= shockRadius) {
          const targetC = clickCol + c;
          const targetR = clickRow + r;
          if (targetC >= 0 && targetC < cols && targetR >= 0 && targetR < rows) {
            const key = `${targetC},${targetR}`;
            const delay = dist * 40;
            setTimeout(() => {
              const color = colors[Math.floor(Math.random() * colors.length)];
              activeTiles.set(key, {
                col: targetC,
                row: targetR,
                scale: 0.8,
                targetScale: 1.15 - dist * 0.05,
                alpha: 0.9 - dist * 0.12,
                targetAlpha: 0,
                color,
                crosshair: 1,
              });
            }, delay);
          }
        }
      }
    }
  });

  let lastIdlePop = Date.now();

  const render = () => {
    mouse.x += (mouse.targetX - mouse.x) * 0.2;
    mouse.y += (mouse.targetY - mouse.y) * 0.2;

    ctx.clearRect(0, 0, width, height);

    // Base Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Cursor Activation
    if (mouse.isHovering) {
      const mouseCol = Math.floor(mouse.x / gridSize);
      const mouseRow = Math.floor(mouse.y / gridSize);
      const effectRadius = 3;

      for (let r = -effectRadius; r <= effectRadius; r++) {
        for (let c = -effectRadius; c <= effectRadius; c++) {
          const curCol = mouseCol + c;
          const curRow = mouseRow + r;
          if (curCol >= 0 && curCol < cols && curRow >= 0 && curRow < rows) {
            const tileCenterX = curCol * gridSize + gridSize / 2;
            const tileCenterY = curRow * gridSize + gridSize / 2;
            const dx = mouse.x - tileCenterX;
            const dy = mouse.y - tileCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const proximity = 1 - dist / mouse.radius;
              const key = `${curCol},${curRow}`;
              const existing = activeTiles.get(key);

              if (existing) {
                existing.targetScale = 0.95 + proximity * 0.25;
                existing.targetAlpha = 0.2 + proximity * 0.65;
                existing.crosshair = Math.max(existing.crosshair, proximity);
              } else {
                const color = colors[(curCol + curRow) % colors.length];
                activeTiles.set(key, {
                  col: curCol,
                  row: curRow,
                  scale: 0.85,
                  targetScale: 0.95 + proximity * 0.25,
                  alpha: 0.1,
                  targetAlpha: 0.2 + proximity * 0.65,
                  color,
                  crosshair: proximity,
                });
              }
            }
          }
        }
      }
    }

    // Idle Ambient Pulse
    if (!mouse.isHovering && Date.now() - lastIdlePop > 1200) {
      lastIdlePop = Date.now();
      const randCol = Math.floor(Math.random() * cols);
      const randRow = Math.floor(Math.random() * rows);
      const key = `${randCol},${randRow}`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      activeTiles.set(key, {
        col: randCol,
        row: randRow,
        scale: 0.8,
        targetScale: 1.1,
        alpha: 0.6,
        targetAlpha: 0,
        color,
        crosshair: 0.8,
      });
    }

    // Render Tiles
    activeTiles.forEach((tile, key) => {
      tile.scale += (tile.targetScale - tile.scale) * 0.15;
      tile.alpha += (tile.targetAlpha - tile.alpha) * 0.1;
      tile.crosshair *= 0.95;

      if (!mouse.isHovering) {
        tile.targetAlpha = 0;
      }

      if (tile.alpha > 0.01) {
        const x = tile.col * gridSize;
        const y = tile.row * gridSize;
        const w = gridSize;
        const h = gridSize;

        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);
        ctx.scale(tile.scale, tile.scale);
        ctx.translate(-(x + w / 2), -(y + h / 2));

        // Tile Glow Box
        ctx.fillStyle = tile.color;
        ctx.globalAlpha = tile.alpha * 0.18;
        ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

        // Tile Border Highlight
        ctx.strokeStyle = tile.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = tile.alpha * 0.8;
        ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);

        // Corner Reticles
        const cornerLen = 5;
        ctx.lineWidth = 2;
        ctx.globalAlpha = tile.alpha;
        ctx.beginPath();
        ctx.moveTo(x, y + cornerLen);
        ctx.lineTo(x, y);
        ctx.lineTo(x + cornerLen, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + w - cornerLen, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + cornerLen);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + h - cornerLen);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x + cornerLen, y + h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + w - cornerLen, y + h);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x + w, y + h - cornerLen);
        ctx.stroke();

        // Crosshair '+'
        if (tile.crosshair > 0.1) {
          ctx.strokeStyle = tile.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = tile.crosshair * 0.9;
          const chSize = 4;
          ctx.beginPath();
          ctx.moveTo(x - chSize, y);
          ctx.lineTo(x + chSize, y);
          ctx.moveTo(x, y - chSize);
          ctx.lineTo(x, y + chSize);
          ctx.stroke();
        }

        ctx.restore();
      } else {
        activeTiles.delete(key);
      }
    });

    requestAnimationFrame(render);
  };

  render();
}

// ==========================================
// 3. Navbar, Scrollspy & Mobile Menu
// ==========================================
function initNavigation() {
  const headerNav = document.getElementById('siteNav');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerNav?.classList.add('scrolled');
    } else {
      headerNav?.classList.remove('scrolled');
    }

    // Scrollspy for active nav link
    const sections = ['about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
    const scrollPosition = window.scrollY + 220;

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

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.toggle('open');
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });
}

// ==========================================
// 4. Mobile Carousel Helper Setup
// ==========================================
function setupCarousel(sliderId, prevBtnId, nextBtnId, dotsContainerId, swipeTextId) {
  const slider = document.getElementById(sliderId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const dotsContainer = document.getElementById(dotsContainerId);
  const swipeText = document.getElementById(swipeTextId);

  if (!slider) return;

  const updateUI = () => {
    const card = slider.querySelector('.carousel-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    const totalCards = slider.querySelectorAll('.carousel-card').length;
    const currentIndex = Math.max(0, Math.min(Math.round(slider.scrollLeft / cardWidth), totalCards - 1));

    if (swipeText) {
      swipeText.textContent = `(${currentIndex + 1} of ${totalCards})`;
    }

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= totalCards - 1;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  };

  slider.addEventListener('scroll', updateUI, { passive: true });

  prevBtn?.addEventListener('click', () => {
    const card = slider.querySelector('.carousel-card');
    if (card) {
      slider.scrollBy({ left: -(card.offsetWidth + 14), behavior: 'smooth' });
    }
  });

  nextBtn?.addEventListener('click', () => {
    const card = slider.querySelector('.carousel-card');
    if (card) {
      slider.scrollBy({ left: card.offsetWidth + 14, behavior: 'smooth' });
    }
  });

  // Generate Pagination Dots
  if (dotsContainer) {
    const cards = slider.querySelectorAll('.carousel-card');
    dotsContainer.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        const card = slider.querySelector('.carousel-card');
        if (card) {
          slider.scrollTo({ left: i * (card.offsetWidth + 14), behavior: 'smooth' });
        }
      });
      dotsContainer.appendChild(dot);
    });
  }

  updateUI();
}

// ==========================================
// 5. Projects Filtering & Modal
// ==========================================
function initProjects() {
  const filterBtns = document.querySelectorAll('#projectFilters .filter-btn');
  const desktopCards = document.querySelectorAll('#projectsDesktopGrid .project-card');
  const mobileCards = document.querySelectorAll('#projectsMobileSlider .project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'All';

      desktopCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'All' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      mobileCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'All' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Reset slider scroll position and rebuild dots
      const slider = document.getElementById('projectsMobileSlider');
      if (slider) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }
      setupCarousel(
        'projectsMobileSlider',
        'projectsPrevBtn',
        'projectsNextBtn',
        'projectsDots',
        'projectsSwipeCount'
      );
    });
  });

  setupCarousel(
    'projectsMobileSlider',
    'projectsPrevBtn',
    'projectsNextBtn',
    'projectsDots',
    'projectsSwipeCount'
  );
}

// ==========================================
// 6. Project Modal Trigger Logic
// ==========================================
function openProjectModal(projectId) {
  const project = featuredProjects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDescription = document.getElementById('modalProjectDescription');
  const modalProblem = document.getElementById('modalProjectProblem');
  const modalSolution = document.getElementById('modalProjectSolution');
  const modalFeatures = document.getElementById('modalProjectFeatures');
  const modalTechs = document.getElementById('modalProjectTechs');
  const modalGithubLink = document.getElementById('modalProjectGithubLink');

  if (modalCategory) modalCategory.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDescription) modalDescription.textContent = project.fullDescription || project.shortDescription;
  
  if (modalProblem) modalProblem.textContent = project.problem || 'Distress situations requiring rapid, reliable offline notification.';
  if (modalSolution) modalSolution.textContent = project.solution || 'Practical engineering approach with low latency response architecture.';

  if (modalFeatures) {
    modalFeatures.innerHTML = project.features
      .map(
        (f) => `
      <div style="display:flex;align-items:flex-start;gap:0.5rem;padding:0.625rem;border-radius:0.75rem;background:rgba(4,8,18,0.8);border:1px solid rgba(255,255,255,0.1);font-family:var(--font-mono);font-size:0.75rem;color:#f8fafc;">
        <span style="color:var(--electric-emerald);margin-top:2px;">✔</span>
        <span>${f}</span>
      </div>
    `
      )
      .join('');
  }

  if (modalTechs) {
    modalTechs.innerHTML = project.technologies
      .map((t) => `<span class="tech-chip">${t}</span>`)
      .join('');
  }

  if (modalGithubLink) {
    modalGithubLink.href = project.githubUrl;
  }

  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// ==========================================
// 7. Certificate Modal Trigger Logic
// ==========================================
function openCertificateModal(certId) {
  const cert = certificationData.find((c) => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById('certificateModal');
  const certImage = document.getElementById('certModalImage');
  const certType = document.getElementById('certModalType');
  const certTitle = document.getElementById('certModalTitle');
  const certIssuer = document.getElementById('certModalIssuer');
  const certPartners = document.getElementById('certModalPartners');
  const certDates = document.getElementById('certModalDates');
  const certIdRow = document.getElementById('certModalId');
  const certDriveLink = document.getElementById('certModalDriveLink');

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
  const modal = document.getElementById('certificateModal');
  modal?.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// Global modal esc key handling
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeCertificateModal();
  }
});

// ==========================================
// 8. GitHub API Live Repositories Fetch
// ==========================================
async function loadGitHubRepositories() {
  const desktopContainer = document.getElementById('githubDesktopGrid');
  const mobileSlider = document.getElementById('githubMobileSlider');

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

  const renderCard = (repo, isMobile = false) => `
    <div class="${isMobile ? 'carousel-card' : ''} bento-card" style="padding:1.25rem;border:2px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding-bottom:0.625rem;border-bottom:1px solid rgba(255,255,255,0.15);margin-bottom:0.75rem;">
          <div style="display:flex;align-items:center;gap:0.375rem;font-family:var(--font-mono);font-size:0.75rem;color:var(--electric-cyan);font-weight:bold;">
            <span>📁</span>
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:140px;">${personalInfo.githubUsername}</span>
          </div>
          ${repo.language ? `<span class="badge-level badge-proficient">${repo.language}</span>` : ''}
        </div>

        <h3 style="font-size:1rem;font-weight:900;color:#ffffff;margin-bottom:0.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
          ${repo.name}
        </h3>

        <p style="font-size:0.75rem;color:var(--text-secondary);line-height:1.5;margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">
          ${repo.description || 'Open source software repository with clean architecture.'}
        </p>
      </div>

      <div style="padding-top:0.75rem;border-top:1px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:0.75rem;font-size:0.75rem;font-family:var(--font-mono);color:var(--text-muted);">
          <span>⭐ ${repo.stargazers_count || 0}</span>
          <span>🍴 ${repo.forks_count || 0}</span>
        </div>

        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-electric" style="padding:0.375rem 0.75rem;font-size:0.75rem;">
          <span>View</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  `;

  if (desktopContainer) {
    desktopContainer.innerHTML = repos.map((r) => renderCard(r, false)).join('');
  }

  if (mobileSlider) {
    mobileSlider.innerHTML = repos.map((r) => renderCard(r, true)).join('');
    setupCarousel(
      'githubMobileSlider',
      'githubPrevBtn',
      'githubNextBtn',
      'githubDots',
      'githubSwipeCount'
    );
  }
}

// ==========================================
// 9. Contact Form & Clipboard Copy
// ==========================================
function initContactAndClipboard() {
  // Copy Email Function
  window.copyEmail = function () {
    navigator.clipboard.writeText(personalInfo.email);
    const feedback = document.querySelectorAll('.copy-email-btn');
    feedback.forEach((btn) => {
      const orig = btn.innerHTML;
      btn.innerHTML = `<span style="color:var(--electric-emerald);font-weight:bold;">✔ Copied</span>`;
      setTimeout(() => (btn.innerHTML = orig), 2000);
    });
  };

  // Copy Phone Function
  window.copyPhone = function () {
    navigator.clipboard.writeText(personalInfo.phone);
    const feedback = document.querySelectorAll('.copy-phone-btn');
    feedback.forEach((btn) => {
      const orig = btn.innerHTML;
      btn.innerHTML = `<span style="color:var(--electric-emerald);font-weight:bold;">✔ Copied</span>`;
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

// ==========================================
// 10. Master Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initInteractiveCanvas();
  initNavigation();
  
  // Set up all carousels
  setupCarousel('skillsMobileSlider', 'skillsPrevBtn', 'skillsNextBtn', 'skillsDots', 'skillsSwipeCount');
  setupCarousel('experienceMobileSlider', 'expPrevBtn', 'expNextBtn', 'expDots', 'expSwipeCount');
  setupCarousel('certMobileSlider', 'certPrevBtn', 'certNextBtn', 'certDots', 'certSwipeCount');

  initProjects();
  loadGitHubRepositories();
  initContactAndClipboard();
});
