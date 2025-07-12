// File: src/components/sections/Projects.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Folder, Star, Calendar, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Carousel state
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate drag constraints based on content
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = containerRef.current.scrollWidth;
      const maxDrag = Math.min(0, containerWidth - scrollWidth);
      setDragConstraints({ left: maxDrag, right: 0 });
    }
  }, [activeFilter]);

  // Navigation functions
  const navigateToProject = (index) => {
    if (containerRef.current) {
      const cardWidth = 350; // Approximate card width + gap
      const targetX = -index * cardWidth;
      const maxLeft = dragConstraints.left;
      const clampedX = Math.max(maxLeft, Math.min(0, targetX));
      x.set(clampedX);
      setCurrentIndex(index);
    }
  };

  const nextProject = () => {
    const maxIndex = filteredProjects.length - 1;
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    navigateToProject(newIndex);
  };

  const prevProject = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    navigateToProject(newIndex);
  };

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
    : projects.filter(project => project.category === activeFilter);

  // Reset carousel position when filter changes
  useEffect(() => {
    x.set(0);
    setCurrentIndex(0);
  }, [activeFilter, x]);

  const getProjectGridClass = (size) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-2';
      case 'small': return 'md:col-span-1';
      default: return 'md:col-span-1';
    }
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

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentIndex + 1} of {filteredProjects.length} projects
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={prevProject}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              onClick={nextProject}
              disabled={currentIndex >= filteredProjects.length - 1}
              className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>

        {/* Momentum Scroll Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            style={{ x: springX }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.2}
            dragMomentum={true}
            onDrag={(event, info) => {
              // Update current index based on drag position
              const cardWidth = 350;
              const newIndex = Math.round(Math.abs(info.point.x) / cardWidth);
              setCurrentIndex(Math.min(newIndex, filteredProjects.length - 1));
            }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group"
                  style={{ minHeight: '400px' }}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Card Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Project Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                          {project.highlight}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.details.slice(0, 3).map((detail, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="mt-auto">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span className="text-sm">Live</span>
                          </a>
                        )}
                        {project.featured && (
                          <div className="flex items-center gap-1 text-yellow-500 ml-auto">
                            <Star size={14} fill="currentColor" />
                            <span className="text-xs">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      initial={false}
                      animate={{
                        opacity: hoveredProject === project.title ? 1 : 0
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {filteredProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => navigateToProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
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
                {projects.filter(p => p.category === 'ai').length}
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