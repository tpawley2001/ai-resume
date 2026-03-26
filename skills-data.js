/**
 * Skills, Experience, and Projects Data
 * This file contains all the resume information for the AI assistant
 */

const RESUME_DATA = {
    personal: {
        name: "Tyson Pawley",
        title: "Operations Project Manager | Data Analyst | Healthcare IT | AI Model Tester",
        email: "tpawley2001@gmail.com",
        phone: "509-263-6457",
        location: "Spokane, WA",
        linkedin: "https://linkedin.com/in/tysonpawley",
        github: "https://github.com/tpawley2001",
        summary: "Strategic Operations Project Manager with 16+ years of healthcare industry experience specializing in employee benefits, insurance, and provider network operations. Proven expertise in leading operational initiatives from planning through execution, driving process improvements that increased efficiency by 20%. Skilled in cross-functional team collaboration, data analysis and reporting tools, and regulatory compliance. Experienced in AI model testing and evaluation, with strong skills in prompt engineering, LLM testing, and content quality assurance. Demonstrated ability to work in ambiguous, innovative environments while delivering projects on time, within scope, and within budget."
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
        ],
        
        operations: [
            { name: "Project Management", level: 95, icon: "fa-tasks" },
            { name: "Cross-Functional Leadership", level: 92, icon: "fa-users" },
            { name: "Process Improvement", level: 90, icon: "fa-chart-line" },
            { name: "Budget Management", level: 85, icon: "fa-dollar-sign" },
            { name: "Risk Mitigation", level: 88, icon: "fa-shield-alt" },
            { name: "Stakeholder Communication", level: 90, icon: "fa-comments" }
        ],
        
        claims: [
            { name: "Claims Processing", level: 95, icon: "fa-file-medical" },
            { name: "Claims Auditing", level: 90, icon: "fa-search" },
            { name: "Claims Adjustments", level: 88, icon: "fa-balance-scale" },
            { name: "COB/TPA", level: 85, icon: "fa-handshake" },
            { name: "Quality Assurance", level: 90, icon: "fa-check-circle" },
            { name: "Regulatory Compliance", level: 92, icon: "fa-gavel" }
        ],
        
        customerservice: [
            { name: "Customer Support", level: 90, icon: "fa-headset" },
            { name: "Issue Resolution", level: 92, icon: "fa-wrench" },
            { name: "Provider Relations", level: 88, icon: "fa-user-md" },
            { name: "Training & Development", level: 90, icon: "fa-chalkboard-teacher" },
            { name: "Documentation", level: 88, icon: "fa-file-alt" },
            { name: "Communication", level: 92, icon: "fa-comments" }
        ],
        
        aiTesting: [
            { name: "Prompt Engineering", level: 88, icon: "fa-robot" },
            { name: "AI Model Testing", level: 90, icon: "fa-vial" },
            { name: "LLM Evaluation", level: 85, icon: "fa-brain" },
            { name: "Chatbot Testing", level: 88, icon: "fa-comments" },
            { name: "Content Quality Assurance", level: 90, icon: "fa-check-double" },
            { name: "Natural Language Processing", level: 82, icon: "fa-language" },
            { name: "Test Case Design", level: 88, icon: "fa-clipboard-check" },
            { name: "Regression Testing", level: 85, icon: "fa-undo" }
        ],
        
        agenticSystems: [
            { name: "Multi-Agent Decomposition", level: 85, icon: "fa-sitemap" },
            { name: "Scope Matching", level: 88, icon: "fa-bullseye" },
            { name: "Failure Pattern Recognition", level: 82, icon: "fa-exclamation-triangle" },
            { name: "Trust & Security Design", level: 80, icon: "fa-shield-alt" },
            { name: "Context Architecture", level: 85, icon: "fa-layer-group" },
            { name: "Specification Precision", level: 90, icon: "fa-file-contract" },
            { name: "Evaluation & Quality Judgment", level: 88, icon: "fa-balance-scale" }
        ]
    },
    
    experience: [
        {
            title: "Customer Care Specialist / EDI Analyst",
            company: "First Choice Health",
            location: "Remote",
            date: "February 2025 – Present",
            description: "Lead analysis of existing operational processes for EDI claims routing, recommending improvements to increase efficiency and reduce costs. Collaborate cross-functionally with multiple departments to ensure smooth claims operations and project execution.",
            highlights: [
                "Utilize data analysis and reporting tools to gather insights into operations performance",
                "Ensure claims products meet quality standards and compliance requirements",
                "Maintain detailed documentation for claims processing procedures"
            ],
            tags: ["EDI", "Claims Operations", "Process Improvement", "Healthcare"]
        },
        {
            title: "Association Manager",
            company: "WA State US Bowling Congress",
            location: "Spokane, WA",
            date: "August 2024 – August 2025",
            description: "Lead project management of organizational initiatives, owning planning, execution, and closing of projects on time and within budget. Identify potential risks and develop strategies to mitigate them for tournament operations.",
            highlights: [
                "Facilitate clear communication between teams, stakeholders, and leadership",
                "Manage tournament operations and logistics",
                "Drive continuous improvement in organizational processes"
            ],
            tags: ["Project Management", "Event Operations", "Leadership"]
        },
        {
            title: "Team Lead, Claims Processing",
            company: "Sedgwick Government Solutions",
            location: "Remote",
            date: "May 2024 – September 2024",
            description: "Led cross-functional teams in claims inventory management and operational planning. Identified key requirements for teams and external vendors to optimize workflow. Coached staff on performance improvement.",
            highlights: [
                "Demonstrated strong organizational and project management capabilities",
                "Optimized workflow processes for claims processing",
                "Mentored team members on performance standards"
            ],
            tags: ["Team Leadership", "Claims Processing", "Operations"]
        },
        {
            title: "Claims IT Applications Engineer",
            company: "Kaiser Permanente",
            location: "Spokane, WA",
            date: "February 2007 – November 2023",
            description: "Designed and implemented claims reporting tools for regulatory compliance and executive decision-making. Automated data processes to improve accuracy and reduce processing time. Conducted quality assurance testing for new implementations and claims systems.",
            highlights: [
                "Designed and maintained claims reporting systems",
                "Automated processes to maximize efficiency and reduce errors",
                "Conducted in-depth analysis to identify trends and optimize operations"
            ],
            tags: ["Applications Engineer", "Claims", "Reporting", "Automation"]
        },
        {
            title: "Claims Operations Manager",
            company: "Kaiser Permanente",
            location: "Spokane, WA",
            date: "February 2007 – November 2023",
            description: "Directed claims, adjustments, third-party liability, and coordination of benefits departments. Led project management of operational initiatives, owning planning, execution, and closing of projects delivered on time, within scope, within budget.",
            highlights: [
                "Achieved 20% inventory reduction through process improvements",
                "Led cross-functional teams in operational planning and execution",
                "Analyzed operational processes and recommended efficiency improvements"
            ],
            tags: ["Operations Management", "Project Management", "Claims", "Leadership"]
        },
        {
            title: "Provider Assistance Unit Customer Service Specialist",
            company: "Kaiser Permanente",
            location: "Spokane, WA",
            date: "February 2007 – November 2023",
            description: "Responded to provider inquiries about claims, contracts, and referral statuses. Processed claims ensuring accuracy and compliance with contractual terms. Acted as liaison between providers and internal departments to resolve issues promptly.",
            highlights: [
                "Developed training materials and conducted onboarding sessions",
                "Provided ongoing documentation updates to improve team efficiency",
                "Resolved provider issues and ensured customer satisfaction"
            ],
            tags: ["Customer Service", "Provider Relations", "Claims", "Training"]
        },
        {
            title: "Trainer / Acting Supervisor",
            company: "Delta Dental Plan of California",
            location: "California",
            date: "March 2000 – February 2007",
            description: "Trained and supervised claims processing teams, enhancing accuracy and productivity. Conducted data analysis to ensure claims compliance and resolve discrepancies. Created training materials to enhance understanding of data and reporting processes.",
            highlights: [
                "Trained team members in customer service and claims processing",
                "Assisted customers with claim inquiries and processed outstanding claims",
                "Supervised teams to enhance accuracy and productivity"
            ],
            tags: ["Training", "Supervision", "Claims Processing", "Customer Service"]
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
            // Data/Technical Skills
            "sql": { match: true, strength: "expert", years: 5 },
            "python": { match: true, strength: "advanced", years: 4 },
            "tableau": { match: true, strength: "expert", years: 4 },
            "power bi": { match: true, strength: "advanced", years: 3 },
            "healthcare": { match: true, strength: "expert", years: 16 },
            "data analyst": { match: true, strength: "expert", years: 5 },
            "clinical": { match: true, strength: "advanced", years: 16 },
            "epic": { match: true, strength: "advanced", years: 2 },
            "etl": { match: true, strength: "advanced", years: 4 },
            "statistics": { match: true, strength: "intermediate", years: 3 },
            "machine learning": { match: true, strength: "intermediate", years: 2 },
            "aws": { match: true, strength: "intermediate", years: 2 },
            "docker": { match: true, strength: "beginner", years: 1 },
            "r": { match: true, strength: "intermediate", years: 2 },
            "excel": { match: true, strength: "expert", years: 7 },
            // Operations/Project Management Skills
            "project manager": { match: true, strength: "expert", years: 16 },
            "operations manager": { match: true, strength: "expert", years: 16 },
            "operations": { match: true, strength: "expert", years: 16 },
            "cross-functional": { match: true, strength: "expert", years: 16 },
            "process improvement": { match: true, strength: "expert", years: 16 },
            "budget management": { match: true, strength: "advanced", years: 10 },
            "risk mitigation": { match: true, strength: "advanced", years: 16 },
            "stakeholder": { match: true, strength: "expert", years: 16 },
            "claims": { match: true, strength: "expert", years: 16 },
            "leadership": { match: true, strength: "expert", years: 16 },
            "team lead": { match: true, strength: "expert", years: 16 },
            "continuous improvement": { match: true, strength: "expert", years: 16 },
            "strategic planning": { match: true, strength: "expert", years: 10 },
            "vendor management": { match: true, strength: "advanced", years: 8 },
            "quality assurance": { match: true, strength: "expert", years: 16 },
            "project planning": { match: true, strength: "expert", years: 16 },
            "project execution": { match: true, strength: "expert", years: 16 },
            "edi": { match: true, strength: "expert", years: 16 },
            // Claims Processing Keywords
            "claims processing": { match: true, strength: "expert", years: 16 },
            "claims auditor": { match: true, strength: "expert", years: 16 },
            "claims examiner": { match: true, strength: "expert", years: 16 },
            "claims specialist": { match: true, strength: "expert", years: 16 },
            "claims analyst": { match: true, strength: "expert", years: 16 },
            "claims adjudication": { match: true, strength: "expert", years: 16 },
            "claims adjustment": { match: true, strength: "expert", years: 16 },
            "medical claims": { match: true, strength: "expert", years: 16 },
            "dental claims": { match: true, strength: "expert", years: 7 },
            "coordination of benefits": { match: true, strength: "expert", years: 16 },
            "cob": { match: true, strength: "expert", years: 16 },
            "third party liability": { match: true, strength: "expert", years: 16 },
            "tpl": { match: true, strength: "expert", years: 16 },
            "subrogation": { match: true, strength: "advanced", years: 10 },
            "recovery": { match: true, strength: "advanced", years: 10 },
            "overpayment": { match: true, strength: "expert", years: 16 },
            "audit": { match: true, strength: "expert", years: 16 },
            "quality assurance": { match: true, strength: "expert", years: 16 },
            // Customer Service/Support Keywords
            "customer service": { match: true, strength: "expert", years: 16 },
            "customer support": { match: true, strength: "expert", years: 16 },
            "customer care": { match: true, strength: "expert", years: 16 },
            "customer care representative": { match: true, strength: "expert", years: 16 },
            "technical support": { match: true, strength: "advanced", years: 10 },
            "help desk": { match: true, strength: "advanced", years: 10 },
            "provider relations": { match: true, strength: "expert", years: 16 },
            "provider services": { match: true, strength: "expert", years: 16 },
            "member services": { match: true, strength: "expert", years: 16 },
            "call center": { match: true, strength: "expert", years: 16 },
            "phone support": { match: true, strength: "expert", years: 16 },
            "chat support": { match: true, strength: "expert", years: 16 },
            "issue resolution": { match: true, strength: "expert", years: 16 },
            "escalation": { match: true, strength: "expert", years: 16 },
            "troubleshooting": { match: true, strength: "advanced", years: 10 },
            "training": { match: true, strength: "expert", years: 16 },
            "mentoring": { match: true, strength: "expert", years: 16 },
            "staff development": { match: true, strength: "expert", years: 16 },
            "onboarding": { match: true, strength: "expert", years: 16 },
            "documentation": { match: true, strength: "expert", years: 16 },
            "benefits": { match: true, strength: "expert", years: 16 },
            "eligibility": { match: true, strength: "expert", years: 16 },
            "phi": { match: true, strength: "expert", years: 16 },
            "protected health information": { match: true, strength: "expert", years: 16 },
            "confidentiality": { match: true, strength: "expert", years: 16 },
            "hipaa": { match: true, strength: "expert", years: 16 },
            "crm": { match: true, strength: "expert", years: 16 },
            "kpi": { match: true, strength: "expert", years: 16 },
            "performance indicators": { match: true, strength: "expert", years: 16 },
            "bilingual": { match: true, strength: "beginner", years: 2 },
            "spanish": { match: true, strength: "beginner", years: 2 },
            // IT/Systems Keywords
            "it support": { match: true, strength: "advanced", years: 10 },
            "systems analyst": { match: true, strength: "advanced", years: 10 },
            "applications engineer": { match: true, strength: "expert", years: 16 },
            "systems engineer": { match: true, strength: "advanced", years: 10 },
            "business analyst": { match: true, strength: "expert", years: 10 },
            "reporting tools": { match: true, strength: "expert", years: 16 },
            "dashboard": { match: true, strength: "expert", years: 10 },
            "automation": { match: true, strength: "expert", years: 16 },
            "workflow": { match: true, strength: "expert", years: 16 },
            // Management Keywords
            "supervisor": { match: true, strength: "expert", years: 16 },
            "manager": { match: true, strength: "expert", years: 16 },
            "director": { match: true, strength: "advanced", years: 5 },
            "administrator": { match: true, strength: "expert", years: 10 },
            "administrative": { match: true, strength: "expert", years: 10 },
            "team lead": { match: true, strength: "expert", years: 16 },
            "team management": { match: true, strength: "expert", years: 16 },
            "performance management": { match: true, strength: "expert", years: 16 },
            "coaching": { match: true, strength: "expert", years: 16 },
            "workforce": { match: true, strength: "expert", years: 16 },
            // Data/BI/Analytics Keywords
            "bi developer": { match: true, strength: "advanced", years: 5 },
            "business intelligence": { match: true, strength: "advanced", years: 5 },
            "business analyst": { match: true, strength: "expert", years: 10 },
            "data analyst": { match: true, strength: "expert", years: 10 },
            "junior data analyst": { match: true, strength: "expert", years: 10 },
            "data scientist": { match: true, strength: "intermediate", years: 3 },
            "data warehouse": { match: true, strength: "advanced", years: 5 },
            "etl developer": { match: true, strength: "advanced", years: 5 },
            "sql developer": { match: true, strength: "expert", years: 10 },
            "python developer": { match: true, strength: "advanced", years: 4 },
            "full stack developer": { match: true, strength: "intermediate", years: 2 },
            "software engineer": { match: true, strength: "intermediate", years: 3 },
            "junior software engineer": { match: true, strength: "intermediate", years: 3 },
            "application developer": { match: true, strength: "advanced", years: 8 },
            "report developer": { match: true, strength: "expert", years: 10 },
            "analytics engineer": { match: true, strength: "advanced", years: 5 },
            "data engineer": { match: true, strength: "advanced", years: 4 },
            // Clinical/Healthcare IT Keywords
            "clinical informatics": { match: true, strength: "advanced", years: 8 },
            "clinical informatics specialist": { match: true, strength: "advanced", years: 8 },
            "rn clinical informatics": { match: true, strength: "advanced", years: 8 },
            "health information management": { match: true, strength: "expert", years: 16 },
            "him": { match: true, strength: "expert", years: 16 },
            "cdi": { match: true, strength: "advanced", years: 8 },
            "clinical documentation": { match: true, strength: "advanced", years: 8 },
            "mds coordinator": { match: true, strength: "intermediate", years: 5 },
            "trauma registrar": { match: true, strength: "intermediate", years: 5 },
            "quality systems analyst": { match: true, strength: "expert", years: 10 },
            "healthcare business analyst": { match: true, strength: "expert", years: 10 },
            "healthcare analyst": { match: true, strength: "expert", years: 10 },
            "healthcare configuration": { match: true, strength: "advanced", years: 8 },
            "facets": { match: true, strength: "intermediate", years: 5 },
            "systems analyst": { match: true, strength: "advanced", years: 10 },
            "rn systems analyst": { match: true, strength: "advanced", years: 10 },
            "is data": { match: true, strength: "advanced", years: 10 },
            "integration analyst": { match: true, strength: "advanced", years: 10 },
            // Revenue Cycle Keywords
            "revenue cycle": { match: true, strength: "expert", years: 16 },
            "revenue cycle analyst": { match: true, strength: "expert", years: 16 },
            "credit team": { match: true, strength: "expert", years: 16 },
            "stop loss": { match: true, strength: "advanced", years: 10 },
            "sales operations analyst": { match: true, strength: "advanced", years: 8 },
            "insurance": { match: true, strength: "expert", years: 16 },
            "health insurance": { match: true, strength: "expert", years: 16 },
            "life insurance": { match: true, strength: "intermediate", years: 5 },
            "reinsurance": { match: true, strength: "intermediate", years: 5 },
            "broker": { match: true, strength: "intermediate", years: 5 },
            "payroll": { match: true, strength: "intermediate", years: 5 },
            "benefits specialist": { match: true, strength: "expert", years: 16 },
            // Administrative/Operations Keywords
            "administrative": { match: true, strength: "expert", years: 10 },
            "administrative operations": { match: true, strength: "expert", years: 10 },
            "operations analyst": { match: true, strength: "expert", years: 16 },
            "business optimization": { match: true, strength: "expert", years: 16 },
            "strategic operations": { match: true, strength: "expert", years: 10 },
            "project support": { match: true, strength: "expert", years: 16 },
            "workforce": { match: true, strength: "expert", years: 16 },
            "workforce management": { match: true, strength: "expert", years: 16 },
            // Technical/IT Keywords
            "powerbi": { match: true, strength: "advanced", years: 3 },
            "power bi": { match: true, strength: "advanced", years: 3 },
            "tableau": { match: true, strength: "expert", years: 4 },
            "onestream": { match: true, strength: "beginner", years: 1 },
            "maximo": { match: true, strength: "intermediate", years: 3 },
            "aws": { match: true, strength: "intermediate", years: 2 },
            "aws data": { match: true, strength: "intermediate", years: 2 },
            "cloud": { match: true, strength: "intermediate", years: 2 },
            "data center": { match: true, strength: "beginner", years: 1 },
            "data architect": { match: true, strength: "intermediate", years: 3 },
            "security": { match: true, strength: "intermediate", years: 5 },
            "clearance": { match: true, strength: "intermediate", years: 5 },
            "security clearance": { match: true, strength: "intermediate", years: 5 },
            "ruby on rails": { match: true, strength: "beginner", years: 1 },
            "java": { match: true, strength: "intermediate", years: 3 },
            "api": { match: true, strength: "advanced", years: 5 },
            "rest api": { match: true, strength: "advanced", years: 5 },
            "salesforce": { match: true, strength: "beginner", years: 1 },
            "crm": { match: true, strength: "expert", years: 16 },
            "data governance": { match: true, strength: "advanced", years: 5 },
            "data quality": { match: true, strength: "expert", years: 10 },
            "data integration": { match: true, strength: "advanced", years: 8 },
            "small commercial": { match: true, strength: "intermediate", years: 5 },
            "product analytics": { match: true, strength: "intermediate", years: 3 },
            "sales enablement": { match: true, strength: "intermediate", years: 5 },
            "investment banking": { match: true, strength: "beginner", years: 1 },
            "accounting": { match: true, strength: "intermediate", years: 5 },
            "accountant": { match: true, strength: "intermediate", years: 5 },
            "attorney": { match: true, strength: "beginner", years: 1 },
            "legal": { match: true, strength: "beginner", years: 1 },
            "electrical engineer": { match: true, strength: "beginner", years: 1 },
            "mechanical designer": { match: true, strength: "beginner", years: 1 },
            "commissioning engineer": { match: true, strength: "beginner", years: 1 },
            "game designer": { match: true, strength: "beginner", years: 1 },
            "design intern": { match: true, strength: "beginner", years: 1 },
            "architect": { match: true, strength: "beginner", years: 1 },
            "ai specialist": { match: true, strength: "intermediate", years: 2 },
            "haitian creole": { match: true, strength: "beginner", years: 1 },
            "forward deployed": { match: true, strength: "beginner", years: 1 },
            "restaurant": { match: true, strength: "beginner", years: 1 },
            "account manager": { match: true, strength: "intermediate", years: 5 },
            "corporate marketing": { match: true, strength: "intermediate", years: 3 },
            "brand communications": { match: true, strength: "intermediate", years: 3 },
            "vp": { match: true, strength: "advanced", years: 5 },
            "vice president": { match: true, strength: "advanced", years: 5 },
            "senior director": { match: true, strength: "advanced", years: 5 },
            "biological analytical": { match: true, strength: "beginner", years: 1 },
            "analytical development": { match: true, strength: "beginner", years: 1 },
            "home based": { match: true, strength: "expert", years: 16 },
            "remote": { match: true, strength: "expert", years: 16 },
            "hybrid": { match: true, strength: "expert", years: 10 },
            // Agentic Systems Keywords
            "multi-agent": { match: true, strength: "advanced", years: 2 },
            "agent": { match: true, strength: "advanced", years: 2 },
            "agentic": { match: true, strength: "advanced", years: 2 },
            "decomposition": { match: true, strength: "advanced", years: 2 },
            "delegation": { match: true, strength: "advanced", years: 2 },
            "context window": { match: true, strength: "advanced", years: 2 },
            "context architecture": { match: true, strength: "advanced", years: 2 },
            "prompt engineering": { match: true, strength: "advanced", years: 2 },
            "llm": { match: true, strength: "advanced", years: 2 },
            "large language model": { match: true, strength: "advanced", years: 2 },
            "failure pattern": { match: true, strength: "intermediate", years: 2 },
            "trust design": { match: true, strength: "intermediate", years: 2 },
            "security design": { match: true, strength: "intermediate", years: 2 },
            "specification": { match: true, strength: "advanced", years: 5 },
            "requirements": { match: true, strength: "expert", years: 10 },
            "quality judgment": { match: true, strength: "advanced", years: 5 },
            "evaluation": { match: true, strength: "advanced", years: 5 }
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
        
        // Calculate fit percentage with weighted scoring
        // High-value skills get 2x weight
        const highValueSkills = [
            // Operations/PM
            'project manager', 'operations manager', 'operations', 'cross-functional', 
            'process improvement', 'project planning', 'project execution', 'leadership',
            'team lead', 'stakeholder', 'risk mitigation', 'continuous improvement',
            'strategic operations', 'project support', 'business optimization',
            // Customer Service
            'healthcare', 'claims', 'customer service', 'customer care',
            'customer care representative', 'provider relations', 'call center', 
            'issue resolution', 'escalation', 'benefits', 'eligibility',
            // Data/Analytics
            'data analyst', 'business analyst', 'bi developer', 'sql developer',
            'report developer', 'analytics engineer', 'clinical informatics',
            // Healthcare IT
            'clinical informatics specialist', 'healthcare business analyst', 
            'healthcare analyst', 'revenue cycle', 'revenue cycle analyst',
            'systems analyst', 'integration analyst', 'applications engineer',
            // Revenue Cycle
            'claims analyst', 'claims specialist', 'stop loss', 'credit team',
            // Administrative
            'administrative', 'administrative operations', 'workforce management'
        ];
        
        let weightedScore = 0;
        let maxPossibleScore = 0;
        
        matched.forEach(m => {
            const weight = highValueSkills.includes(m.skill) ? 2 : 1;
            weightedScore += (m.years * 10 * weight);
        });
        
        // Calculate percentage based on weighted matches
        const fitPercentage = Math.min(98, Math.round(40 + (matched.length * 3) + (weightedScore / 50)));
        
        return {
            fitPercentage,
            matched,
            recommendation: fitPercentage >= 90 ? "Excellent fit - Strongly recommend" : 
                          fitPercentage >= 75 ? "Very good fit" : 
                          fitPercentage >= 60 ? "Good fit" : 
                          fitPercentage >= 40 ? "Moderate fit" : "May not be ideal"
        };
    },
    
    // Response templates
    responses: {
        greeting: "Hello! I'm Tyson's AI assistant. I can help you understand his skills, experience, and assess job fit. What would you like to know?",
        
        skills: `Tyson's top skills include:

**Operations & Project Management:**
• Project Planning, Execution & Closing (16+ years)
• Cross-Functional Team Leadership (16+ years)
• Process Improvement & Efficiency (16+ years)
• Budget & Scope Management (10+ years)
• Risk Identification & Mitigation (16+ years)

**Data & Technical:**
• SQL (5+ years), Tableau (4+ years), Power BI (3+ years)
• Python (4+ years), Excel Advanced (7+ years)
• Data Analysis, ETL Processes, Statistical Analysis

**Healthcare:**
• Epic Systems, HL7/FHIR, Clinical Data Analysis
• Revenue Cycle, Claims Operations, EDI
• HIPAA Compliance, Quality Assurance

He's particularly strong in healthcare operations and data-driven project management.`,

        healthcare: `Yes! Tyson has 16+ years of healthcare industry experience:

**Operations Management:**
• Operations Manager at Kaiser Permanente (16+ years)
• Directed claims, adjustments, third-party liability, COB departments
• Led cross-functional teams and operational initiatives
• Achieved 20% inventory reduction through process improvements

**Clinical & Data:**
• Epic Systems: Proficient in Epic Clarity data model and reporting
• Clinical Data: Experience with patient outcomes, operational metrics
• EDI/Claims: Healthcare claims processing and EDI routing
• Compliance: HIPAA knowledge and healthcare data security

He's worked extensively in healthcare operations, claims, and project management.`,

        projects: `Here are Tyson's key projects:

1. **Healthcare Dashboard Suite** - Tableau dashboards for patient outcomes and operational metrics
2. **Automated Job Application System** - Python automation using AI for resume tailoring
3. **ETL Pipeline Framework** - Reusable Python framework for data integration
4. **Predictive Analytics Model** - ML model for patient readmission prediction (85% accuracy)

**Operations Achievements:**
• 20% claims inventory reduction through process improvements at Kaiser Permanente
• Led EDI claims routing optimization at First Choice Health
• Managed tournament operations for WA State US Bowling Congress

Each demonstrates his technical skills, operational expertise, and problem-solving abilities.`,

        experience: `Tyson has 16+ years of healthcare operations and project management experience:

**Current**: Customer Care Specialist / EDI Analyst at First Choice Health (2025-Present)
- Lead analysis of operational processes for EDI claims routing
- Collaborate cross-functionally with multiple departments

**Association Manager** at WA State US Bowling Congress (2024-2025)
- Lead project management of organizational initiatives
- Facilitate communication between teams, stakeholders, and leadership

**Team Lead, Claims Processing** at Sedgwick Government Solutions (2024)
- Led cross-functional teams in claims inventory management
- Optimized workflow processes for claims processing

**Operations Manager, Claims** at Kaiser Permanente (2007-2023)
- Directed claims, adjustments, third-party liability, COB departments
- Achieved 20% inventory reduction through process improvements
- Led project management of operational initiatives from planning to execution`,

        contact: `You can reach Tyson at:

📧 **Email**: tpawley2001@gmail.com
📱 **Phone**: 509-263-6457
💼 **LinkedIn**: linkedin.com/in/tyson-pawley-2234a565
🐙 **GitHub**: github.com/tpawley2001
🌐 **AI Resume**: https://tpawley2001.github.io/ai-resume/

He's currently open to remote Operations Project Manager, Data Analyst, and Healthcare IT opportunities!`
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RESUME_DATA, AI_KNOWLEDGE };
}
