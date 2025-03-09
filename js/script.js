// Function to fetch JSON data
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to populate About section
async function populateAbout() {
    const data = await fetchData('data/about.json');
    if (!data) return;

    const aboutSection = document.getElementById('about');
    aboutSection.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `;
}

// Function to populate Why Hire section
async function populateWhyHire() {
    const data = await fetchData('data/why_hire.json');
    if (!data) return;

    const whyHireSection = document.getElementById('why-hire');
    const uspCards = data.uspCards.map(card => `
        <div class="usp-card">
            <div class="usp-icon">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');

    whyHireSection.innerHTML = `
        <h2>${data.title}</h2>
        <p style="font-size: 1.2em; font-weight: 700; color: #006666; text-align: center; margin-bottom: 20px;">
            ${data.subtitle}
        </p>
        <div class="usp-grid">
            ${uspCards}
        </div>
    `;
}

// Function to populate Projects section
async function populateProjects() {
    const data = await fetchData('data/projects.json');
    if (!data) return;

    const projectsSection = document.getElementById('projects');
    const projectItems = data.projects.map(project => `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">${project.linkText}</a>
        </div>
    `).join('');

    projectsSection.innerHTML = `
        <h2>${data.title}</h2>
        <div class="project-grid">
            ${projectItems}
        </div>
    `;
}

// Function to populate Skills section
async function populateSkills() {
    const data = await fetchData('data/skills.json');
    if (!data) return;

    const skillsSection = document.getElementById('skills');
    const skillsList = data.skills.map(skill => `
        <li>${skill}</li>
    `).join('');

    skillsSection.innerHTML = `
        <h2>${data.title}</h2>
        <ul>
            ${skillsList}
        </ul>
    `;
}

// Function to initialize all sections
async function initializePage() {
    await Promise.all([
        populateAbout(),
        populateWhyHire(),
        populateProjects(),
        populateSkills()
    ]);

    // After content is loaded, initialize the scroll observer
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
}

// Initialize the page on load
document.addEventListener('DOMContentLoaded', initializePage);