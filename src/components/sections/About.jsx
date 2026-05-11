// File: src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Briefcase, Book, Users, CheckCircle2, Zap, Cpu, Smartphone, Coffee, Calendar, Star, TrendingUp, MapPin, Clock, Github, Heart } from 'lucide-react';

const About = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredWidget, setHoveredWidget] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Dashboard Widgets Data
  const quickStats = [
    { icon: <Code className="w-5 h-5" />, value: "2+", label: "Years Experience", color: "blue" },
    { icon: <Briefcase className="w-5 h-5" />, value: "50+", label: "Projects Built", color: "green" },
    { icon: <Zap className="w-5 h-5" />, value: "99.9%", label: "Uptime Achieved", color: "purple" },
  ];

  const techStack = {
    primary: ["Next.js", "React", "Node.js", "NestJS", "TypeScript"],
    secondary: ["Redux", "Tailwind CSS", "PostgreSQL", "MongoDB", "Prisma"],
    learning: ["AWS", "Azure", "Docker", "GraphQL"]
  };

  const achievements = [
    { title: "First AI App Published", date: "2024", icon: <Cpu className="w-4 h-4" /> },
    { title: "5+ Flutter Apps Deployed", date: "2023-24", icon: <Smartphone className="w-4 h-4" /> },
    { title: "Started Full-Stack Journey", date: "2022", icon: <Code className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Results-driven Full Stack Software Engineer with 2+ years of experience designing, building, and deploying scalable, high-performance web applications
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Welcome Widget - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden group"
              onMouseEnter={() => setHoveredWidget('welcome')}
              onMouseLeave={() => setHoveredWidget(null)}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hey there! I'm Muhammad Younas</h3>
                    <p className="text-blue-100">Full Stack Software Engineer</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Proficient in Next.js, MERN, NestJS, and cloud infrastructure (AWS, Azure). 
                  Expert in architecting RESTful and microservices-based APIs, implementing Redux state management, 
                  and optimizing databases (PostgreSQL, MongoDB, Redis, Prisma). 
                  Adept at leading teams, conducting code reviews, and delivering robust CI/CD pipelines.
                </p>
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
                animate={{ 
                  scale: hoveredWidget === 'welcome' ? 1.2 : 1,
                  rotate: hoveredWidget === 'welcome' ? 360 : 0 
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Education Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">BS Software Engineering</div>
                  <div className="text-gray-600 dark:text-gray-400">Superior University • Nov 2022 – Present</div>
                </div>
              </div>
            </motion.div>

            {/* Current Role Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Current Role</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Full Stack Web Developer</div>
                  <div className="text-gray-600 dark:text-gray-400">Preesoft • May 2024 – Present</div>
                </div>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">RESTful & microservices APIs (Node.js, NestJS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">Next.js, React, Redux, Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">AWS, Azure, Docker, Railway</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* GitHub (compact) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                </div>
                <a
                  href="https://github.com/YounasKhan2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  View Profile
                </a>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Public Repos</span>
                  <span className="font-medium text-gray-900 dark:text-white">12+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Languages</span>
                  <span className="font-medium text-gray-900 dark:text-white">8+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">This Year</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Very Active</span>
                </div>
              </div>
            </motion.div>
            {/* Current Status Widget removed as requested */}

            {/* Quick Stats - 4 Mini Widgets */}
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`mb-3 group-hover:scale-110 transition-transform duration-300 ${
                  stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                  stat.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                  'text-purple-600 dark:text-purple-400'
                }`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;