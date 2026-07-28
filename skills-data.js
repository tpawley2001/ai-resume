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
        summary: "Claims and operations professional with 23 years in healthcare — 16 at Kaiser Permanente, progressing from provider support through operations management into claims IT engineering, plus 7 years in dental claims at Delta Dental. Builds the automation he used to request: VBA, SQL, and Python for claims reporting and regulatory compliance at work, and a portfolio of self-hosted tools and AI agent pipelines outside it. Comfortable in ambiguous environments, and direct about what he does and doesn't know."
    },
    
    // Tiers, not invented percentages:
    //   "Expert"     — years of daily professional use
    //   "Proficient" — used regularly to ship real work
    //   "Working"    — can be productive, still learning
    skills: {
        dataAnalysis: [
            { name: "SQL", tier: "Expert", icon: "fa-database" },
            { name: "Excel / VBA", tier: "Expert", icon: "fa-file-excel" },
            { name: "Python (Pandas)", tier: "Proficient", icon: "fa-python" },
            { name: "Tableau", tier: "Proficient", icon: "fa-chart-bar" },
            { name: "Power BI", tier: "Proficient", icon: "fa-chart-pie" },
            { name: "Data Visualization", tier: "Proficient", icon: "fa-eye" },
            { name: "ETL / Data Pipelines", tier: "Proficient", icon: "fa-exchange-alt" }
        ],

        programming: [
            { name: "Python", tier: "Proficient", icon: "fa-python" },
            { name: "SQL", tier: "Expert", icon: "fa-database" },
            { name: "VBA", tier: "Expert", icon: "fa-file-code" },
            { name: "JavaScript / TypeScript", tier: "Working", icon: "fa-js" },
            { name: "HTML/CSS", tier: "Working", icon: "fa-html5" },
            { name: "Bash/Shell", tier: "Proficient", icon: "fa-terminal" }
        ],

        healthcare: [
            { name: "Claims Systems", tier: "Expert", icon: "fa-hospital" },
            { name: "EDI Claims (837/835)", tier: "Expert", icon: "fa-file-medical" },
            { name: "Revenue Cycle", tier: "Proficient", icon: "fa-dollar-sign" },
            { name: "HIPAA Compliance", tier: "Expert", icon: "fa-shield-alt" },
            { name: "Healthcare Analytics", tier: "Proficient", icon: "fa-heartbeat" },
            { name: "Regulatory Reporting", tier: "Expert", icon: "fa-gavel" }
        ],

        tools: [
            { name: "Git/GitHub", tier: "Proficient", icon: "fa-git-alt" },
            { name: "Linux", tier: "Proficient", icon: "fa-linux" },
            { name: "Docker", tier: "Working", icon: "fa-docker" },
            { name: "VS Code", tier: "Proficient", icon: "fa-code" },
            { name: "systemd / self-hosting", tier: "Proficient", icon: "fa-server" }
        ],

        operations: [
            { name: "Project Management", tier: "Expert", icon: "fa-tasks" },
            { name: "Cross-Functional Leadership", tier: "Expert", icon: "fa-users" },
            { name: "Process Improvement", tier: "Expert", icon: "fa-chart-line" },
            { name: "Risk Mitigation", tier: "Proficient", icon: "fa-shield-alt" },
            { name: "Stakeholder Communication", tier: "Expert", icon: "fa-comments" }
        ],

        claims: [
            { name: "Claims Processing", tier: "Expert", icon: "fa-file-medical" },
            { name: "Claims Auditing", tier: "Expert", icon: "fa-search" },
            { name: "Claims Adjustments", tier: "Expert", icon: "fa-balance-scale" },
            { name: "COB / Third-Party Liability", tier: "Expert", icon: "fa-handshake" },
            { name: "Quality Assurance", tier: "Expert", icon: "fa-check-circle" },
            { name: "Regulatory Compliance", tier: "Expert", icon: "fa-gavel" }
        ],

        customerservice: [
            { name: "Customer Support", tier: "Expert", icon: "fa-headset" },
            { name: "Issue Resolution", tier: "Expert", icon: "fa-wrench" },
            { name: "Provider Relations", tier: "Expert", icon: "fa-user-md" },
            { name: "Training & Development", tier: "Expert", icon: "fa-chalkboard-teacher" },
            { name: "Documentation", tier: "Proficient", icon: "fa-file-alt" }
        ],

        aiTesting: [
            { name: "Prompt Engineering", tier: "Proficient", icon: "fa-robot" },
            { name: "LLM Evaluation & Benchmarking", tier: "Proficient", icon: "fa-brain" },
            { name: "Local Model Deployment", tier: "Proficient", icon: "fa-microchip" },
            { name: "Content Quality Assurance", tier: "Proficient", icon: "fa-check-double" },
            { name: "Test Case Design", tier: "Proficient", icon: "fa-clipboard-check" }
        ],

        agenticSystems: [
            { name: "Multi-Agent Decomposition", tier: "Proficient", icon: "fa-sitemap" },
            { name: "Browser Automation (Playwright)", tier: "Proficient", icon: "fa-robot" },
            { name: "Failure Pattern Recognition", tier: "Proficient", icon: "fa-exclamation-triangle" },
            { name: "Context Architecture", tier: "Proficient", icon: "fa-layer-group" },
            { name: "Specification Precision", tier: "Proficient", icon: "fa-file-contract" },
            { name: "Evaluation & Quality Judgment", tier: "Proficient", icon: "fa-balance-scale" }
        ]
    },
    
    experience: [
        {
            title: "Customer Care Specialist / EDI Analyst",
            company: "First Choice Health",
            location: "Remote",
            date: "February 2025 – Present",
            description: "Routes and processes incoming EDI claims to ensure accurate data entry and adjudication. Manages correspondence triage and customer inquiries regarding claim status.",
            highlights: [
                "Ensure accurate EDI claims routing and adjudication outcomes",
                "Manage correspondence triage and resolve customer inquiries on claim status",
                "Maintain compliance standards for claims data entry and processing"
            ],
            tags: ["EDI", "Claims Operations", "Process Improvement", "Healthcare"]
        },
        {
            title: "Association Manager",
            company: "WA State US Bowling Congress",
            location: "Spokane, WA",
            date: "August 2024 – August 2025",
            description: "Oversaw financial support, bookkeeping, and tournament direction for the Washington State division of the US Bowling Congress.",
            highlights: [
                "Managed organizational finances and bookkeeping",
                "Directed tournament operations and logistics at the state level",
                "Supported strategic planning and compliance for USBC programs"
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
            title: "Claims IT Applications Engineer (most recent of several roles)",
            company: "Kaiser Permanente",
            location: "Spokane, WA",
            date: "February 2007 – November 2023",
            description: "Sixteen years at Kaiser Permanente, progressing from provider-facing claims support into operations management and finally into claims IT engineering. Final role: VBA, SQL, and Python developer for claims automation and regulatory compliance, serving as Lead Engineer on the Transparency in Pricing Regulations implementation and as SQA Test Engineer for new system implementations.",
            highlights: [
                "Claims IT Applications Engineer (2021–2023) — Lead Engineer on Transparency in Pricing Regulations; VBA/SQL/Python claims automation; SQA test engineering for new implementations",
                "Lead Business Consultant Analyst / Lead Informaticist — executive-level claims and efficiency reporting, payment policy implementation, primary liaison between Claims IT and the Claims business unit; COVID-19 mitigation reporting to the CFO",
                "Claims Operations Manager — directed claims, adjustments, third-party liability, and coordination of benefits departments; owned project planning through closing",
                "Operations Supervisor, Closed File Review & Code Review — implemented automated tracking for the Code Review unit; managed inventory and coached staff to cost-containment goals",
                "Administrative Analyst II — claims data analysis, operational reporting, and regulatory research",
                "Provider Assistance Unit Specialist — provider inquiries on claims, contracts, and referrals; built training materials and onboarding"
            ],
            tags: ["VBA", "SQL", "Python", "Claims Automation", "Operations Management", "Regulatory Compliance", "Leadership"]
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
            title: "PDF Forge",
            description: "Free, open-source Acrobat-style PDF editor for Windows and Linux. Annotation, text editing with font matching, OCR for scanned pages, AcroForm filling, true redaction (content removed from the file, not just covered), watermarks, and encryption.",
            tech: ["Electron", "React", "pdf.js", "pdf-lib", "Tesseract OCR"],
            highlights: [
                "True redaction — marked content is removed and verified, with fallback to image flattening",
                "OCR-powered text editing for scanned documents",
                "Interactive form filling with field flattening"
            ],
            github: "https://github.com/tpawley2001/pdf-forge",
            demo: null
        },
        {
            title: "Open-Iris",
            description: "Self-hosted, Linux-first network video recorder built as an open alternative to commercial NVR software. Auto-optimizing camera grid, low-latency HLS sub-streams, and network camera discovery.",
            tech: ["Python", "FastAPI", "FFmpeg", "HLS", "Docker"],
            highlights: [
                "Live multi-camera grid that adapts as cameras are added or removed",
                "CIDR-based network scanning for camera discovery",
                "Runs on a home server or NAS"
            ],
            github: "https://github.com/tpawley2001/Open-Iris",
            demo: null
        },
        {
            title: "AuDDiobooks — TTS Audiobook Reader",
            description: "Self-hosted audiobook platform that turns EPUBs into narrated audiobooks using a local text-to-speech model, with AI-generated scene illustrations synced to playback position.",
            tech: ["Next.js", "TypeScript", "Python", "SQLite", "Kokoro TTS", "ComfyUI"],
            highlights: [
                "Local GPU TTS pipeline — no cloud service in the loop",
                "Scene illustrations generated per chapter and synced to playback",
                "Google Cast support and a companion Android app with OTA updates"
            ],
            github: "https://github.com/tpawley2001/Open_AuDDiobook",
            demo: null
        },
        {
            title: "Wyze Bolt Wi-Fi Bridge (ESP32)",
            description: "Brings a Bluetooth-only Wyze Lock Bolt fully into Home Assistant over Wi-Fi — lock/unlock, live state, and real-time battery — using an ESP32 as a BLE-to-Wi-Fi bridge, including reverse-engineering the lock's encrypted battery characteristic.",
            tech: ["ESPHome", "Python", "BLE", "Home Assistant", "MQTT"],
            highlights: [
                "ESP32 active Bluetooth proxy to reach a weak-radio BLE lock over LAN",
                "Live battery readings decrypted directly from the BLE characteristic",
                "Replaced an unreliable cloud polling integration"
            ],
            github: "https://github.com/tpawley2001/Wyze-Bolt-WiFi-Bridge-ESP32",
            demo: null
        },
        {
            title: "Automated Job Application Pipeline",
            description: "Python and Playwright automation that discovers postings across multiple applicant tracking systems (Taleo, NEOGOV, Workday, symplr), generates a per-job cover letter with a locally hosted LLM, and completes the submission end to end.",
            tech: ["Python", "Playwright", "Local LLMs", "SQLite", "systemd"],
            highlights: [
                "1,451 verified submissions across six ATS adapters",
                "Per-job cover letters generated from the posting's real job description",
                "Nightly scheduled runs with resumable drafts and submission verification"
            ],
            github: null,
            demo: null
        },
        {
            title: "ShellTab",
            description: "Cross-platform tabbed terminal emulator with a built-in FTP client, PTY-backed sessions, and a timed nudge system.",
            tech: ["Electron", "xterm.js", "node-pty"],
            highlights: [
                "Full PTY-backed terminal sessions",
                "Integrated FTP client alongside terminal tabs",
                "Windows and Linux support"
            ],
            github: "https://github.com/tpawley2001/shelltab",
            demo: null
        }
    ],
    
    education: [
        {
            degree: "High School Diploma",
            school: "John R. Rogers High School",
            location: "Spokane, WA",
            date: "",
            highlights: []
        }
    ],
    
    // Only certifications that can be verified. Do not add an entry here
    // without a credential ID or a working verification URL.
    certifications: [
        { name: "Google AI Professional Certificate", issuer: "Google", date: "2026",
          details: "7 courses: AI Fundamentals, AI for Brainstorming & Planning, AI for Research & Insights, AI for Writing & Communication, AI for Content Creation, AI for Data Analysis, AI for App Building. Built 20+ AI artifacts and vibe-coded custom AI solutions.",
          verifyUrl: "https://coursera.org/verify/professional-cert/QBZI8MSZMAX8" },
        { name: "FullbridgeX Certificate in Business and Data Analysis", issuer: "edX / Fullbridge", date: "",
          details: "Business and data analysis professional certificate" }
    ]
};

// AI Assistant Knowledge Base
const AI_KNOWLEDGE = {
    // Job compatibility analysis
    analyzeJobFit: function(jobDescription) {
        // Each entry must correspond to work Tyson has actually done.
        // "years" is time doing that thing, not time employed somewhere that had it.
        // If a skill is not here, the honest answer is that he does not have it.
        const keywords = {
            // Claims & healthcare operations — 16 yrs Kaiser + 7 yrs Delta Dental
            "claims": { strength: "expert", years: 23 },
            "claims processing": { strength: "expert", years: 23 },
            "claims adjudication": { strength: "expert", years: 23 },
            "claims examiner": { strength: "expert", years: 23 },
            "claims analyst": { strength: "expert", years: 23 },
            "claims specialist": { strength: "expert", years: 23 },
            "claims auditor": { strength: "expert", years: 16 },
            "claims adjustment": { strength: "expert", years: 16 },
            "medical claims": { strength: "expert", years: 16 },
            "dental claims": { strength: "expert", years: 7 },
            "coordination of benefits": { strength: "expert", years: 16 },
            "third party liability": { strength: "expert", years: 16 },
            "subrogation": { strength: "proficient", years: 10 },
            "overpayment": { strength: "expert", years: 16 },
            "edi": { strength: "expert", years: 16 },
            "adjudication": { strength: "expert", years: 23 },
            "healthcare": { strength: "expert", years: 23 },
            "health insurance": { strength: "expert", years: 23 },
            "insurance": { strength: "expert", years: 23 },
            "revenue cycle": { strength: "proficient", years: 16 },
            "benefits": { strength: "expert", years: 16 },
            "eligibility": { strength: "expert", years: 16 },
            "hipaa": { strength: "expert", years: 23 },
            "protected health information": { strength: "expert", years: 23 },
            "regulatory compliance": { strength: "expert", years: 16 },
            "payment policy": { strength: "proficient", years: 8 },
            "transparency in pricing": { strength: "expert", years: 2 },

            // Operations & management
            "operations manager": { strength: "expert", years: 12 },
            "operations": { strength: "expert", years: 16 },
            "project manager": { strength: "expert", years: 12 },
            "project management": { strength: "expert", years: 12 },
            "process improvement": { strength: "expert", years: 16 },
            "cross-functional": { strength: "expert", years: 16 },
            "stakeholder": { strength: "expert", years: 12 },
            "team lead": { strength: "expert", years: 12 },
            "supervisor": { strength: "expert", years: 12 },
            "coaching": { strength: "expert", years: 12 },
            "mentoring": { strength: "expert", years: 12 },
            "training": { strength: "expert", years: 20 },
            "onboarding": { strength: "expert", years: 16 },
            "workforce management": { strength: "proficient", years: 10 },
            "vendor management": { strength: "proficient", years: 8 },
            "quality assurance": { strength: "expert", years: 16 },
            "bookkeeping": { strength: "proficient", years: 1 },

            // Customer / provider facing
            "customer service": { strength: "expert", years: 23 },
            "customer support": { strength: "expert", years: 23 },
            "customer care": { strength: "expert", years: 23 },
            "provider relations": { strength: "expert", years: 16 },
            "call center": { strength: "expert", years: 16 },
            "issue resolution": { strength: "expert", years: 23 },
            "escalation": { strength: "expert", years: 16 },
            "documentation": { strength: "proficient", years: 16 },

            // Data & technical — real, hands-on
            "sql": { strength: "expert", years: 12 },
            "vba": { strength: "expert", years: 10 },
            "python": { strength: "proficient", years: 4 },
            "excel": { strength: "expert", years: 20 },
            "tableau": { strength: "proficient", years: 4 },
            "power bi": { strength: "proficient", years: 5 },
            "data analyst": { strength: "proficient", years: 10 },
            "data analysis": { strength: "proficient", years: 12 },
            "business analyst": { strength: "expert", years: 10 },
            "reporting": { strength: "expert", years: 16 },
            "dashboard": { strength: "proficient", years: 8 },
            "etl": { strength: "proficient", years: 6 },
            "automation": { strength: "expert", years: 10 },
            "applications engineer": { strength: "proficient", years: 2 },
            "systems analyst": { strength: "proficient", years: 8 },
            "linux": { strength: "proficient", years: 4 },
            "docker": { strength: "working", years: 2 },
            "git": { strength: "proficient", years: 4 },
            "javascript": { strength: "working", years: 3 },
            "typescript": { strength: "working", years: 2 },
            "api": { strength: "proficient", years: 4 },
            "rest api": { strength: "proficient", years: 4 },
            "self-hosted": { strength: "proficient", years: 4 },

            // AI / agentic — the last two years of daily practice
            "prompt engineering": { strength: "proficient", years: 2 },
            "llm": { strength: "proficient", years: 2 },
            "large language model": { strength: "proficient", years: 2 },
            "agentic": { strength: "proficient", years: 2 },
            "multi-agent": { strength: "proficient", years: 2 },
            "ai model testing": { strength: "proficient", years: 2 },
            "model evaluation": { strength: "proficient", years: 2 },
            "playwright": { strength: "proficient", years: 2 },
            "browser automation": { strength: "proficient", years: 2 },
            "rag": { strength: "working", years: 1 },
            "fine-tuning": { strength: "working", years: 1 }
        };

        // Requirements Tyson does NOT meet. These are reported honestly rather
        // than silently ignored. Never delete an entry here to improve a score.
        const knownGaps = {
            "bachelor": "No bachelor's degree — Google AI Professional Certificate; 23 years of directly relevant experience",
            "bachelor's": "No bachelor's degree — Google AI Professional Certificate; 23 years of directly relevant experience",
            "master": "No master's degree",
            "mba": "No MBA",
            "phd": "No doctorate",
            "rn ": "Not a licensed Registered Nurse",
            "registered nurse": "Not a licensed Registered Nurse",
            "lpn": "Not a licensed practical nurse",
            "nursing": "No nursing license or clinical care background",
            "clinician": "Not a clinician — his healthcare experience is claims and operations, not care delivery",
            "physician": "Not a physician",
            "pharmacist": "Not a pharmacist",
            "attorney": "Not an attorney; no JD or bar admission",
            "juris doctor": "Not an attorney; no JD or bar admission",
            "bar admission": "Not an attorney; no JD or bar admission",
            "cpa": "Not a CPA",
            "pe license": "Not a licensed professional engineer",
            "security clearance": "No active security clearance",
            "bilingual": "English only",
            "spanish": "Does not speak Spanish",
            "fluent in": "English only",
            "machine learning engineer": "Uses and evaluates ML models; has not worked as an ML engineer",
            "data scientist": "Not a data scientist — no statistical modeling or ML development background",
            "epic certified": "Worked alongside Epic systems but holds no Epic certification",
            "certified coder": "Not a certified medical coder (no CPC/CCS)",
            "cpc": "Not a certified medical coder",
            "actuar": "No actuarial credentials"
        };

        const jobLower = ' ' + jobDescription.toLowerCase() + ' ';

        // Word-boundary match so "sql" doesn't fire on "mysqli" and short terms
        // like "r" or "api" don't match arbitrary substrings.
        const mentions = (term) => {
            const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(jobLower);
        };

        const matched = [];
        const missing = [];

        for (const [skill, data] of Object.entries(keywords)) {
            if (mentions(skill)) matched.push({ skill, match: true, ...data });
        }
        for (const [gap, note] of Object.entries(knownGaps)) {
            if (mentions(gap.trim())) missing.push({ requirement: gap.trim(), note });
        }

        // Honest scoring: proportion of the role's recognisable requirements that
        // Tyson actually covers, weighted by depth. No floor, no fixed baseline.
        const depth = { expert: 1.0, proficient: 0.7, working: 0.4 };
        const signals = matched.length + missing.length;
        let fitPercentage = 0;

        if (signals > 0) {
            const covered = matched.reduce((sum, m) => sum + depth[m.strength], 0);
            fitPercentage = Math.round((covered / signals) * 100);
            // Each unmet hard requirement is a real deduction.
            fitPercentage = Math.max(0, fitPercentage - missing.length * 12);
            fitPercentage = Math.min(95, fitPercentage);
        }

        const recommendation =
            signals === 0                        ? "Not enough detail to assess — paste the full job description" :
            missing.length > 0 && matched.length === 0 ? "Not a fit — unmet hard requirements" :
            fitPercentage >= 80                  ? "Strong fit" :
            fitPercentage >= 60                  ? "Good fit" :
            fitPercentage >= 40                  ? "Partial fit — some real gaps" :
                                                   "Likely not a fit";

        return { fitPercentage, matched, missing, recommendation };
    },
    
    // Response templates
    responses: {
        greeting: "Hello! I'm Tyson's AI assistant. I can help you understand his skills, experience, and assess job fit. What would you like to know?",
        
        skills: `Tyson's strongest areas, honestly ranked:

**Expert** — years of daily professional use:
• Claims processing, auditing, adjustments, COB/third-party liability (23 years)
• Healthcare operations and team leadership (16 years)
• SQL and Excel/VBA (10–20 years)
• Regulatory compliance and reporting (16 years)
• Customer and provider support (23 years)

**Proficient** — used regularly to ship real work:
• Python, Tableau, Power BI (5 years), Linux, Git, ETL pipelines
• Prompt engineering, LLM evaluation, browser automation (Playwright)
• Project management and process improvement

**Working knowledge** — productive, still learning:
• Docker, JavaScript/TypeScript

Worth naming the boundary: he's payer-side claims and operations, not clinical.
No nursing or coding credentials, and no degree — the technical depth comes from
23 years on the job plus the systems he builds and runs himself.`,

        healthcare: `Yes — 23 years of it, all on the payer and claims side:

**Operations & Claims:**
• Kaiser Permanente, 2007–2023: provider support → operations management → claims IT engineering
• Directed claims, adjustments, third-party liability, and COB departments
• Delta Dental of California, 2000–2007: dental claims processing and training
• Currently EDI claims routing and adjudication at First Choice Health

**Systems & Compliance:**
• EDI claims (837/835) routing, adjudication, and correspondence triage
• Lead Engineer on Kaiser's Transparency in Pricing regulatory implementation
• VBA/SQL/Python claims automation and regulatory reporting
• HIPAA compliance and healthcare data handling

To be clear about the shape of it: this is payer-side claims and operations
experience, not clinical care. He isn't a clinician and doesn't hold clinical
licenses or coding certifications.`,

        projects: `Here's what Tyson has actually built — all of these are public, and the code is on GitHub:

1. **PDF Forge** - Acrobat-style PDF editor (Electron/React) with true redaction and OCR text editing — github.com/tpawley2001/pdf-forge
2. **Open-Iris** - Self-hosted Linux network video recorder with live multi-camera HLS — github.com/tpawley2001/Open-Iris
3. **AuDDiobooks** - EPUB-to-audiobook platform using a local GPU TTS model, with AI-generated scene art — github.com/tpawley2001/Open_AuDDiobook
4. **Wyze Bolt Wi-Fi Bridge** - ESP32 BLE-to-Wi-Fi bridge that brought a Bluetooth-only smart lock into Home Assistant, including decrypting its battery characteristic — github.com/tpawley2001/Wyze-Bolt-WiFi-Bridge-ESP32
5. **ShellTab** - Cross-platform tabbed terminal with built-in FTP — github.com/tpawley2001/shelltab
6. **Job Application Pipeline** - Python/Playwright automation across six applicant tracking systems, 1,451 verified submissions, per-job cover letters from a locally hosted LLM (private repo)

**Operations Achievements:**
• Led EDI claims routing optimization at First Choice Health
• Managed tournament operations and finances for WA State US Bowling Congress

These are working systems he uses daily, not demos.`,

        experience: `Tyson has 23 years of healthcare claims and operations experience:

**Current**: Customer Care Specialist / EDI Analyst at First Choice Health (2025-Present)
- Lead analysis of operational processes for EDI claims routing
- Collaborate cross-functionally with multiple departments

**Association Manager** at WA State US Bowling Congress (2024-2025)
- Lead project management of organizational initiatives
- Facilitate communication between teams, stakeholders, and leadership

**Team Lead, Claims Processing** at Sedgwick Government Solutions (2024)
- Led cross-functional teams in claims inventory management
- Optimized workflow processes for claims processing

**Kaiser Permanente** (February 2007 – November 2023) — sixteen years, several roles:
- Claims IT Applications Engineer (2021–2023): Lead Engineer on Transparency in Pricing regulations; VBA/SQL/Python claims automation; SQA testing
- Lead Business Consultant Analyst / Lead Informaticist: executive claims and efficiency reporting, payment policy implementation, CFO reporting during COVID-19
- Claims Operations Manager: directed claims, adjustments, third-party liability, and COB departments
- Operations Supervisor, Closed File Review & Code Review: built automated tracking for the Code Review unit
- Administrative Analyst II, then Provider Assistance Unit Specialist earlier in the tenure

**Delta Dental Plan of California** (March 2000 – February 2007)
- Trainer and Acting Supervisor for claims processing teams`,

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
