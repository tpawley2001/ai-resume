/**
 * Main JavaScript for AI Resume Website
 * Handles chat functionality, section navigation, and AI responses
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeChat();
    renderSkills();
    renderExperience();
    renderProjects();
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            
            // Update active nav button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Chat Functionality
function initializeChat() {
    const chatWindow = document.getElementById('chatWindow');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const quickBtns = document.querySelectorAll('.quick-btn');
    
    // Send message on button click
    sendBtn.addEventListener('click', () => sendMessage());
    
    // Send message on Enter (but allow Shift+Enter for new line)
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Quick action buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question;
            userInput.value = question;
            sendMessage();
        });
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Generate AI response
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Convert markdown-style formatting
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        
        content.innerHTML = formattedText;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        chatWindow.appendChild(messageDiv);
        
        // Scroll to bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot typing-indicator-container';
        typingDiv.id = 'typingIndicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
        
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(content);
        chatWindow.appendChild(typingDiv);
        
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }
}

// AI Response Generation
function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for job description analysis
    if (message.length > 100 || 
        message.includes('job description') || 
        message.includes('position') ||
        message.includes('requirements') ||
        message.includes('we are looking')) {
        return analyzeJobPosting(userMessage);
    }
    
    // Skill-related questions
    if (message.includes('skill') || message.includes('know') || message.includes('technologies')) {
        if (message.includes('healthcare') || message.includes('medical') || message.includes('clinical')) {
            return AI_KNOWLEDGE.responses.healthcare;
        }
        return AI_KNOWLEDGE.responses.skills;
    }
    
    // Experience questions
    if (message.includes('experience') || message.includes('work') || message.includes('background')) {
        return AI_KNOWLEDGE.responses.experience;
    }
    
    // Project questions
    if (message.includes('project') || message.includes('built') || message.includes('created')) {
        return AI_KNOWLEDGE.responses.projects;
    }
    
    // Contact questions
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('hire')) {
        return AI_KNOWLEDGE.responses.contact;
    }
    
    // Fit/qualification questions
    if (message.includes('fit') || message.includes('qualified') || message.includes('good for') || message.includes('suitable')) {
        return `Based on Tyson's profile, he'd be a great fit for roles requiring:

**Strong Match:**
• SQL and database querying (5+ years)
• Data visualization (Tableau/Power BI)
• Healthcare data analysis
• Python for data processing
• ETL and data pipeline work

**Why he's a good fit:**
• Proven track record in healthcare analytics
• Technical skills + domain knowledge
• Automation and efficiency mindset
• Strong communication and stakeholder management

Would you like to share a specific job description for a detailed analysis?`;
    }
    
    // Default response
    return `I'm here to help you learn about Tyson! Here are some things I can tell you about:

**Ask me about:**
• His technical skills (SQL, Python, Tableau, etc.)
• Healthcare data analysis experience
• Specific projects he's built
• Work history and achievements
• Whether he's a good fit for a specific role

**Or paste a job description** and I'll analyze how well his skills match!

What would you like to know?`;
}

// Job Analysis Function
function analyzeJobPosting(jobDescription) {
    const analysis = AI_KNOWLEDGE.analyzeJobFit(jobDescription);
    
    let response = `## Job Fit Analysis\n\n`;
    response += `**Overall Match: ${analysis.fitPercentage}%** - ${analysis.recommendation}\n\n`;
    
    if (analysis.matched.length > 0) {
        response += `**Matching Skills:**\n`;
        analysis.matched.forEach(match => {
            const emoji = match.strength === 'expert' ? '⭐' : 
                         match.strength === 'advanced' ? '✓' : '○';
            response += `${emoji} **${match.skill}** (${match.strength}, ${match.years} years)\n`;
        });
        response += `\n`;
    }
    
    response += `**Why Tyson is a strong candidate:**\n`;
    response += `• ${analysis.matched.length}+ relevant skills match this role\n`;
    response += `• Healthcare data analysis expertise\n`;
    response += `• Proven automation and efficiency improvements\n`;
    response += `• Strong SQL and visualization skills\n\n`;
    
    if (analysis.fitPercentage >= 80) {
        response += `**Recommendation:** Tyson would be an **excellent fit** for this position. His healthcare experience and technical skills align very well with the requirements.`;
    } else if (analysis.fitPercentage >= 60) {
        response += `**Recommendation:** Tyson is a **good fit** for this role. While there may be some areas to grow into, his core skills and experience make him a strong candidate.`;
    } else {
        response += `**Recommendation:** This role may not be the best match for Tyson's current skill set, but he's a quick learner and could adapt given the opportunity.`;
    }
    
    return response;
}

// Render Skills Section
function renderSkills() {
    // Data Analysis Skills
    const dataContainer = document.getElementById('dataSkills');
    RESUME_DATA.skills.dataAnalysis.forEach(skill => {
        dataContainer.appendChild(createSkillTag(skill));
    });
    
    // Programming Skills
    const progContainer = document.getElementById('programmingSkills');
    RESUME_DATA.skills.programming.forEach(skill => {
        progContainer.appendChild(createSkillTag(skill));
    });
    
    // Healthcare Skills
    const healthContainer = document.getElementById('healthcareSkills');
    RESUME_DATA.skills.healthcare.forEach(skill => {
        healthContainer.appendChild(createSkillTag(skill));
    });
    
    // Tools Skills
    const toolsContainer = document.getElementById('toolsSkills');
    RESUME_DATA.skills.tools.forEach(skill => {
        toolsContainer.appendChild(createSkillTag(skill));
    });
    
    // Proficiency Chart
    renderProficiencyChart();
}

function createSkillTag(skill) {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.innerHTML = `<i class="fas ${skill.icon}"></i> ${skill.name}`;
    return tag;
}

function renderProficiencyChart() {
    const chart = document.getElementById('proficiencyChart');
    const topSkills = [
        ...RESUME_DATA.skills.dataAnalysis,
        ...RESUME_DATA.skills.programming
    ].sort((a, b) => b.level - a.level).slice(0, 8);
    
    topSkills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'proficiency-item';
        item.innerHTML = `
            <div class="proficiency-header">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="proficiency-bar">
                <div class="proficiency-fill" style="width: ${skill.level}%"></div>
            </div>
        `;
        chart.appendChild(item);
    });
}

// Render Experience Section
function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    RESUME_DATA.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        let highlightsHtml = '';
        if (job.highlights) {
            highlightsHtml = '<ul style="margin: 10px 0; padding-left: 20px; color: var(--text-secondary);">';
            job.highlights.forEach(h => {
                highlightsHtml += `<li style="margin: 5px 0;">${h}</li>`;
            });
            highlightsHtml += '</ul>';
        }
        
        let tagsHtml = '';
        if (job.tags) {
            tagsHtml = '<div class="timeline-tags">';
            job.tags.forEach(tag => {
                tagsHtml += `<span class="timeline-tag">${tag}</span>`;
            });
            tagsHtml += '</div>';
        }
        
        item.innerHTML = `
            <div class="timeline-date">${job.date}</div>
            <div class="timeline-title">${job.title}</div>
            <div class="timeline-company">${job.company} | ${job.location}</div>
            <div class="timeline-description">${job.description}</div>
            ${highlightsHtml}
            ${tagsHtml}
        `;
        
        timeline.appendChild(item);
    });
}

// Render Projects Section
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    RESUME_DATA.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        
        let linksHtml = '';
        if (project.github && project.github !== '#') {
            linksHtml += `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>`;
        }
        if (project.demo && project.demo !== '#') {
            linksHtml += `<a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>`;
        }
        
        let highlightsHtml = '';
        if (project.highlights) {
            highlightsHtml = '<ul style="margin: 10px 0; padding-left: 20px; color: var(--text-secondary); font-size: 0.9rem;">';
            project.highlights.forEach(h => {
                highlightsHtml += `<li style="margin: 5px 0;">${h}</li>`;
            });
            highlightsHtml += '</ul>';
        }
        
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <p>Project</p>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                ${highlightsHtml}
                <div class="project-tech">${techTags}</div>
                <div class="project-links">${linksHtml}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}
