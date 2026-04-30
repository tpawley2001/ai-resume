# Tyson Pawley - Interactive AI Resume

A modern, interactive resume website with an AI assistant that helps visitors understand my skills and assess job fit.

![AI Resume Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=AI+Interactive+Resume)

## Features

### 🤖 AI Skills Assistant
- Interactive chat interface powered by JavaScript AI
- Answers questions about skills, experience, and projects
- **Job Fit Analysis**: Paste any job description to get an instant compatibility assessment
- Smart keyword matching and skill profiling

### 💼 Professional Sections
- **Skills**: Data Analysis, Programming, Healthcare IT, Tools & Platforms
- **Experience**: Timeline view of professional history
- **Projects**: Featured work with descriptions and tech stacks
- **Contact**: Direct links to email, LinkedIn, and GitHub

### 🎨 Modern Design
- Dark theme with gradient accents
- Fully responsive (mobile-friendly)
- Smooth animations and transitions
- Professional color scheme

## Live Demo

Visit the live site: [https://tpawley2001.github.io/ai-resume](https://tpawley2001.github.io/ai-resume)

## How to Use

### For Visitors
1. **Ask the AI**: Type questions like:
   - "What are your top skills?"
   - "Do you have healthcare experience?"
   - "Tell me about your projects"

2. **Check Job Fit**: Paste a job description to see:
   - Match percentage
   - Matching skills breakdown
   - Recommendation on fit

3. **Browse Sections**: Use the navigation to explore:
   - Skills & Technologies
   - Professional Experience
   - Featured Projects

### For Developers

#### Local Development
```bash
# Clone the repository
git clone https://github.com/tpawley2001/ai-resume.git

# Navigate to project
cd ai-resume

# Open in browser (or use a local server)
open index.html

# Or with Python
python -m http.server 8000
```

#### Customization
Edit `skills-data.js` to update:
- Personal information
- Skills and proficiency levels
- Work experience
- Projects
- AI response templates

## File Structure

```
ai-resume/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Interactive functionality
├── skills-data.js      # Resume data and AI knowledge base
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment
```

## Deployment

### GitHub Pages (Recommended)

1. **Fork this repository** or create a new one
2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Save
3. **Your site will be live** at `https://yourusername.github.io/ai-resume`

### Custom Domain

1. Add a `CNAME` file with your domain:
   ```
   www.yourdomain.com
   ```
2. Configure DNS settings with your provider
3. Update GitHub Pages settings with custom domain

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Static website hosting
- **Firebase**: Hosting service

## AI Assistant Features

### Job Description Analysis
The AI can analyze any job posting and provide:
- **Match Percentage**: Overall compatibility score
- **Skill Breakdown**: Which skills match and proficiency levels
- **Recommendation**: Whether it's a good fit
- **Gap Analysis**: Areas where skills may need development

### Sample Questions
- "Is Tyson a good fit for a Senior Data Analyst role?"
- "What healthcare experience does he have?"
- "Can he work with Epic systems?"
- "Paste job description here..."

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with variables and animations
- **Vanilla JavaScript** - No frameworks, lightweight
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License - feel free to use this template for your own resume!

## Contact

- **Email**: tpawley2001@gmail.com
- **LinkedIn**: [linkedin.com/in/tysonpawley](https://linkedin.com/in/tysonpawley)
- **GitHub**: [github.com/tpawley2001](https://github.com/tpawley2001)

---

**Built with ❤️ and AI**
