// File: src/components/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const projects = [
    {
      title: "Admin Dashboard",
      description: "Full-featured admin panel built with Next.js and Supabase, featuring real-time data updates, user management, and analytics dashboard.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "React Query"],
      image: "/images/projects/admin-panel.jpg",
      category: "web",
      github: "https://github.com/YounasKhan2/NewsApp_AdminPanel.git",
      live: "https://admin-panel-demo.com",
      featured: true,
      details: [
        "Real-time data synchronization",
        "Role-based access control",
        "Interactive analytics dashboard",
        "Dark/Light mode support"
      ]
    },
    {
      title: "News App",
      description: "Cross-platform news application built with Flutter, delivering real-time news updates with a clean and intuitive interface.",
      technologies: ["Flutter", "Dart", "REST API", "Firebase"],
      image: "/images/projects/news-app.jpg",
      category: "mobile",
      github: "https://github.com/YounasKhan2/PulseNews.git",
      featured: true,
      details: [
        "Custom news categories",
        "Offline reading support",
        "Push notifications",
        "Bookmark functionality"
      ]
    },
    {
      "title": "Firebase Chat App",
      "description": "Cross-platform chat application built with Flutter, featuring real-time messaging, Google Sign-In, and Firebase integration.",
      "technologies": ["Flutter", "Dart", "Firebase", "Google Sign-In", "Cloud Firestore"],
      "image": "/images/projects/firebase-chat-app.jpg",
      "category": "mobile",
      "github": "https://github.com/YounasKhan2/Firebase_ChatApp.git",
      "featured": true,
      "details": [
        "Real-time messaging",
        "Google Sign-In authentication",
        "User profile management",
        "Push notifications",
        "Media sharing (images, videos, and locations)"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing my projects and skills, built with Next.js and Framer Motion for smooth animations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/projects/portfolio.jpg",
      category: "web",
      github: "https://github.com/YounasKhan2/My_Portfolio.git",
      live: "https://yourportfolio.com",
      featured: true,
      details: [
        "Responsive design",
        "Dark mode support",
        "Smooth page transitions",
        "Interactive UI elements"
      ]
    },
    {
      title: "Expense Tracker",
      description: "A cross-platform Flutter app for managing and analyzing personal finances with real-time sync and analytics.",
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore", "fl_chart"],
      image: "/images/projects/expense-tracker.jpg",
      category: "mobile",
      github: "https://github.com/YounasKhan2/Expense_Tracker.git",
      live: "",
      featured: true,
      details: [
        "Secure authentication with Firebase",
        "Add, edit, delete expenses and income",
        "Category-wise transaction management",
        "Real-time sync with Firestore",
        "Dashboard with charts and analytics",
        "Modern Material Design UI",
        "Multi-platform: Android, iOS, Web, Desktop"
      ]
    },
    {
      title: "Cine Stream",
      description: "A cross-platform Flutter app for browsing, searching, and streaming movies directly from torrent sources, with a modern UI and smooth video playback.",
      technologies: ["Flutter", "Dart", "video_player", "chewie", "cached_network_image", "http", "Node.js", "Express", "torrent-stream", "YTS API"],
      image: "/images/projects/cinestream.jpg",
      category: "mobile",
      github: "https://github.com/YounasKhan2/CineStream.git",
      live: "",
      featured: true,
      details: [
        "Browse and search movies using the YTS API",
        "Detailed movie pages with cast, genres, ratings, and trailers",
        "Stream movies directly from torrent magnet links",
        "Watch YouTube trailers within the app",
        "Full-screen video playback with custom controls",
        "Modern, responsive UI with dark mode support",
        "Cross-platform: Android, iOS, Linux, Windows",
        "Custom Node.js backend for torrent streaming (https://cinestreamserver.onrender.com/stream)"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft group"
              >
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <ul className="mb-4 space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/YounasKhan2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Folder size={20} />
            <span>View More Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;