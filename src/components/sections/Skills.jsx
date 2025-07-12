// File: src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { Code, Database, Palette, Terminal, Wrench, TrendingUp, Award, Clock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      description: "Modern web & mobile interfaces",
      metrics: { projects: 8, experience: "2+ years" },
      skills: [
        { name: "Dart", level: 80, category: "core" },
        { name: "Next.js", level: 60, category: "growing" },
        { name: "JavaScript", level: 70, category: "core" },
        { name: "Tailwind CSS", level: 90, category: "expert" },
        { name: "HTML/CSS", level: 90, category: "expert" },
        { name: "Java Swing", level: 65, category: "core" },
        { name: "Flutter", level: 85, category: "expert" },
        { name: "React Native", level: 70, category: "core" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      description: "Scalable server solutions",
      metrics: { projects: 6, experience: "1.5+ years" },
      skills: [
        { name: "MySQL", level: 75, category: "core" },
        { name: "REST APIs", level: 90, category: "expert" },
        { name: "Firebase", level: 70, category: "core" },
        { name: "Supabase", level: 70, category: "core" },
        { name: "Python", level: 60, category: "growing" },
        { name: "C++", level: 60, category: "growing" },
      ]
    },
    {
      title: "Computer Science",
      icon: <Terminal size={24} />,
      description: "Core CS fundamentals",
      metrics: { projects: 4, experience: "2+ years" },
      skills: [
        { name: "OOP's Concepts", level: 85, category: "expert" },
        { name: "Data Structures & Algorithms", level: 75, category: "core" },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      description: "User-centered design",
      metrics: { projects: 5, experience: "1+ years" },
      skills: [
        { name: "Responsive Design", level: 70, category: "core" },
        { name: "User Interface", level: 70, category: "core" },
        { name: "Material UI", level: 80, category: "core" },
        { name: "User Experience", level: 80, category: "core" },
        { name: "Figma", level: 40, category: "learning" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench size={24} />,
      description: "Development workflow",
      metrics: { projects: 10, experience: "2+ years" },
      skills: [
        { name: "Git", level: 85, category: "expert" },
        { name: "Github", level: 90, category: "expert" },
        { name: "Restful APIs", level: 60, category: "growing" },
        { name: "WebSockets", level: 40, category: "learning" },
        { name: "Android Development", level: 80, category: "expert" },
        { name: "Authentication", level: 60, category: "growing" },
      ]
    },
    {
      title: "Deployment & Hosting",
      icon: <Wrench size={24} />,
      description: "Cloud deployment solutions",
      metrics: { projects: 8, experience: "1+ years" },
      skills: [
        { name: "Vercel", level: 70, category: "core" },
        { name: "Netlify", level: 70, category: "core" },
      ]
    }
  ];

  const getSkillColor = (category) => {
    switch (category) {
      case 'expert': return 'bg-green-500';
      case 'core': return 'bg-blue-500';
      case 'growing': return 'bg-yellow-500';
      case 'learning': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'expert': return 'Expert';
      case 'core': return 'Proficient';
      case 'growing': return 'Growing';
      case 'learning': return 'Learning';
      default: return '';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, experience, and ongoing learning journey
          </p>
        </motion.div>

        {/* Dashboard Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {category.metrics.projects}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    {category.metrics.experience}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Experience</div>
                </div>
              </div>

              {/* All Skills Display */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Skills</span>
                  <TrendingUp size={14} className="text-green-500" />
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getSkillColor(skill.category)}`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skill Levels</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Expert (90%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Proficient (70-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Growing (50-69%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">Learning (&lt;50%)</span>
            </div>
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/10 dark:bg-blue-400/10 rounded-full">
            <Clock size={20} className="text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Currently Focusing on: Offline LLM's & Advanced AI Integration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;