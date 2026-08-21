/**
 * Deepasri Selladurai - Main Application Logic
 * Modular DOM Rendering, Event Handling, Filters, Lightbox, and Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Render Dynamic Components from portfolioData
    renderPipeline();
    renderAboutHighlights();
    renderSkills();
    renderAchievements();
    renderBadges();
    renderExperience();
    renderProjects();
    renderCertifications();
    renderEducation();

    // 3. Initialize Interactive Features
    initTypewriter();
    initNavbarScroll();
    initProjectFiltering();
    initLightbox();
    initContactActions();
    initScrollAnimations();
});

/* ==========================================================================
   THEME MANAGEMENT (Dark / Light)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('portfolio_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'dark'); // Default dark

    htmlEl.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio_theme', newTheme);
            updateThemeIcon(newTheme);
            showToast(`Switched to ${newTheme} mode`);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
        if (theme === 'light') {
            icon.className = 'bx bx-sun';
            themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        } else {
            icon.className = 'bx bx-moon';
            themeToggle.setAttribute('aria-label', 'Switch to light theme');
        }
    }
}

/* ==========================================================================
   NAVIGATION & SCROLL
   ========================================================================== */
function initNavbarScroll() {
    const header = document.querySelector('.header');
    const menuBtn = document.getElementById('hamburger-btn');
    const navbarNav = document.getElementById('navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');

    // Toggle Mobile Navigation
    if (menuBtn && navbarNav) {
        menuBtn.addEventListener('click', () => {
            const isActive = navbarNav.classList.toggle('active');
            menuBtn.innerHTML = isActive ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
            menuBtn.setAttribute('aria-expanded', isActive);
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarNav.classList.remove('active');
                menuBtn.innerHTML = "<i class='bx bx-menu'></i>";
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll listener for sticky header & Back to top button
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (header) {
            header.classList.toggle('scrolled', scrollY > 60);
        }

        if (backToTop) {
            backToTop.style.opacity = scrollY > 400 ? '1' : '0';
            backToTop.style.pointerEvents = scrollY > 400 ? 'auto' : 'none';
        }

        // Active link spy
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(sec => {
            const top = scrollY;
            const offset = sec.offsetTop - 140;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ==========================================================================
   HERO TYPEWRITER
   ========================================================================== */
function initTypewriter() {
    const roleTarget = document.querySelector('.role-typing');
    if (!roleTarget) return;

    const roles = portfolioData?.personal?.roles || [
        "Python Developer",
        "IoT Developer",
        "AI/ML Enthusiast",
        "Robotics & STEM Educator",
        "Software Developer"
    ];

    if (typeof Typed === 'function') {
        new Typed('.role-typing', {
            strings: roles,
            typeSpeed: 75,
            backSpeed: 40,
            backDelay: 1400,
            loop: true,
            showCursor: false
        });
    } else {
        // Native fallback typewriter
        let roleIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIdx];
            if (isDeleting) {
                roleTarget.textContent = currentRole.substring(0, charIdx - 1);
                charIdx--;
            } else {
                roleTarget.textContent = currentRole.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIdx === currentRole.length) {
                typeSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
                typeSpeed = 400;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }
}

/* ==========================================================================
   RENDER TECHNICAL PIPELINE (Python -> IoT -> ESP32 -> Sensors -> Cloud -> App)
   ========================================================================== */
function renderPipeline() {
    const container = document.getElementById('pipeline-flow-container');
    if (!container || !portfolioData?.techPipeline) return;

    container.innerHTML = portfolioData.techPipeline.map((node) => `
        <div class="pipeline-node" id="${node.id}" tabindex="0">
            <span class="pipeline-node-step">STEP ${node.step}</span>
            <div class="pipeline-node-icon">
                <i class='bx ${node.icon}'></i>
            </div>
            <h4 class="pipeline-node-title">${node.title}</h4>
            <p class="pipeline-node-subtitle">${node.subtitle}</p>
            <span class="pipeline-node-badge">${node.badge}</span>
        </div>
    `).join('');
}

/* ==========================================================================
   RENDER ABOUT HIGHLIGHTS
   ========================================================================== */
function renderAboutHighlights() {
    const container = document.getElementById('about-highlights-container');
    if (!container || !portfolioData?.aboutHighlights) return;

    container.innerHTML = portfolioData.aboutHighlights.map(item => `
        <div class="highlight-card glass-panel">
            <div class="highlight-icon">
                <i class='bx ${item.icon}'></i>
            </div>
            <div class="highlight-text">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   RENDER SKILLS SECTION (Dominant Python & IoT)
   ========================================================================== */
function renderSkills() {
    const container = document.getElementById('skills-grid-container');
    if (!container || !portfolioData?.skillCategories) return;

    container.innerHTML = portfolioData.skillCategories.map(cat => {
        const isPython = cat.id === 'python';
        const isIoT = cat.id === 'iot';
        const featuredClass = (isPython || isIoT) ? 'featured-skill' : '';
        const themeClass = isIoT ? 'iot-theme' : '';

        return `
            <div class="skill-card glass-panel ${featuredClass} ${themeClass}">
                ${(isPython || isIoT) ? `<span class="skill-card-badge">Core Specialization</span>` : ''}
                <div class="skill-header">
                    <div class="skill-icon">
                        <i class='bx ${cat.icon}'></i>
                    </div>
                    <div>
                        <h3 class="skill-title">${cat.name}</h3>
                    </div>
                </div>
                <p class="skill-desc">${cat.description}</p>
                <div class="skill-pill-wrap">
                    ${cat.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

/* ==========================================================================
   RENDER ACHIEVEMENTS & BADGES
   ========================================================================== */
function renderAchievements() {
    const container = document.getElementById('achievements-grid-container');
    if (!container || !portfolioData?.achievements?.items) return;

    container.innerHTML = portfolioData.achievements.items.map(item => `
        <div class="achievement-card glass-panel">
            <div class="platform-logo-wrap">
                <img src="${item.icon}" alt="${item.platform} logo" loading="lazy">
            </div>
            <h3 class="achievement-platform">${item.platform}</h3>
            <span class="achievement-rank-pill">${item.rank}</span>
            <div class="stat-rows">
                ${item.stats.map(s => `
                    <div class="stat-row">
                        <span class="stat-row-label">${s.label}</span>
                        <span class="stat-row-val">${s.value}</span>
                    </div>
                `).join('')}
            </div>
            <a href="${item.profileUrl}" target="_blank" rel="noopener noreferrer" class="achievement-link">
                View Profile <i class='bx bx-right-arrow-alt'></i>
            </a>
        </div>
    `).join('');
}

function renderBadges() {
    const container = document.getElementById('badges-gallery-container');
    if (!container || !portfolioData?.achievements?.badges) return;

    container.innerHTML = portfolioData.achievements.badges.map(b => `
        <div class="badge-card" title="${b.title}">
            <img src="${b.image}" alt="${b.title}" loading="lazy">
            <span class="badge-card-name">${b.platform}</span>
        </div>
    `).join('');
}

/* ==========================================================================
   RENDER EXPERIENCE (Latest First)
   ========================================================================== */
function renderExperience() {
    const container = document.getElementById('experience-timeline-container');
    if (!container || !portfolioData?.experience) return;

    container.innerHTML = portfolioData.experience.map((exp, idx) => {
        const isLatest = idx === 0;

        return `
            <div class="exp-item">
                <div class="exp-marker"></div>
                <div class="exp-content glass-panel">
                    <div class="exp-top-bar">
                        <span class="exp-badge-pill ${isLatest ? 'latest' : ''}">${exp.badge || exp.type}</span>
                        <span class="exp-period"><i class='bx bx-calendar'></i> ${exp.period}</span>
                    </div>
                    <h3 class="exp-role">${exp.role}</h3>
                    <div class="exp-org">
                        <i class='bx bx-building'></i> ${exp.organization}
                        ${exp.location ? `<span style="font-size:0.85rem; color:var(--text-muted); font-weight:normal;">• ${exp.location}</span>` : ''}
                    </div>
                    <p class="exp-summary">${exp.summary}</p>
                    <div class="exp-bullets">
                        ${exp.bullets.map(bullet => `
                            <div class="exp-bullet-item">
                                <i class='bx bx-check-circle'></i>
                                <span>${bullet}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="exp-tech-row">
                        ${exp.tech.map(t => `<span class="exp-tech-tag">${t}</span>`).join('')}
                        ${exp.certificateImage ? `
                            <button class="btn btn-secondary exp-cert-btn" onclick="openLightbox('${exp.certificateImage}', '${exp.role} - ${exp.organization}')">
                                <i class='bx bx-award'></i> View Certificate
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* ==========================================================================
   RENDER PROJECTS & CATEGORY FILTERING
   ========================================================================== */
function renderProjects(filter = 'All') {
    const container = document.getElementById('projects-grid-container');
    if (!container || !portfolioData?.projects) return;

    const filtered = filter === 'All' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category.includes(filter));

    container.innerHTML = filtered.map(proj => `
        <div class="project-card glass-panel" data-category="${proj.category.join(' ')}">
            <div class="project-banner">
                <i class='bx ${proj.icon || "bx-code-alt"} project-banner-icon'></i>
                <span class="project-category-badge">${proj.category[0]}</span>
            </div>
            <div class="project-body">
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-description">${proj.description}</p>
                ${proj.highlights ? `<div class="project-highlights-tag"><i class='bx bx-star'></i> ${proj.highlights}</div>` : ''}
                <div class="project-tech-stack">
                    ${proj.technologies.map(t => `<span class="project-tech-pill">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    ${proj.github ? `
                        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                            <i class='bx bxl-github'></i> Code Repository
                        </a>
                    ` : ''}
                    ${proj.demo ? `
                        <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="project-link-btn" style="color:var(--secondary)">
                            <i class='bx bx-link-external'></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function initProjectFiltering() {
    const filterContainer = document.getElementById('project-filter-bar');
    if (!filterContainer || !portfolioData?.projects) return;

    const categories = ['All', 'Python', 'IoT', 'AI/ML', 'Robotics', 'Web'];

    // Render filter buttons with real-time counts
    filterContainer.innerHTML = categories.map(cat => {
        const count = cat === 'All' 
            ? portfolioData.projects.length 
            : portfolioData.projects.filter(p => p.category.includes(cat)).length;

        return `
            <button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">
                ${cat} <span class="filter-count">${count}</span>
            </button>
        `;
    }).join('');

    // Bind filter clicks
    filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');
        renderProjects(filterVal);
    });
}

/* ==========================================================================
   RENDER CERTIFICATIONS GALLERY
   ========================================================================== */
function renderCertifications() {
    const container = document.getElementById('certifications-gallery-container');
    if (!container || !portfolioData?.certifications) return;

    container.innerHTML = portfolioData.certifications.map(cert => `
        <div class="cert-card glass-panel" onclick="openLightbox('${cert.image}', '${cert.title} - ${cert.issuer}')" tabindex="0" role="button" aria-label="View ${cert.title} certificate">
            <div class="cert-preview-box">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                <div class="cert-overlay-hover">
                    <span class="btn btn-primary" style="font-size:0.85rem; padding:0.5rem 1rem;">
                        <i class='bx bx-zoom-in'></i> View Credential
                    </span>
                </div>
            </div>
            <span class="cert-issuer">${cert.issuer}</span>
            <h4 class="cert-name">${cert.title}</h4>
            <div class="cert-verification-tag">
                <i class='bx bx-badge-check'></i> ${cert.verification}
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   RENDER EDUCATION
   ========================================================================== */
function renderEducation() {
    const container = document.getElementById('education-timeline-container');
    if (!container || !portfolioData?.education) return;

    container.innerHTML = portfolioData.education.map(edu => `
        <div class="edu-item">
            <div class="edu-marker"></div>
            <div class="edu-card glass-panel">
                <span class="edu-period-badge">${edu.period} • ${edu.badge}</span>
                <h3 class="edu-degree">${edu.degree}</h3>
                <h4 class="edu-institution"><i class='bx bx-map-pin'></i> ${edu.institution}</h4>
                <div class="edu-status">${edu.status}</div>
                ${edu.details ? `<p style="font-size:0.9rem; color:var(--text-muted);">${edu.details}</p>` : ''}
                ${edu.academicHighlights ? `
                    <div class="edu-highlights-list">
                        ${edu.academicHighlights.map(h => `
                            <div class="edu-highlight-point">
                                <i class='bx bx-award'></i>
                                <span>${h}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   ACCESSIBLE CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close-btn');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', closeLightbox);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imageSrc, titleText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalTitle = document.getElementById('lightbox-title');
    const downloadBtn = document.getElementById('lightbox-download-link');

    if (!modal || !modalImg) return;

    modalImg.src = imageSrc;
    modalImg.alt = titleText;
    if (modalTitle) modalTitle.textContent = titleText;
    if (downloadBtn) {
        downloadBtn.href = imageSrc;
        downloadBtn.download = imageSrc.split('/').pop() || 'certificate.jpg';
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/* ==========================================================================
   CONTACT ACTIONS & CLIPBOARD TOAST
   ========================================================================== */
function initContactActions() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyPhoneBtn = document.getElementById('copy-phone-btn');
    const contactForm = document.getElementById('contact-form');

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = portfolioData.personal.email;
            navigator.clipboard.writeText(email).then(() => {
                showToast("Email address copied to clipboard!");
            });
        });
    }

    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', () => {
            const phone = portfolioData.personal.phone;
            navigator.clipboard.writeText(phone).then(() => {
                showToast("Phone number copied to clipboard!");
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name')?.value;
            const email = document.getElementById('form-email')?.value;
            const subject = document.getElementById('form-subject')?.value;
            const message = document.getElementById('form-message')?.value;

            // Generate direct mailto link with prefilled fields
            const mailtoUri = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Deepasri,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.location.href = mailtoUri;

            showToast("Opening your email client to send message...");
            contactForm.reset();
        });
    }
}

function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class='bx bx-check-circle' style='color:var(--secondary); font-size:1.2rem;'></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

/* ==========================================================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
