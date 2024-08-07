// script.js

// Smooth scrolling for navigation links (only for hash links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic project loading
const projects = [
    { name: "Project 1", description: "Description of project 1." },
    { name: "Project 2", description: "Description of project 2." },
    // Add more projects here
];

function loadProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.innerHTML = '<h2>Projects</h2>'; // Clear existing content

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;
            projectsSection.appendChild(projectElement);
        });
    }
}

// Call loadProjects when the page loads
window.addEventListener('load', loadProjects);