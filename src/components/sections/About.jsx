// File: src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { Code, Briefcase, Book, Zap, Cpu, Smartphone, Github, Terminal, Database, Cloud, Layers } from 'lucide-react';

const About = () => {
  // Cyberpunk-styled stats
  const quickStats = [
    { icon: <Code size={20} />, value: "2+", label: "Years Active", color: "cyan" },
    { icon: <Zap size={20} />, value: "25+", label: "Projects", color: "magenta" },
    { icon: <Cpu size={20} />, value: "99.9%", label: "Uptime", color: "lime" },
    { icon: <Cloud size={20} />, value: "24/7", label: "Deploy", color: "purple" },
  ];

  // Tech categories with cyberpunk colors
  const techCategories = [
    {
      title: "Frontend",
      icon: <Layers size={18} />,
      color: "cyan",
      techs: ["Next.js", "React", "Redux", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Backend",
      icon: <Terminal size={18} />,
      color: "magenta",
      techs: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database size={18} />,
      color: "lime",
      techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"]
    },
    {
      title: "DevOps",
      icon: <Cloud size={18} />,
      color: "purple",
      techs: ["AWS", "Azure", "Docker", "CI/CD", "Railway"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-black scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/5 to-transparent" />
      
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-cyber text-neon-cyan text-sm tracking-widest">01</span>
              <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
              SYSTEM<span className="text-neon-cyan">.</span>INFO
            </h2>
            <p className="font-cyber text-gray-400 text-sm tracking-widest">
              // Developer profile and specifications
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex items-end"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Full Stack Software Engineer specializing in architecting scalable, high-performance 
              applications. Expert in Next.js, MERN stack, and cloud infrastructure. 
              Building the future with code.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column - Main Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="cyber-card p-8 h-full corner-accent">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyber-border">
                <div className="flex items-center gap-3">
                  <Terminal size={20} className="text-neon-cyan" />
                  <span className="font-cyber text-neon-cyan text-sm tracking-widest">
                    developer_bio.dat
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Bio content */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-cyber text-neon-magenta text-xs tracking-widest block mb-2">
                      EDUCATION
                    </label>
                    <p className="text-white font-medium">BS Software Engineering</p>
                    <p className="text-gray-400 text-sm">Superior University</p>
                    <p className="text-gray-500 text-xs font-cyber mt-1">2022 — Present</p>
                  </div>
                  
                  <div>
                    <label className="font-cyber text-neon-lime text-xs tracking-widest block mb-2">
                      CURRENT_ROLE
                    </label>
                    <p className="text-white font-medium">Full Stack Developer</p>
                    <p className="text-gray-400 text-sm">Preesoft</p>
                    <p className="text-gray-500 text-xs font-cyber mt-1">May 2024 — Present</p>
                  </div>
                </div>

                <div className="h-px bg-cyber-border" />

                {/* Skills list */}
                <div>
                  <label className="font-cyber text-neon-cyan text-xs tracking-widest block mb-3">
                    CORE_CAPABILITIES
                  </label>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-neon-cyan mt-1">›</span>
                      <span>RESTful & microservices APIs (Node.js, NestJS)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-neon-cyan mt-1">›</span>
                      <span>State management & performance optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-neon-cyan mt-1">›</span>
                      <span>Database architecture & optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-neon-cyan mt-1">›</span>
                      <span>CI/CD pipelines & cloud deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Tech Stack */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`cyber-card p-5 text-center group hover:border-neon-${stat.color} transition-all duration-300`}
                >
                  <div className={`text-neon-${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="font-display text-2xl text-white font-bold">
                    {stat.value}
                  </div>
                  <div className="font-cyber text-xs text-gray-400 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Categories */}
            <div className="space-y-4">
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="cyber-card p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-neon-${category.color}`}>{category.icon}</span>
                    <span className={`font-cyber text-neon-${category.color} text-xs tracking-widest`}>
                      {category.title.toUpperCase()}
                    </span>
                    <div className="h-px flex-1 bg-cyber-border" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyber-dark border border-cyber-border rounded font-cyber text-xs text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Link */}
            <motion.a
              href="https://github.com/YounasKhan2"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="cyber-card p-4 flex items-center justify-between group hover:border-neon-magenta transition-all"
            >
              <div className="flex items-center gap-3">
                <Github size={20} className="text-white" />
                <div>
                  <p className="text-white font-medium text-sm">GitHub Profile</p>
                  <p className="text-gray-400 text-xs font-cyber">@YounasKhan2</p>
                </div>
              </div>
              <span className="text-neon-magenta text-sm group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default About;