export const renderAbout = (d) => `
  <h2>${d.title}</h2>
  <p>${d.description}</p>
`;
export const renderWhyHire = (data) => {
    let cardsHtml = "";
    for (const c of data.uspCards) {
        cardsHtml += `
            <div class="usp-card">
                <div class="usp-icon">${c.icon}</div>
                <h3>${c.title}</h3>
                <p>${c.description}</p>
            </div>`;
    }
    return `
        <h2>${data.title}</h2>
        <p class="why-hire-subtitle">${data.subtitle}</p>
        <div class="usp-grid">
            ${cardsHtml}
        </div>
    `;
};
export const renderProjects = (d) => {
    let projectsHtml = "";
    for (const p of d.projects) {
        projectsHtml += `
        <div class="project">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.link}">${p.linkText}</a>
        </div>`;
    }
    return `
  <h2>${d.title}</h2>
  <div class="project-grid">
    ${projectsHtml}
  </div>
`;
};
export const renderSkills = (d) => {
    let skillsHtml = "";
    for (const s of d.skills) {
        skillsHtml += `<li>${s}</li>`;
    }
    return `
  <h2>${d.title}</h2>
  <ul>
    ${skillsHtml}
  </ul>
`;
};
export const renderClients = (d) => {
    let clientsHtml = "";
    for (const c of d.clients) {
        clientsHtml += `
        <div class="client">
          <h3>${c.title}</h3>
          <p>${c.description}</p>
          <a href="${c.link}">${c.linkText}</a>
        </div>`;
    }
    return `
  <h2>${d.title}</h2>
  <div class="client-grid">
    ${clientsHtml}
  </div>
`;
};
