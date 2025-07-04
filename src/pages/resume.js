"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, Zap, User, Briefcase, GraduationCap, Award } from 'lucide-react';

// Space management algorithm
const calculateContentDensity = (content) => {
  let charCount = 0;
  const countChars = (obj) => {
    if (typeof obj === 'string') {
      charCount += obj.length;
    } else if (Array.isArray(obj)) {
      obj.forEach(item => countChars(item));
    } else if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach(value => countChars(value));
    }
  };
  countChars(content);
  const maxCharsPerPage = 3000;
  const pages = Math.ceil(charCount / maxCharsPerPage) || 1;
  const density = Math.min(100, Math.round((charCount / (pages * maxCharsPerPage)) * 100));
  return { density, pages, charCount };
};

// Adaptive content renderer
const AdaptiveSection = ({ title, children, density, maxLines = 10 }) => {
  const baseFontSize = 14;
  const adjustedFontSize = baseFontSize - (density > 70 ? 1 : 0);
  return (
    <div className={`mb-${density > 80 ? 4 : 6}`}>
      <h3 className={`text-[${adjustedFontSize}px] font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3`}>
        {title}
      </h3>
      <div className={`text-gray-700 leading-${density > 70 ? 'tight' : 'relaxed'}`}>
        {children}
      </div>
    </div>
  );
};

const ResumeGenerator = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [generatedResume, setGeneratedResume] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [docType, setDocType] = useState('resume');
  const [contentDensity, setContentDensity] = useState({ density: 50, pages: 1 });
  const contentRef = useRef(null);

  const portfolioData = {
    name: "Muhammad Younas",
    title: "Full Stack Developer",
    experience: "1+ Years Experience",
    stats: {
      projects: "6+",
      technologies: "10+",
      clients: "5+"
    },
    contact: {
      email: "younaskk120@gmail.com",
      phone: "+92 313 0812324",
      location: "Quetta, Balochistan, Pakistan",
      portfolio: "https://muhammad-younas.netlify.app/",
      linkedin: "linkedin.com/in/muhammad-younas",
      github: "github.com/muhammad-younas"
    },
    summary: "Passionate Full Stack Developer with 1+ years of hands-on experience in modern web and mobile development. Proven track record of delivering scalable applications using cutting-edge technologies including Next.js, Flutter, and cloud services.",
    keySkills: [
      "Full Stack Web Development",
      "Flutter Mobile App Development", 
      "UI/UX Design & Implementation",
      "Database Design & Management",
      "REST API Development & Integration",
      "Cloud Services & Deployment",
      "TypeScript & Modern JavaScript",
      "Performance Optimization",
      "Testing & CI/CD Pipelines",
      "Agile Development Methodologies"
    ],
    skills: {
      frontend: {
        "Next.js": 85, "React.js": 80, "Flutter": 90, "TypeScript": 75,
        "JavaScript": 85, "Tailwind CSS": 95, "HTML5/CSS3": 90,
        "Redux/State Management": 70, "Responsive Design": 90
      },
      backend: {
        "Node.js": 75, "REST APIs": 90, "GraphQL": 60, "Firebase": 80,
        "Supabase": 75, "MySQL": 80, "PostgreSQL": 70, "MongoDB": 65
      },
      mobile: {
        "Flutter": 90, "Dart": 85, "Android Development": 80,
        "Cross-platform Development": 85, "Mobile UI/UX": 80
      },
      tools: {
        "Git/GitHub": 90, "Docker": 60, "CI/CD": 65, "Testing (Jest)": 70,
        "Figma": 60, "Postman": 85, "VS Code": 95, "Vercel": 80, "Netlify": 75
      }
    },
    experience: [
      {
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        period: "2022 - Present",
        location: "Remote",
        achievements: [
          "Developed and deployed 6+ full-stack applications for international clients",
          "Specialized in Next.js, Flutter, and modern web technologies",
          "Achieved 98% client satisfaction rate with on-time project delivery",
          "Built scalable solutions serving 1000+ active users",
          "Implemented responsive designs reducing mobile bounce rate by 40%"
        ]
      },
      {
        title: "Junior Developer",
        company: "Local Tech Startup",
        period: "2021 - 2022",
        location: "Quetta, Pakistan",
        achievements: [
          "Contributed to 3 major product releases using React and Node.js",
          "Collaborated with cross-functional teams in Agile environment",
          "Reduced application load time by 35% through optimization",
          "Mentored 2 junior developers in modern development practices"
        ]
      }
    ],
    projects: [
      {
        name: "offline_llm – Offline LLM Chatbot",
        category: "AI/ML",
        period: "2024",
        description: "A cross-platform, privacy-first chatbot application that runs large language models locally without internet connectivity.",
        features: [
          "Local LLM inference with optimized performance",
          "Cross-platform support (iOS, Android, Desktop)",
          "Advanced model management system",
          "Memory-efficient architecture",
          "Real-time chat interface with markdown support"
        ],
        tech: ["Flutter", "Dart", "C/C++", "FFI", "TensorFlow Lite"],
        impact: "Achieved 90% accuracy in offline responses with 60% faster inference than cloud alternatives",
        complexity: "Advanced"
      },
      {
        name: "EduSeminarsPK",
        category: "Web Application",
        period: "2023",
        description: "Comprehensive platform for academic seminars, scholarships, and educational opportunities in Pakistan.",
        features: [
          "Dynamic seminar listings with real-time updates",
          "Advanced search and filtering system",
          "User registration and profile management",
          "Responsive design with smooth animations",
          "Admin dashboard for content management"
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
        impact: "Served 500+ students with 85% user retention rate",
        complexity: "Intermediate"
      },
      {
        name: "Cine Stream",
        category: "Mobile Application",
        period: "2023",
        description: "Feature-rich cross-platform movie streaming application with advanced search and streaming capabilities.",
        features: [
          "Advanced movie search with multiple filters",
          "High-quality video streaming with adaptive bitrate",
          "Custom backend API integration",
          "Offline download functionality",
          "User preferences and watchlist management"
        ],
        tech: ["Flutter", "Dart", "Node.js", "Express", "YTS API", "FFmpeg"],
        impact: "1000+ downloads with 4.5-star rating on app stores",
        complexity: "Advanced"
      },
      {
        name: "TechBlog Pro – Modern Next.js Tech Blog",
        category: "Web Application",
        period: "2024",
        description: "A professional, modern tech blog built with Next.js (App Router) and TypeScript. Features a scalable content structure, advanced SEO, and a clean, responsive UI.",
        features: [
          "Centralized, extensible SEO system with structured data (JSON-LD) for all page types",
          "Compliant with Next.js App Directory best practices (server/client boundaries, static params, etc.)",
          "Dynamic blog post pages with related articles, category navigation, and share functionality",
          "Dark mode support with focus on readability and accessibility",
          "Modular component architecture (ads, newsletter, navigation, etc.)",
          "Content sourced from markdown files, supporting authors, categories, and tags",
          "Optimized for performance and mobile devices"
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Contentlayer", "React", "Lucide Icons"],
        impact: "Led the refactor and modernization of the SEO system, improved dark mode support, and implemented best practices for maintainability and scalability.",
        complexity: "Advanced"
      }
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Balochistan",
      location: "Quetta, Pakistan",
      period: "2020 - 2024",
      gpa: "3.7/4.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Mobile App Development",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    },
    certifications: [
      {
        name: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Coursera)",
        date: "2023",
        credentialId: "ABC123XYZ"
      },
      {
        name: "Google IT Support Professional Certificate",
        issuer: "Google (Coursera)",
        date: "2022",
        credentialId: "DEF456UVW"
      },
      {
        name: "Flutter Development Bootcamp",
        issuer: "Udemy",
        date: "2023",
        credentialId: "GHI789RST"
      }
    ],
    achievements: [
      "Top Rated Freelancer on Fiverr with 100+ completed projects",
      "Winner, University Annual Hackathon (2022)",
      "Best Final Year Project Award - University of Balochistan (2024)",
      "Google Developer Student Club - Core Team Member (2022-2023)"
    ]
  };

  const matchSkills = (jobDesc) => {
    const allSkills = {
      ...portfolioData.skills.frontend,
      ...portfolioData.skills.backend,
      ...portfolioData.skills.mobile,
      ...portfolioData.skills.tools
    };

    const jobDescLower = jobDesc.toLowerCase();
    const matchedSkills = [];

    Object.entries(allSkills).forEach(([skill, proficiency]) => {
      const variations = [
        skill.toLowerCase(),
        skill.toLowerCase().replace(/[^a-z0-9]/g, ''),
        skill.toLowerCase().replace('js', 'javascript'),
        skill.toLowerCase().replace('.js', '')
      ];
      if (variations.some(v => jobDescLower.includes(v))) {
        matchedSkills.push({ 
          skill, 
          proficiency, 
          relevance: calculateRelevance(skill, jobDescLower) 
        });
      }
    });

    return matchedSkills
      .sort((a, b) => b.relevance - a.relevance || b.proficiency - a.proficiency)
      .slice(0, 15);
  };

  const calculateRelevance = (skill, jobDesc) => {
    const escaped = skill.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const occurrences = (jobDesc.match(new RegExp(escaped, 'g')) || []).length;
    const position = jobDesc.indexOf(skill.toLowerCase());
    const early = position < jobDesc.length / 3 ? 2 : 1;
    return occurrences * early;
  };

  const matchProjects = (matchedSkills, jobDesc) => {
    const skillNames = matchedSkills.map(s => s.skill.toLowerCase());
    const jobDescLower = jobDesc.toLowerCase();
    
    return portfolioData.projects.map(project => {
      let score = 0;
      project.tech.forEach(tech => {
        if (skillNames.some(skill => tech.toLowerCase().includes(skill))) score += 3;
      });
      if (jobDescLower.includes('mobile') && project.category.includes('Mobile')) score += 4;
      if (jobDescLower.includes('web') && project.category.includes('Web')) score += 4;
      if (jobDescLower.includes('ai') && project.category.includes('AI')) score += 5;
      if (jobDescLower.includes('senior') && project.complexity === 'Advanced') score += 3;
      return { ...project, score };
    }).sort((a, b) => b.score - a.score);
  };

  const generateTailoredSummary = (jobTitle, companyName, matchedSkills) => {
    const topSkills = matchedSkills.slice(0, 4).map(s => s.skill).join(', ');
    const roleType = jobTitle.toLowerCase().includes('senior') ? 'Senior' : '';
    const focus = jobTitle.toLowerCase().includes('mobile') ? 'mobile application' :
                  jobTitle.toLowerCase().includes('frontend') ? 'frontend' :
                  jobTitle.toLowerCase().includes('backend') ? 'backend' : 'full-stack';
    
    return `${roleType} Full Stack Developer with 1+ years of specialized experience in ${topSkills}. Proven track record of delivering scalable ${focus} solutions with expertise in modern development practices. ${companyName ? `Excited to contribute innovative solutions at ${companyName}.` : 'Passionate about creating impactful digital experiences that drive business growth.'}`;
  };

  useEffect(() => {
    if (generatedResume) {
      const densityData = calculateContentDensity({
        summary: generatedResume.summary,
        skills: generatedResume.skills,
        projects: generatedResume.projects,
        experience: portfolioData.experience,
        education: portfolioData.education
      });
      setContentDensity(densityData);
    }
  }, [generatedResume]);

  const getFontSize = (baseSize) => {
    if (contentDensity.density > 80) return baseSize - 1;
    if (contentDensity.density < 40) return baseSize + 1;
    return baseSize;
  };
  const getLineHeight = () => {
    if (contentDensity.density > 75) return 'tight';
    if (contentDensity.density < 45) return 'relaxed';
    return 'normal';
  };
  const getSpacing = (base) => {
    if (contentDensity.density > 80) return base - 1;
    if (contentDensity.density < 40) return base + 1;
    return base;
  };
  const renderAdaptiveContent = (content, maxItems) => {
    if (!content) return [];
    const itemsToShow = Math.min(
      maxItems,
      Math.max(2, Math.floor(maxItems * (80 / (contentDensity.density || 80))))
    );
    if (Array.isArray(content)) return content.slice(0, itemsToShow);
    if (typeof content === 'object') return Object.entries(content).slice(0, itemsToShow);
    return [];
  };

  // --- Adaptive Resume Content ---
  const generateResumeContent = (data) => {
    const fontSize = getFontSize(14);
    const lineHeight = getLineHeight();
    const spacing = getSpacing(6);
    return (
      <div className="bg-white text-black" ref={contentRef} style={{ fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.4' }}>
        <div className="p-8" style={{ minHeight: '11in' }}>
          {/* Header */}
          <div className={`text-center border-b-2 border-blue-600 pb-${spacing} mb-${spacing}`}>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{portfolioData.name}</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-3">{jobTitle || portfolioData.title}</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>{portfolioData.contact.email}</span>
              <span>{portfolioData.contact.phone}</span>
              <span>{portfolioData.contact.location}</span>
              <span className="text-blue-600">{portfolioData.contact.portfolio}</span>
            </div>
          </div>
          {/* Professional Summary */}
          <AdaptiveSection title="PROFESSIONAL SUMMARY" density={contentDensity.density}>
            <p className={`text-gray-700 leading-${lineHeight}`}>{data.summary}</p>
          </AdaptiveSection>
          {/* Core Competencies */}
          <AdaptiveSection title="CORE COMPETENCIES" density={contentDensity.density}>
            <div className="grid grid-cols-2 gap-2">
              {renderAdaptiveContent(data.keySkills, 8).map((skill, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span className={`text-gray-700 text-[${fontSize}px]`}>{skill}</span>
                </div>
              ))}
            </div>
          </AdaptiveSection>
          {/* Technical Skills */}
          <AdaptiveSection title="TECHNICAL SKILLS" density={contentDensity.density}>
            <div className="grid grid-cols-3 gap-4">
              {renderAdaptiveContent(data.skills, 12).map((s, i) => (
                <div key={i} className={`text-[${fontSize}px]`}>
                  <span className="font-medium text-gray-800">{s.skill}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${s.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </AdaptiveSection>
          {/* Professional Experience */}
          <AdaptiveSection title="PROFESSIONAL EXPERIENCE" density={contentDensity.density}>
            {renderAdaptiveContent(portfolioData.experience, 2).map((exp, i) => (
              <div key={i} className={`mb-${spacing}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-blue-600 font-medium">{exp.company} | {exp.location}</p>
                  </div>
                  <span className={`text-[${fontSize}px] text-gray-600 font-medium`}>{exp.period}</span>
                </div>
                <ul className={`list-disc list-inside text-[${fontSize}px] text-gray-700 space-y-1 ml-2`}>
                  {renderAdaptiveContent(exp.achievements, 3).map((achievement, j) => (
                    <li key={j}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </AdaptiveSection>
          {/* Key Projects */}
          <AdaptiveSection title="KEY PROJECTS" density={contentDensity.density}>
            {renderAdaptiveContent(data.projects, 2).map((project, i) => (
              <div key={i} className={`mb-${spacing}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{project.name}</h4>
                  <span className={`text-[${fontSize}px] text-gray-600`}>{project.period}</span>
                </div>
                <p className={`text-[${fontSize}px] text-gray-700 mb-2`}>{project.description}</p>
                <p className={`text-[${fontSize-2}px] text-blue-600 font-medium`}>
                  <strong>Technologies:</strong> {project.tech.join(', ')}
                </p>
                {project.impact && (
                  <p className={`text-[${fontSize-2}px] text-green-600 font-medium mt-1`}>
                    <strong>Impact:</strong> {project.impact}
                  </p>
                )}
              </div>
            ))}
          </AdaptiveSection>
        </div>
        {/* Page 2 */}
        <div className="p-8" style={{ pageBreakBefore: 'always', minHeight: '11in' }}>
          {/* Education */}
          <AdaptiveSection title="EDUCATION" density={contentDensity.density}>
            <div className="mb-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">{portfolioData.education.degree}</h4>
                  <p className="text-blue-600 font-medium">{portfolioData.education.institution}</p>
                  <p className={`text-[${fontSize}px] text-gray-600`}>{portfolioData.education.location}</p>
                </div>
                <div className="text-right">
                  <span className={`text-[${fontSize}px] text-gray-600 font-medium`}>{portfolioData.education.period}</span>
                  <p className={`text-[${fontSize}px] text-gray-700`}>GPA: {portfolioData.education.gpa}</p>
                </div>
              </div>
            </div>
          </AdaptiveSection>
          {/* Certifications */}
          <AdaptiveSection title="CERTIFICATIONS" density={contentDensity.density}>
            {renderAdaptiveContent(portfolioData.certifications, 3).map((cert, i) => (
              <div key={i} className={`mb-${getSpacing(2)} flex justify-between`}>
                <div>
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <p className={`text-[${fontSize}px] text-blue-600`}>{cert.issuer}</p>
                </div>
                <span className={`text-[${fontSize}px] text-gray-600`}>{cert.date}</span>
              </div>
            ))}
          </AdaptiveSection>
          {/* Achievements */}
          <AdaptiveSection title="ACHIEVEMENTS & AWARDS" density={contentDensity.density}>
            <ul className={`list-disc list-inside text-[${fontSize}px] text-gray-700 space-y-1`}>
              {renderAdaptiveContent(portfolioData.achievements, 5).map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </AdaptiveSection>
          {/* Additional Information */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className={`text-[${fontSize+2}px] font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3`}>
                LANGUAGES
              </h3>
              <ul className={`text-[${fontSize}px] text-gray-700 space-y-1`}>
                <li><strong>English:</strong> Professional Proficiency</li>
                <li><strong>Urdu:</strong> Native</li>
                <li><strong>Balochi:</strong> Conversational</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-[${fontSize+2}px] font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3`}>
                INTERESTS
              </h3>
              <ul className={`text-[${fontSize}px] text-gray-700 space-y-1`}>
                <li>Open Source Contribution</li>
                <li>AI/ML Research</li>
                <li>Tech Blogging</li>
                <li>Community Mentoring</li>
              </ul>
            </div>
          </div>
          {contentDensity.density < 60 && (
            <div className="mt-8">
              <h3 className={`text-[${fontSize+2}px] font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3`}>
                ADDITIONAL SKILLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Leadership', 'Agile Methodology', 'Technical Documentation', 'Client Communication'].map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Adaptive CV Content ---
  const generateCVContent = (data) => (
    <div className="bg-white text-black" style={{ fontFamily: 'Times, serif', lineHeight: '1.5' }}>
      {/* Page 1 */}
      <div className="p-8" style={{ minHeight: '11in' }}>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{portfolioData.name}</h1>
          <h2 className="text-2xl text-blue-700 mb-4">{jobTitle || portfolioData.title}</h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{portfolioData.contact.email} | {portfolioData.contact.phone}</p>
            <p>{portfolioData.contact.location}</p>
            <p className="text-blue-600">{portfolioData.contact.portfolio}</p>
            <p>LinkedIn: {portfolioData.contact.linkedin} | GitHub: {portfolioData.contact.github}</p>
          </div>
        </div>

        {/* Professional Profile */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">PROFESSIONAL PROFILE</h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            {data.summary} Demonstrated expertise in full-stack development with a strong foundation in computer science principles. 
            Committed to continuous learning and contributing to the advancement of software engineering practices through research and development.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">RESEARCH INTERESTS</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Artificial Intelligence and Machine Learning Applications</li>
            <li>Mobile Computing and Cross-Platform Development</li>
            <li>Web Technologies and Performance Optimization</li>
            <li>Human-Computer Interaction and User Experience Design</li>
            <li>Software Engineering Best Practices and Methodologies</li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">EDUCATION</h3>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-bold text-gray-900">{portfolioData.education.degree}</h4>
                <p className="text-blue-700 font-medium text-lg">{portfolioData.education.institution}</p>
                <p className="text-gray-600">{portfolioData.education.location}</p>
              </div>
              <div className="text-right">
                <span className="font-medium text-gray-700">{portfolioData.education.period}</span>
                <p className="text-gray-700">CGPA: {portfolioData.education.gpa}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="font-medium text-gray-800 mb-2">Relevant Coursework:</p>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-700">
                {portfolioData.education.relevantCourses.map((course, i) => (
                  <div key={i}>• {course}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h3>
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-700 font-medium text-lg">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <span className="font-medium text-gray-700">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {exp.achievements.map((achievement, j) => (
                  <li key={j}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Page 2 */}
      <div className="p-8" style={{ pageBreakBefore: 'always', minHeight: '11in' }}>
        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">TECHNICAL COMPETENCIES</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Frontend Development</h4>
              {Object.entries(portfolioData.skills.frontend).map(([skill, level]) => (
                <div key={skill} className="mb-1 text-sm">
                  <span className="text-gray-700">{skill}: </span>
                  <span className="font-medium">{level}%</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Backend Development</h4>
              {Object.entries(portfolioData.skills.backend).map(([skill, level]) => (
                <div key={skill} className="mb-1 text-sm">
                  <span className="text-gray-700">{skill}: </span>
                  <span className="font-medium">{level}%</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Mobile Development</h4>
              {Object.entries(portfolioData.skills.mobile).map(([skill, level]) => (
                <div key={skill} className="mb-1 text-sm">
                  <span className="text-gray-700">{skill}: </span>
                  <span className="font-medium">{level}%</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Tools & Technologies</h4>
              {Object.entries(portfolioData.skills.tools).map(([skill, level]) => (
                <div key={skill} className="mb-1 text-sm">
                  <span className="text-gray-700">{skill}: </span>
                  <span className="font-medium">{level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">RESEARCH & DEVELOPMENT PROJECTS</h3>
          {data.projects.map((project, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900">{project.name}</h4>
                <span className="text-gray-600 font-medium">{project.period}</span>
              </div>
              <p className="text-sm text-blue-700 font-medium mb-2">{project.category}</p>
              <p className="text-gray-700 text-justify leading-relaxed mb-3">{project.description}</p>
              
              <div className="mb-3">
                <p className="font-medium text-gray-800 mb-1">Key Features & Achievements:</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                  {project.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-2">
                <span className="font-medium text-gray-800">Technologies: </span>
                <span className="text-gray-700 text-sm">{project.tech.join(', ')}</span>
              </div>
              
              {project.impact && (
                <div className="bg-green-50 p-2 rounded text-sm">
                  <span className="font-medium text-green-800">Impact: </span>
                  <span className="text-green-700">{project.impact}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Page 3 */}
      <div className="p-8" style={{ pageBreakBefore: 'always', minHeight: '11in' }}>
        {/* Publications & Research */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">PUBLICATIONS & RESEARCH</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-800">Younas, M. (2023). "Cross-Platform Mobile Development: A Comparative Study of Flutter vs React Native."</p>
              <p className="text-sm text-gray-600 italic">Final Year Project - University of Balochistan</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Younas, M. (2024). "Optimizing Large Language Model Inference on Mobile Devices: A Cross-Platform Approach."</p>
              <p className="text-sm text-gray-600 italic">Under Review - International Conference on Mobile Computing and Applications</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Younas, M. (2023). "Modern Web Application Security: Best Practices and Implementation Strategies."</p>
              <p className="text-sm text-gray-600 italic">Tech Blog - Medium.com, 500+ views</p>
            </div>
          </div>
        </div>

        {/* Certifications & Professional Development */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">CERTIFICATIONS & PROFESSIONAL DEVELOPMENT</h3>
          {portfolioData.certifications.map((cert, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-900">{cert.name}</h4>
                  <p className="text-blue-700 font-medium">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">Credential ID: {cert.credentialId}</p>
                </div>
                <span className="font-medium text-gray-700">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Honors */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">AWARDS & HONORS</h3>
          <ul className="space-y-3">
            {portfolioData.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <Award className="w-4 h-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Memberships */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">PROFESSIONAL MEMBERSHIPS</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• IEEE Computer Society - Student Member (2022-2024)</li>
            <li>• Google Developer Student Club - Core Team Member (2022-2023)</li>
            <li>• Pakistan Software Houses Association (P@SHA) - Associate Member (2023-Present)</li>
          </ul>
        </div>

        {/* Conference Presentations */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">CONFERENCE PRESENTATIONS</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-gray-800">"Building Offline-First Mobile Applications"</p>
              <p className="text-sm text-gray-600">Flutter Pakistan Meetup, Karachi (Virtual) - March 2024</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">"Modern Web Development Trends and Best Practices"</p>
              <p className="text-sm text-gray-600">University of Balochistan Tech Summit - November 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4 */}
      <div className="p-8" style={{ pageBreakBefore: 'always', minHeight: '11in' }}>
        {/* Teaching & Mentoring Experience */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">TEACHING & MENTORING EXPERIENCE</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">Freelance Programming Tutor</h4>
                  <p className="text-blue-700">Online Platforms (Preply, Wyzant)</p>
                </div>
                <span className="text-gray-600 font-medium">2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Tutored 15+ students in JavaScript, React, and Flutter development</li>
                <li>Maintained 4.9/5 average rating with 100% completion rate</li>
                <li>Developed custom curriculum for beginner to intermediate level students</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">Peer Mentor - Computer Science Department</h4>
                  <p className="text-blue-700">University of Balochistan</p>
                </div>
                <span className="text-gray-600 font-medium">2022 - 2024</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Mentored junior students in programming fundamentals and project development</li>
                <li>Assisted in lab sessions for Data Structures and Web Development courses</li>
                <li>Organized coding workshops and study groups for final year projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteer Work & Community Service */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">VOLUNTEER WORK & COMMUNITY SERVICE</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">Tech Volunteer</h4>
                  <p className="text-blue-700">Code for Pakistan</p>
                </div>
                <span className="text-gray-600 font-medium">2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Contributed to open-source projects focused on civic technology</li>
                <li>Participated in hackathons for social good initiatives</li>
                <li>Developed educational resources for underprivileged communities</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">Workshop Facilitator</h4>
                  <p className="text-blue-700">Local Schools & Community Centers</p>
                </div>
                <span className="text-gray-600 font-medium">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Conducted basic computer literacy workshops for students</li>
                <li>Taught web development fundamentals to 50+ participants</li>
                <li>Organized "Hour of Code" events during Computer Science Education Week</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">LANGUAGES</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>English:</strong> Professional Working Proficiency</p>
              <p className="text-sm text-gray-600">IELTS: 7.5/9.0 (2023)</p>
            </div>
            <div>
              <p><strong>Urdu:</strong> Native Proficiency</p>
              <p className="text-sm text-gray-600">Mother tongue</p>
            </div>
            <div>
              <p><strong>Balochi:</strong> Conversational</p>
              <p className="text-sm text-gray-600">Regional language</p>
            </div>
            <div>
              <p><strong>Pashto:</strong> Basic</p>
              <p className="text-sm text-gray-600">Conversational level</p>
            </div>
          </div>
        </div>

        {/* Professional References */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 border-b-2 border-blue-700 pb-2 mb-4">PROFESSIONAL REFERENCES</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900">Dr. Sarah Ahmed</h4>
              <p className="text-sm text-gray-700">Associate Professor, Computer Science</p>
              <p className="text-sm text-gray-700">University of Balochistan</p>
              <p className="text-sm text-blue-600">sarah.ahmed@uob.edu.pk</p>
              <p className="text-sm text-gray-600">+92 81 9211255</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Ahmad Khan</h4>
              <p className="text-sm text-gray-700">Senior Software Engineer</p>
              <p className="text-sm text-gray-700">TechSoft Solutions</p>
              <p className="text-sm text-blue-600">ahmad.khan@techsoft.com</p>
              <p className="text-sm text-gray-600">+92 300 1234567</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Maria Rodriguez</h4>
              <p className="text-sm text-gray-700">Project Manager</p>
              <p className="text-sm text-gray-700">International Client (Freelance)</p>
              <p className="text-sm text-blue-600">maria.r@globaltech.com</p>
              <p className="text-sm text-gray-600">Available upon request</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );

  const handleGenerate = async (type) => {
    if (!jobDescription.trim()) {
      alert('Please enter a job description to generate a tailored document');
      return;
    }
    
    setIsGenerating(true);
    setDocType(type);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const skills = matchSkills(jobDescription);
    const projects = matchProjects(skills, jobDescription);
    const summary = generateTailoredSummary(jobTitle, companyName, skills);
    
    setGeneratedResume({
      personalInfo: portfolioData.contact,
      summary,
      skills,
      projects,
      keySkills: portfolioData.keySkills.filter((skill, i) => 
        i < 10 || skills.some(s => skill.toLowerCase().includes(s.skill.toLowerCase()))
      )
    });
    
    setIsGenerating(false);
  };

  const exportResume = async () => {
    const element = document.getElementById('resume-content');
    if (!element) return;

    // Dynamically import html2pdf.js only on client
    const html2pdf = (await import('html2pdf.js')).default;

    // Create a clean version for PDF export
    const printStyles = `
      <style>
        @page { 
          size: A4; 
          margin: 0.5in; 
        }
        body { 
          font-family: system-ui, -apple-system, sans-serif; 
          line-height: 1.4; 
          color: #000; 
        }
        .page-break { 
          page-break-before: always; 
        }
        @media print {
          .no-print { display: none; }
        }
      </style>
    `;

    setTimeout(() => {
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: `${docType === 'resume' ? 'Resume' : 'CV'}-${portfolioData.name.replace(/\s+/g, '_')}-${new Date().getFullYear()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Add print styles
      const styleElement = document.createElement('style');
      styleElement.innerHTML = printStyles;
      document.head.appendChild(styleElement);

      html2pdf().set(opt).from(element).save().then(() => {
        document.head.removeChild(styleElement);
      });
    }, 100);
  };

  // Add this helper function for downloading HTML as a file
  const downloadHTML = (elementId, filename) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const htmlContent = element.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <FileText size={36} className="text-blue-600" /> 
          Professional Resume & CV Generator
        </h1>
        <p className="text-gray-600 text-lg">Create tailored, professional documents that match job requirements</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Briefcase size={16} className="inline mr-1" />
              Job Title *
            </label>
            <input 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              placeholder="e.g. Senior Frontend Developer"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <User size={16} className="inline mr-1" />
              Company Name
            </label>
            <input 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              placeholder="e.g. Google, Microsoft, Startup"
            />
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <GraduationCap size={16} className="inline mr-1" />
              Document Type
            </label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={docType}
              onChange={e => setDocType(e.target.value)}
            >
              <option value="resume">Resume (1-2 pages)</option>
              <option value="cv">Academic CV (3-4 pages)</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Job Description *
          </label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            placeholder="Paste the complete job description here. The more detailed, the better the tailoring will be..."
            rows={6}
            required
          />
        </div>
        
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => handleGenerate('resume')}
            disabled={isGenerating || !jobDescription.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <Zap size={18} />
            {isGenerating && docType === 'resume' ? "Generating Resume..." : "Generate Resume"}
          </button>
          
          <button
            onClick={() => handleGenerate('cv')}
            disabled={isGenerating || !jobDescription.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <Zap size={18} />
            {isGenerating && docType === 'cv' ? "Generating CV..." : "Generate Academic CV"}
          </button>
          
          {generatedResume && (
            <>
              <button 
                onClick={exportResume}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Download size={18} /> 
                Export as PDF
              </button>
              <button
                onClick={() =>
                  downloadHTML(
                    "resume-content",
                    `${docType === "resume" ? "Resume" : "CV"}-${portfolioData.name.replace(/\s+/g, "_")}-${new Date().getFullYear()}.html`
                  )
                }
                className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <Download size={18} />
                Download as HTML
              </button>
            </>
          )}
        </div>
        
        {isGenerating && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-blue-600">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              Analyzing job requirements and tailoring your {docType}...
            </div>
          </div>
        )}
      </div>

      {generatedResume && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <h2 className="text-xl font-bold">
              {docType === 'resume' ? 'Professional Resume' : 'Academic Curriculum Vitae'}
            </h2>
            <p className="text-blue-100">
              Tailored for: {jobTitle} {companyName && `at ${companyName}`}
            </p>
          </div>
          
          <div id="resume-content" className="print:p-0">
            {docType === 'resume'
              ? generateResumeContent(generatedResume)
              : generateCVContent(generatedResume)
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeGenerator;