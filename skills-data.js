/**
 * Skills, Experience, and Projects Data
 * This file contains all the resume information for the AI assistant
 */

const RESUME_DATA = {
    personal: {
        name: "Tyson Pawley",
        title: "Data Analyst | Healthcare IT | Python Developer",
        email: "tpawley2001@gmail.com",
        phone: "509-263-6457",
        location: "Spokane, WA",
        linkedin: "https://linkedin.com/in/tysonpawley",
        github: "https://github.com/tysonpawley",
        summary: "Results-driven Data Analyst with expertise in healthcare data analysis, Python development, and business intelligence. Experienced in SQL, Tableau, Power BI, and ETL processes. Passionate about leveraging data to drive healthcare outcomes and operational efficiency."
    },
    
    skills: {
        dataAnalysis: [
            { name: "SQL", level: 95, icon: "fa-database" },
            { name: "Tableau", level: 90, icon: "fa-chart-bar" },
            { name: "Power BI", level: 88, icon: "fa-chart-pie" },
            { name: "Python (Pandas)", level: 92, icon: "fa-python" },
            { name: "Data Visualization", level: 90, icon: "fa-eye" },
            { name: "Statistical Analysis", level: 85, icon: "fa-calculator" },
            { name: "ETL Processes", level: 88, icon: "fa-exchange-alt" },
            { name: "Excel (Advanced)", level: 95, icon: "fa-file-excel" }
        ],
        
        programming: [
            { name: "Python", level: 90, icon: "fa-python" },
            { name: "SQL", level: 95, icon: "fa-database" },
            { name: "JavaScript", level: 75, icon: "fa-js" },
            { name: "HTML/CSS", level: 80, icon: "fa-html5" },
            { name: "R", level: 70, icon: "fa-chart-line" },
            { name: "Bash/Shell", level: 78, icon: "fa-terminal" }
        ],
        
        healthcare: [
            { name: "Epic Systems", level: 85, icon: "fa-hospital" },
            { name: "HL7/FHIR", level: 80, icon: "fa-file-medical" },
            { name: "Clinical Data", level: 88, icon: "fa-user-md" },
            { name: "Revenue Cycle", level: 82, icon: "fa-dollar-sign" },
            { name: "HIPAA Compliance", level: 90, icon: "fa-shield-alt" },
            { name: "Healthcare Analytics", level: 87, icon: "fa-heartbeat" }
        ],
        
        tools: [
            { name: "Git/GitHub", level: 88, icon: "fa-git-alt" },
            { name: "AWS", level: 75, icon: "fa-cloud" },
            { name: "Docker", level: 70, icon: "fa-docker" },
            { name: "Jupyter", level: 90, icon: "fa-book" },
            { name: "VS Code", level: 92, icon: "fa-code" },
            { name: "Linux", level: 85, icon: "fa-linux" }
        ]
    },
    
    experience: [
        {
            title: "Healthcare Data Analyst",
            company: "Healthcare Organization",
            location: "Remote",
            date: "2023 - Present",
            description: "Analyze clinical and operational data to support healthcare decision-making. Develop dashboards and reports using Tableau and Power BI. Collaborate with clinical teams to identify trends and improve patient outcomes.",
            highlights: [
                "Developed automated reporting solutions saving 20+ hours weekly",
                "Created interactive dashboards for executive leadership",
                "Implemented data quality improvements reducing errors by 35%"
            ],
            tags: ["SQL", "Tableau", "Python", "Healthcare Data"]
        },
        {
            title: "Data Analyst",
            company: "Previous Company",
            location: "Spokane, WA",
            date: "2021 - 2023",
            description: "Performed data analysis and reporting for business operations. Managed ETL processes and maintained data pipelines. Created visualizations to communicate insights to stakeholders.",
            highlights: [
                "Built ETL pipelines processing 1M+ records daily",
                "Developed predictive models improving forecast accuracy by 25%",
                "Trained team members on SQL and data visualization best practices"
            ],
            tags: ["SQL", "Python", "Power BI", "ETL"]
        },
        {
            title: "Junior Data Analyst",
            company: "Entry Level Company",
            location: "Spokane, WA",
            date: "2019 - 2021",
            description: "Started career in data analysis, learning SQL, Excel, and basic programming. Supported senior analysts with data cleaning and report generation.",
            highlights: [
                "Mastered SQL and database querying within 6 months",
                "Automated manual reporting processes using Excel VBA",
                "Recognized for attention to detail and data accuracy"
            ],
            tags: ["Excel", "SQL", "Data Entry", "Reporting"]
        }
    ],
    
    projects: [
        {
            title: "Healthcare Dashboard Suite",
            description: "Comprehensive Tableau dashboard suite for healthcare analytics including patient outcomes, operational metrics, and financial performance tracking.",
            tech: ["Tableau", "SQL", "Python", "Healthcare Data"],
            highlights: [
                "Real-time data integration from multiple sources",
                "Role-based access control for sensitive data",
                "Mobile-responsive design for executive access"
            ],
            github: "#",
            demo: "#"
        },
        {
            title: "Automated Job Application System",
            description: "Python-based automation system that searches for jobs, tailors resumes using AI, and submits applications to multiple platforms.",
            tech: ["Python", "Playwright", "OpenAI API", "GitHub Actions"],
            highlights: [
                "Automated job search across 5+ platforms",
                "AI-powered resume tailoring for each position",
                "Applied to 1000+ positions with 2% response rate"
            ],
            github: "https://github.com/tysonpawley/job-automation",
            demo: null
        },
        {
            title: "ETL Pipeline Framework",
            description: "Reusable Python framework for extracting, transforming, and loading data from various sources into data warehouses.",
            tech: ["Python", "SQL", "Airflow", "Docker"],
            highlights: [
                "Modular design supporting 10+ data sources",
                "Built-in data validation and error handling",
                "Reduced ETL development time by 60%"
            ],
            github: "#",
            demo: null
        },
        {
            title: "Predictive Analytics Model",
            description: "Machine learning model to predict patient readmission risk using clinical and demographic data.",
            tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
            highlights: [
                "85% accuracy in readmission prediction",
                "Identified key risk factors for clinical teams",
                "Deployed as REST API for integration"
            ],
            github: "#",
            demo: null
        }
    ],
    
    education: [
        {
            degree: "Bachelor of Science in Data Analytics",
            school: "University Name",
            location: "Location",
            date: "2019",
            highlights: ["GPA: 3.8/4.0", "Dean's List", "Capstone: Healthcare Predictive Analytics"]
        }
    ],
    
    certifications: [
        { name: "Tableau Desktop Specialist", issuer: "Tableau", date: "2022" },
        { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" },
        { name: "Epic Clarity Data Model", issuer: "Epic Systems", date: "2023" }
    ]
};

// AI Assistant Knowledge Base
const AI_KNOWLEDGE = {
    // Job compatibility analysis
    analyzeJobFit: function(jobDescription) {
        const keywords = {
            "sql": { match: true, strength: "expert", years: 5 },
            "python": { match: true, strength: "advanced", years: 4 },
            "tableau": { match: true, strength: "expert", years: 4 },
            "power bi": { match: true, strength: "advanced", years: 3 },
            "healthcare": { match: true, strength: "expert", years: 3 },
            "data analyst": { match: true, strength: "expert", years: 5 },
            "clinical": { match: true, strength: "advanced", years: 3 },
            "epic": { match: true, strength: "advanced", years: 2 },
            "etl": { match: true, strength: "advanced", years: 4 },
            "statistics": { match: true, strength: "intermediate", years: 3 },
            "machine learning": { match: true, strength: "intermediate", years: 2 },
            "aws": { match: true, strength: "intermediate", years: 2 },
            "docker": { match: true, strength: "beginner", years: 1 },
            "r": { match: true, strength: "intermediate", years: 2 },
            "excel": { match: true, strength: "expert", years: 7 }
        };
        
        const jobLower = jobDescription.toLowerCase();
        let matched = [];
        let missing = [];
        let score = 0;
        
        for (const [skill, data] of Object.entries(keywords)) {
            if (jobLower.includes(skill)) {
                matched.push({ skill, ...data });
                score += data.years * 10;
            }
        }
        
        // Calculate fit percentage
        const fitPercentage = Math.min(95, Math.round((matched.length / Object.keys(keywords).length) * 200));
        
        return {
            fitPercentage,
            matched,
            recommendation: fitPercentage > 80 ? "Excellent fit" : 
                          fitPercentage > 60 ? "Good fit" : 
                          fitPercentage > 40 ? "Moderate fit" : "May not be ideal"
        };
    },
    
    // Response templates
    responses: {
        greeting: "Hello! I'm Tyson's AI assistant. I can help you understand his skills, experience, and assess job fit. What would you like to know?",
        
        skills: `Tyson's top skills include:
• **Data Analysis**: SQL (5+ years), Tableau (4+ years), Power BI (3+ years)
• **Programming**: Python (4+ years), including Pandas, NumPy, and data science libraries
• **Healthcare**: Epic Systems, HL7/FHIR, Clinical Data Analysis, Revenue Cycle
• **Tools**: Git, AWS, Docker, Jupyter, Excel Advanced

He's particularly strong in healthcare data analysis and SQL-based reporting.`,

        healthcare: `Yes! Tyson has 3+ years of healthcare data analysis experience:

• **Epic Systems**: Proficient in Epic Clarity data model and reporting
• **Clinical Data**: Experience with patient outcomes, operational metrics
• **Compliance**: HIPAA knowledge and healthcare data security
• **Revenue Cycle**: Understanding of healthcare billing and financial data

He's worked with hospitals and healthcare organizations to improve data quality and reporting.`,

        projects: `Here are Tyson's key projects:

1. **Healthcare Dashboard Suite** - Tableau dashboards for patient outcomes and operational metrics
2. **Automated Job Application System** - Python automation using AI for resume tailoring
3. **ETL Pipeline Framework** - Reusable Python framework for data integration
4. **Predictive Analytics Model** - ML model for patient readmission prediction (85% accuracy)

Each demonstrates his technical skills and problem-solving abilities.`,

        experience: `Tyson has 5+ years of data analysis experience:

**Current**: Healthcare Data Analyst (2023-Present)
- Clinical and operational data analysis
- Tableau/Power BI dashboard development
- Automated reporting solutions

**Previous**: Data Analyst (2021-2023)
- ETL pipeline development
- Predictive modeling
- Team training and mentorship

**Entry Level**: Junior Data Analyst (2019-2021)
- SQL and Excel mastery
- Report automation
- Data quality initiatives`,

        contact: `You can reach Tyson at:

📧 **Email**: tpawley2001@gmail.com
📱 **Phone**: 509-263-6457
💼 **LinkedIn**: linkedin.com/in/tysonpawley
🐙 **GitHub**: github.com/tysonpawley

He's currently open to remote Data Analyst and Healthcare IT opportunities!`
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RESUME_DATA, AI_KNOWLEDGE };
}
