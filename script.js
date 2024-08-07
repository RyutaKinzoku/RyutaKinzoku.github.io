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
    { 
        name: "Concasa's AI-Powered Real Estate Chatbot", 
        description: "Erica, an advanced chatbot designed to assist potential homebuyers at Concasa. Leveraging Python, Flask, and cutting-edge AI technologies such as GPT-3 and GPT-4, Erica provides intelligent and informative responses to customer inquiries. The chatbot effectively integrates with multiple platforms through APIs, including Meta's Graph API, Gmail API, and HubSpot API. Employed Agile methodologies with Scrum and Jira to optimize development, planning, and quality assurance.",
        links: [
            {text: "Press Release", url: "https://www.larepublica.net/noticia/talento-tico-desarrolla-asistente-inmobiliaria-con-base-en-inteligencia-artificial"},
            {text: "Live Demo WhatsApp", url: "https://wa.me/50688482272"},
            {text: "Live Demo Facebook Messenger", url: "https://www.facebook.com/concasa?locale=es_LA"}
        ]
    },
    { 
        name: "Game Jam+ Costa Rica 2022 - A Costa Rican Horror Story", 
        description: "A 2D survival horror game as part of the Memento Factory team. Leveraging Unity and C#, helped create a suspenseful atmosphere based on Costa Rican folklore. Focused on puzzle-solving and resource management gameplay within a labyrinthine environment.",
        links: [
            {text: "What is Game Jam+?", url: "https://www.cidev-cr.com/gamejamplus22/"},
            {text: "Memento Factory Team", url: "https://www.youtube.com/watch?v=0S0HuY0y4SQ&t=118s"},
            {text: "itch.io to download", url: "https://indonirth.itch.io/a-costa-rican-horror-story"}
        ]
    },
    
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