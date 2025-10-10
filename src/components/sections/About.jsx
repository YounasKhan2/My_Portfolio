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
    { icon: <Code className="w-5 h-5" />, value: "2+", label: "Years Coding", color: "blue" },
    { icon: <Briefcase className="w-5 h-5" />, value: "9+", label: "Projects Built", color: "green" },
    { icon: <Coffee className="w-5 h-5" />, value: "1000+", label: "Cups of Coffee", color: "orange" },
    { icon: <Star className="w-5 h-5" />, value: "5+", label: "Live Apps", color: "purple" }
  ];

  const techStack = {
    primary: ["Flutter", "Dart", "Next.js", "React"],
    secondary: ["Firebase", "JavaScript", "TypeScript", "Tailwind"],
    learning: ["AI/ML", "llama.cpp", "WebAssembly", "Rust"]
  };

  const achievements = [
    { title: "First AI App Published", date: "2024", icon: <Cpu className="w-4 h-4" /> },
    { title: "5+ Flutter Apps Deployed", date: "2023-24", icon: <Smartphone className="w-4 h-4" /> },
    { title: "Started Full-Stack Journey", date: "2022", icon: <Code className="w-4 h-4" /> }
  ];

  const funFacts = [
    "🎯 Can debug for hours without getting tired",
    "☕ Average 5 cups of coffee per day",
    "🌙 Night owl - best code written after 10 PM",
    "🎮 Gaming helps me think through complex problems",
    "📱 Flutter fanboy since day one"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Developer Dashboard
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-time insights into my development journey, skills, and current projects
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
                    <p className="text-blue-100">Cross-Platform Developer & AI Enthusiast</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Passionate about creating seamless digital experiences across mobile and web platforms. 
                  Currently pushing boundaries with AI integration and privacy-first applications.
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
                  <div className="text-gray-600 dark:text-gray-400">Superior University • 2022 – 2026</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Intermediate (ICS)</div>
                  <div className="text-gray-600 dark:text-gray-400">FG College • 2020 – 2022</div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Certifications</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Front-End Developer (Coursera)</div>
                    <div className="text-gray-600 dark:text-gray-400">2024 • Responsive Design, React, Version Control</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Google IT Automation with Python</div>
                    <div className="text-gray-600 dark:text-gray-400">2023 • Python Scripting, Git, Debugging</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Flutter & Firebase Bootcamp</div>
                    <div className="text-gray-600 dark:text-gray-400">2023 • Cross‑platform apps, Auth, Realtime DB</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Solo Learn MySQL</div>
                    <div className="text-gray-600 dark:text-gray-400">2023 • Database Management, SQL Queries</div>
                  </div>
                </li>
              </ul>
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

            {/* Tech Stack Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Tech Arsenal</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {techStack.primary.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Supporting Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {techStack.secondary.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currently Learning</h5>
                  <div className="flex flex-wrap gap-2">
                    {techStack.learning.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Timeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Milestones</h4>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-green-600 dark:text-green-400 mt-1">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-medium text-gray-900 dark:text-white">{achievement.title}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5" />
                <h4 className="font-semibold">Fun Developer Facts</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-white/80">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;