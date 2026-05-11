// File: src/components/sections/Projects.jsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import FeaturedProjectsCarousel from '../ui/FeaturedProjectsCarousel';

const Projects = () => {

  const projects = [
    {
      title: "offline_llm – Offline LLM Chatbot",
      description: "A cross-platform, privacy-first chatbot app that runs advanced large language models (LLMs) locally on-device using llama.cpp and Flutter.",
      shortDesc: "Privacy-first offline AI chatbot",
      technologies: ["Flutter", "Dart", "C/C++", "FFI", "CMake"],
      category: "ai",
      github: "https://github.com/YounasKhan2/offline_llm",
      live: "",
      featured: true,
      size: "large", // large, medium, small
      highlight: "Featured AI Project",
      year: "2024",
      status: "Active Development",
      details: [
        "Local LLM inference: Runs Llama and compatible models fully offline for privacy and low-latency.",
        "Multi-platform: Android, iOS, Windows, macOS, Linux.",
        "Model management: Load, quantize, and run GGUF-format models.",
        "Text generation and chat interface with Flutter UI.",
        "Integrates llama.cpp for high-performance native inference."
      ]
    },
    {
      title: "Try Roy - AI-Powered Learning Platform",
      description: "A comprehensive web application that transforms audio, video, and documents into interactive learning experiences using advanced AI technology. Combines industry-leading transcription capabilities with intelligent content generation.",
      shortDesc: "AI-powered learning and transcription platform",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI", "AssemblyAI", "Stripe"],
      category: ["web", "ai"],
      github: "https://github.com/YounasKhan2/try-roy", // Update with actual repo URL
      live: "https://tryroy.com", // Add Replit deployment URL when available
      featured: true,
      size: "large",
      highlight: "AI Education Platform",
      year: "2025",
  status: "Complete",
  role: "Full‑Stack Developer",
  outcome: "Launched v1 at tryroy.com with transcription, quiz/notes generation, and subscriptions",
      details: [
        "Smart transcription with high-accuracy audio/video processing using AssemblyAI",
        "AI-powered learning tools: Generate quizzes, flashcards, and study notes from content",
        "Real-time speech-to-text with browser-based voice recording",
        "Multi-format support: Audio, video, PDFs, documents, and images",
        "Subscription management with Stripe integration and usage tracking",
        "Admin dashboard with user management, analytics, and content moderation",
        "Enterprise-grade security with JWT authentication and email verification"
      ]
    },
    {
      title: "Conversational AI Agent (LiveKit + FastAPI)",
      description: "A real-time voice agent that uses LiveKit for media, FastAPI for session orchestration and token minting, and a streaming STT → LLM → TTS pipeline with VAD-based turn-taking.",
      shortDesc: "Low-latency voice AI with barge-in support",
      technologies: ["FastAPI", "LiveKit", "WebRTC", "React (TypeScript)", "Flutter", "WebSocket", "Silero VAD", "STT/LLM/TTS"],
      category: ["ai", "web"],
      github: "", // add repo URL if public
      live: "", // add live/demo link if available
      featured: true,
      size: "large",
      highlight: "Real-Time Voice AI",
      year: "2025",
      status: "Complete",
      role: "Full‑Stack / ML Engineer",
      outcome: "End‑to‑end voice loop with barge‑in, streaming transcripts, and agent audio playback",
      details: [
        "Backend (FastAPI): mints LiveKit tokens, orchestrates AgentSession, broadcasts transcripts over /ws/transcript/{session_id}.",
        "Media: LiveKit room handles mic publish and agent TTS playback as a remote track.",
        "AI pipeline: streaming STT → token‑streaming LLM → chunked TTS; Silero VAD handles turn‑taking.",
        "Clients: React web (App.tsx) and Flutter (main.dart) connect, publish mic, and render transcripts.",
        "Data flow: browser mic → LiveKit; backend processes audio and emits transcript/speech events.",
        "Key files: main.py (/token, /session, /ws/transcript/{session_id}, CORS); agent.py (AgentSession wiring).",
        "Turn‑taking: VAD events user_speech_started/ended and agent_speech_started/ended update UI and flow.",
        "Overlap policy: false interruption handling with resume and barge‑in to cut agent TTS on user speech.",
        "Streaming UX: STT partials as interim text; finals persisted; TTS starts on first LLM tokens to reduce latency."
      ]
    },
    {
      title: "EduSeminarsPK",
      description: "A modern Next.js web platform for discovering, registering, and learning about academic seminars, scholarships, and career opportunities.",
      shortDesc: "Academic opportunities platform",
      technologies: ["Next.js", "Tailwind CSS", "EmailJS", "JavaScript"],
      category: "web",
      github: "https://github.com/YounasKhan2/seminars.git",
      live: "https://eduseminarspk.netlify.app",
      featured: true,
      size: "medium",
      highlight: "Education Platform",
      year: "2024",
      status: "Live",
  role: "Frontend Developer",
  outcome: "Launched with seminar listings; 500+ monthly visitors",
      details: [
        "Seminar listings with registration system",
        "Opportunities hub for scholarships and internships",
        "Speaker & session management",
        "Contact form with EmailJS integration",
        "Responsive design with modern UI/UX"
      ]
    },
    {
      title: "CineStream",
      description: "A cross-platform Flutter app for browsing, searching, and streaming movies directly from torrent sources, with a modern UI and smooth video playback.",
      shortDesc: "Movie streaming app",
      technologies: ["Flutter", "Dart", "Node.js", "Express", "YTS API"],
      category: "mobile",
      github: "https://github.com/YounasKhan2/CineStream.git",
      live: "",
      featured: true,
      size: "large",
      highlight: "Streaming Platform",
      year: "2024",
      status: "Complete",
      details: [
        "Browse and search movies using YTS API",
        "Stream movies directly from torrent sources",
        "Watch YouTube trailers within the app",
        "Full-screen video playback with custom controls",
        "Cross-platform support"
      ]
    },
    {
      title: "APKDrop",
      description: "A modern Next.js platform for browsing, searching, and downloading Android APK files. Features APK search, detailed app pages, and AdSense integration.",
      shortDesc: "APK discovery platform",
      technologies: ["Next.js", "React", "Tailwind CSS", "AdSense"],
      category: "web",
      github: "https://github.com/YounasKhan2/AppDrop.git",
      live: "https://app-drop.vercel.app",
      featured: false,
      size: "medium",
      highlight: "App Store Alternative",
      year: "2024",
      status: "Live",
      details: [
        "APK search and discovery",
        "Detailed app pages with reviews",
        "Category-based browsing",
        "AdSense integration for monetization"
      ]
    },
    {
      title: "TechBlog Pro",
      description: "A professional, modern tech blog built with Next.js (App Router) and TypeScript. Features a scalable content structure, advanced SEO, and a clean, responsive UI.",
      shortDesc: "Modern tech blog platform",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentlayer"],
      category: "web",
      github: "https://github.com/YounasKhan2/blogs.git",
      live: "https://techblogspro.netlify.app/",
      featured: false,
      size: "small",
      highlight: "Content Platform",
      year: "2024",
      status: "Live",
      details: [
        "Advanced SEO with structured data",
        "Dynamic blog post pages",
        "Dark mode support",
        "Content sourced from markdown files"
      ]
    },
    {
      title: "Firebase Chat App",
      description: "Cross-platform chat application built with Flutter, featuring real-time messaging, Google Sign-In, and Firebase integration.",
      shortDesc: "Real-time chat application",
      technologies: ["Flutter", "Dart", "Firebase", "Google Sign-In"],
      category: "mobile",
      github: "https://github.com/YounasKhan2/Firebase_ChatApp.git",
      live: "",
      featured: false,
      size: "medium",
      highlight: "Chat Platform",
      year: "2023",
      status: "Complete",
      details: [
        "Real-time messaging with Firebase",
        "Google Sign-In authentication",
        "User profile management",
        "Media sharing capabilities"
      ]
    },
    {
      title: "News App",
      description: "Cross-platform news application built with Flutter, delivering real-time news updates with a clean and intuitive interface.",
      shortDesc: "News aggregation app",
      technologies: ["Flutter", "Dart", "REST API", "Firebase"],
      category: "mobile",
      github: "https://github.com/YounasKhan2/PulseNews.git",
      live: "",
      featured: false,
      size: "small",
      highlight: "News Platform",
      year: "2023",
      status: "Complete",
      details: [
        "Real-time news updates",
        "Custom news categories",
        "Offline reading support",
        "Bookmark functionality"
      ]
    },
    {
      title: "Expense Tracker",
      description: "A cross-platform Flutter app for managing and analyzing personal finances with real-time sync and analytics.",
      shortDesc: "Personal finance manager",
      technologies: ["Flutter", "Dart", "Firebase", "fl_chart"],
      category: "mobile",
      github: "https://github.com/YounasKhan2/Expense_Tracker.git",
      live: "",
      featured: false,
      size: "small",
      highlight: "Finance App",
      year: "2023",
      status: "Complete",
      details: [
        "Expense and income tracking",
        "Real-time sync with Firestore",
        "Dashboard with analytics charts",
        "Multi-platform support"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing my projects and skills, built with Next.js and Framer Motion for smooth animations.",
      shortDesc: "Personal portfolio site",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      github: "https://github.com/YounasKhan2/My_Portfolio.git",
      live: "https://muhammad-younas.netlify.app/",
      featured: false,
      size: "small",
      highlight: "Portfolio",
      year: "2024",
      status: "Live",
      image: "/images/projects/port.png",
      details: [
        "Responsive design with dark mode",
        "Smooth page transitions",
        "Interactive UI elements",
        "Modern design system"
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-dark scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-neon-magenta/5 to-transparent" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-neon-magenta via-neon-cyan to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Cyberpunk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-cyber text-neon-magenta text-sm tracking-widest">02</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-magenta/50 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            PROJECTS<span className="text-neon-magenta">.</span>SHOWCASE
          </h2>
          <p className="font-cyber text-gray-400 text-sm tracking-widest mb-4">
            // Deployed applications and digital creations
          </p>
          <p className="text-gray-300 max-w-2xl">
            A collection of projects showcasing expertise in web development, mobile apps, and AI integration.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeaturedProjectsCarousel projects={featuredProjects} />
        </motion.div>

        {/* Stats Bar - Cyberpunk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 cyber-card p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-cyber-border last:border-0">
              <div className="text-3xl font-display font-bold text-neon-cyan mb-1">
                {projects.length}+
              </div>
              <div className="text-xs font-cyber text-gray-400 tracking-wider">TOTAL_PROJECTS</div>
            </div>
            <div className="p-4 border-r border-cyber-border last:border-0">
              <div className="text-3xl font-display font-bold text-neon-lime mb-1">
                {projects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-xs font-cyber text-gray-400 tracking-wider">LIVE_SYSTEMS</div>
            </div>
            <div className="p-4 border-r border-cyber-border last:border-0">
              <div className="text-3xl font-display font-bold text-neon-magenta mb-1">
                {projects.filter(p => (Array.isArray(p.category) ? p.category.includes('ai') : p.category === 'ai')).length}
              </div>
              <div className="text-xs font-cyber text-gray-400 tracking-wider">AI_MODULES</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-display font-bold text-neon-purple mb-1">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-xs font-cyber text-gray-400 tracking-wider">TECH_STACKS</div>
            </div>
          </div>
        </motion.div>

        {/* Section divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default Projects;