// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeLabel();

function updateThemeLabel() {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = html.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeLabel();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Prevent placeholder href="#" links from scrolling to top
document.querySelectorAll('a[href="#"]').forEach(a =>
    a.addEventListener('click', e => e.preventDefault())
);


// ── Config Population ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    if (typeof USER_CONFIG === 'undefined') return;

    populateSimpleFields(USER_CONFIG);
    populateLists(USER_CONFIG);
});


function populateSimpleFields(cfg) {

    // Basic information
    document.querySelectorAll('[data-config]').forEach(el => {

        const key = el.dataset.config;

        if (key === 'role_university') {
            el.textContent = `${cfg.role} at ${cfg.university}`;
        }
        else if (cfg[key] !== undefined) {
            el.textContent = cfg[key];
        }

    });


    // Page title
    if (cfg.name) {
        document.title = `${cfg.name} | Academic Homepage`;
    }


    // Profile photo
    if (cfg.photo) {

        const av = document.querySelector('.image-placeholder, .hero-photo');

        if (av) {
            av.innerHTML = `
                <img
                    src="../../${cfg.photo.replace(/^\.?\//, '')}"
                    alt="${cfg.name}"
                    style="width:100%;height:100%;object-fit:cover;border-radius:inherit"
                >
            `;
        }
    }


    // Hero statistics
    if (cfg.stats?.length) {

        const stats = document.querySelectorAll('.hero-stats .stat');

        cfg.stats.forEach((stat, index) => {

            if (stats[index]) {

                const number = stats[index].querySelector('.stat-number');
                const label = stats[index].querySelector('.stat-label');

                if (number) number.textContent = stat.value;
                if (label) label.textContent = stat.label;

            }

        });
    }


    // Contact email
    if (cfg.email) {

        const contactContainers = document.querySelectorAll('.contact-content');

        contactContainers.forEach(container => {

            const paragraphs = container.querySelectorAll('p');

            paragraphs.forEach(p => {

                if (p.textContent.trim().startsWith('Email:')) {
                    p.textContent = `Email: ${cfg.email}`;
                }

            });

        });

    }
    
    // Email link
const emailLink = document.getElementById('cfg-email-link');

if (emailLink && cfg.email) {
    emailLink.href = `mailto:${cfg.email}`;
}

// Contact links
const contactLinks = document.getElementById('cfg-contact-links');

if (contactLinks && cfg.links) {
contactLinks.innerHTML = Object.entries(cfg.links)
    .filter(([key, value]) => value)
    .map(([key, value]) => {

const href = value.startsWith('assets/')
    ? `../../${value}`
    : value;

        return `
            <a href="${href}"
               class="contact-link"
               target="_blank"
               rel="noopener noreferrer">
                ${key}
            </a>
        `;
    })
    .join('');
}
}


function boldName(authors, name) {
    const names = [
        "Haitao Huang",
        "黃海濤"
    ];

    let result = authors;

    names.forEach(n => {
        result = result.replace(
            new RegExp(n, "g"),
            `<strong>${n}</strong>`
        );
    });

    return result;
}


function populateLists(cfg) {

    // ── Publications ───────────────────────────────────────────────────────

const pubList = document.getElementById('cfg-publications');
const filterBtns = document.querySelectorAll('.filter-btn');

if (pubList && cfg.publications?.length) {

    function renderPublications(category) {

        const filtered = cfg.publications.filter(
            p => p.category === category
        );

        pubList.innerHTML = filtered.map(p => `

            <article class="pub-card" data-year="${p.year}">

                <div class="pub-year">
                    ${p.year}
                </div>

                <div class="pub-content">

                    <div class="pub-header">

                        <h3 class="pub-title">
                            ${p.title}
                        </h3>

                        <div class="pub-links">
                            ${Object.entries(p.links || {}).map(([k, v]) => `
                                <a href="${v}"
                                   class="pub-link"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    ${k.toUpperCase()}
                                </a>
                            `).join('')}
                        </div>

                    </div>

                    <p class="pub-authors">
                        ${boldName(p.authors, cfg.name)}
                    </p>

                    <p class="pub-venue">
                        ${p.venue}
                    </p>

                </div>

            </article>

        `).join('');
    }


    filterBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            filterBtns.forEach(b =>
                b.classList.remove('active')
            );

            btn.classList.add('active');

            renderPublications(
                btn.dataset.category
            );

        });

    });


    renderPublications('geology');
}


    // ── Projects ───────────────────────────────────────────────────────────

    const projGrid = document.getElementById('cfg-projects');

    if (projGrid && cfg.projects?.length) {

        projGrid.innerHTML = cfg.projects.map(p => `

            <article class="project-card">

                <h3 class="project-title">
                    ${p.name}
                </h3>

                <p class="project-desc">
                    ${p.desc}
                </p>

                <div class="project-tags">
                    ${(p.tags || []).map(t => `
                        <span class="tag">
                            ${t}
                        </span>
                    `).join('')}
                </div>

                ${p.url ? `
                    <a href="${p.url}"
                       class="project-link"
                       target="_blank"
                       rel="noopener noreferrer">
                        Visit Project →
                    </a>
                ` : ''}

            </article>

        `).join('');
    }


    // ── News ────────────────────────────────────────────────────────────────

    const newsList = document.getElementById('cfg-news');

    if (newsList && cfg.news?.length) {

        newsList.innerHTML = cfg.news.map(n => `

            <div class="news-item">

                <span class="news-date">
                    ${n.date}
                </span>

                <div class="news-content">

                    <span class="news-badge">
                        ${n.badge}
                    </span>

                    <span class="news-text">
                        ${n.text}
                    </span>

                </div>

            </div>

        `).join('');
    }


    // ── Experience / Education ──────────────────────────────────────────────

    const expGrid = document.getElementById('cfg-experience');

    if (expGrid) {

        const edu = cfg.education || [];
        const exp = cfg.experience || [];

        let html = '';


        if (edu.length) {

            html += `
                <div class="exp-category">

                    <h3>Education</h3>

                    ${edu.map(e => `

                        <div class="exp-item">

                            <div class="exp-period">
                                ${e.period}
                            </div>

                            <div class="exp-details">

                                <h4>
                                    ${e.degree}
                                </h4>

                                <p>
                                    ${e.institution}
                                </p>

                            </div>

                        </div>

                    `).join('')}

                </div>
            `;
        }


        if (exp.length) {

            html += `
                <div class="exp-category">

                    <h3>Experience</h3>

                    ${exp.map(e => `

                        <div class="exp-item">

                            <div class="exp-period">
                                ${e.period}
                            </div>

                            <div class="exp-details">

                                <h4>
                                    ${e.role}
                                </h4>

                                <p>
                                    ${e.institution}
                                </p>

                            </div>

                        </div>

                    `).join('')}

                </div>
            `;
        }


        if (html) {
            expGrid.innerHTML = html;
        }

    }


    // ── Contact ─────────────────────────────────────────────────────────────

    const emailLink = document.getElementById('cfg-email-link');

    if (emailLink && cfg.email) {
        emailLink.href = `mailto:${cfg.email}`;
    }


    const contactLinks = document.getElementById('cfg-contact-links');

    if (contactLinks && cfg.links) {

        contactLinks.innerHTML = Object.entries(cfg.links)
            .filter(([key, value]) => value)
            .map(([key, value]) => {

const href = value.startsWith('assets/')
    ? `../../${value}`
    : value;

                return `
                    <a href="${href}"
                       class="contact-link"
                       target="_blank"
                       rel="noopener noreferrer">
                        ${key}
                    </a>
                `;

            })
            .join('');
    }

}