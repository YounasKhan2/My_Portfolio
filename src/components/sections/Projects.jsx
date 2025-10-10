// File: src/components/sections/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  // Modern grid-based preview (no carousel)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' }
  ];

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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        const categories = Array.isArray(project.category) ? project.category : [project.category];
        return categories.includes(activeFilter);
      });

  const visible = filteredProjects.length ? filteredProjects : projects;
  const marqueeItems = [...visible, ...visible];

  const statusBadge = (status) => {
    if (!status) return null;
    const base = 'px-2 py-0.5 text-[11px] rounded-full';
    if (status === 'Live') return <span className={`${base} bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300`}>{status}</span>;
    if (status === 'Complete') return <span className={`${base} bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300`}>{status}</span>;
    return <span className={`${base} bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300`}>{status}</span>;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in web development, mobile apps, and AI integration
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Infinite Marquee Carousel (no images) */}
        <div className="group relative overflow-hidden py-4">
          {/* edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50/95 dark:from-gray-900/95 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50/95 dark:from-gray-900/95 to-transparent z-10" />

          <div className="marquee gap-6 pr-6" style={{ animationDuration: `${Math.max(18, visible.length * 4)}s` }}>
            {marqueeItems.map((p, idx) => (
              <motion.article
                key={`${p.title}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % visible.length) * 0.05 }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex-shrink-0 w-[320px] p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
              >
                <div className="rounded-[15px] bg-white/70 dark:bg-gray-800/60 backdrop-blur border border-gray-200/60 dark:border-gray-700/60 p-5 shadow-sm hover:shadow-xl transition-all flex flex-col min-h-[400px]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                          <Star size={12} /> Featured
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-[11px] rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        {Array.isArray(p.category) ? p.category[0] : p.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {statusBadge(p.status)}
                      <span className="text-xs text-gray-500 dark:text-gray-400">{p.year}</span>
                    </div>
                  </div>
                  <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{p.shortDesc}</p>
                  {p.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{p.description}</p>
                  )}
                  {(p.role || p.outcome) && (
                    <div className="mb-3 grid grid-cols-1 gap-1 text-xs text-gray-500 dark:text-gray-400">
                      {p.role && (<div><span className="font-medium text-gray-700 dark:text-gray-300">Role:</span> {p.role}</div>)}
                      {p.outcome && (<div><span className="font-medium text-gray-700 dark:text-gray-300">Outcome:</span> {p.outcome}</div>)}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.technologies.slice(0,4).map(t => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{t}</span>
                    ))}
                    {p.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">+{p.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="mt-auto flex items-center gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <style jsx>{`
            .marquee { 
              display: flex; 
              width: max-content; 
              animation: marquee var(--dur, 28s) linear infinite; 
            }
            .group:hover .marquee { animation-play-state: paused; }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee { animation: none; transform: none; }
            }
          `}</style>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {projects.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                {projects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Live Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {projects.filter(p => (Array.isArray(p.category) ? p.category.includes('ai') : p.category === 'ai')).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/YounasKhan2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 group"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <ExternalLink size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;