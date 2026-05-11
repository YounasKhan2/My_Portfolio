// File: src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { Code, Database, Palette, Terminal, Wrench, TrendingUp, Award, Clock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal size={24} />,
      description: "Programming languages",
      metrics: { projects: 50, experience: "2+ years" },
      skills: [
        { name: "JavaScript", level: 90, category: "expert" },
        { name: "TypeScript", level: 85, category: "expert" },
        { name: "Dart", level: 70, category: "core" },
        { name: "C++", level: 60, category: "growing" },
        { name: "Java", level: 65, category: "core" },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      description: "Modern web interfaces",
      metrics: { projects: 25, experience: "2+ years" },
      skills: [
        { name: "React.js", level: 90, category: "expert" },
        { name: "Next.js", level: 90, category: "expert" },
        { name: "Redux / Redux Toolkit", level: 85, category: "expert" },
        { name: "Tailwind CSS", level: 90, category: "expert" },
        { name: "HTML5 / CSS3", level: 90, category: "expert" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      description: "Scalable server solutions",
      metrics: { projects: 20, experience: "2+ years" },
      skills: [
        { name: "Node.js", level: 90, category: "expert" },
        { name: "NestJS", level: 85, category: "expert" },
        { name: "Express.js", level: 90, category: "expert" },
        { name: "RESTful APIs", level: 95, category: "expert" },
        { name: "GraphQL", level: 70, category: "core" },
        { name: "Microservices", level: 80, category: "expert" },
        { name: "WebSockets / Webhooks", level: 75, category: "core" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      description: "Data storage & management",
      metrics: { projects: 18, experience: "2+ years" },
      skills: [
        { name: "PostgreSQL", level: 85, category: "expert" },
        { name: "MongoDB", level: 85, category: "expert" },
        { name: "Redis", level: 80, category: "expert" },
        { name: "SQLite", level: 75, category: "core" },
        { name: "Prisma ORM", level: 85, category: "expert" },
        { name: "Mongoose", level: 80, category: "expert" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Wrench size={24} />,
      description: "Cloud infrastructure & CI/CD",
      metrics: { projects: 15, experience: "1.5+ years" },
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 80, category: "expert" },
        { name: "Microsoft Azure", level: 75, category: "core" },
        { name: "Docker", level: 80, category: "expert" },
        { name: "Vercel", level: 85, category: "expert" },
        { name: "Railway", level: 80, category: "expert" },
        { name: "GitHub Actions / CI/CD", level: 80, category: "expert" },
      ]
    },
    {
      title: "Tools & Practices",
      icon: <Wrench size={24} />,
      description: "Development workflow",
      metrics: { projects: 50, experience: "2+ years" },
      skills: [
        { name: "Git / GitHub", level: 90, category: "expert" },
        { name: "Agile / Scrum", level: 85, category: "expert" },
        { name: "Code Reviews", level: 90, category: "expert" },
        { name: "Debugging", level: 90, category: "expert" },
        { name: "Unit Testing / TDD", level: 75, category: "core" },
        { name: "API Integration", level: 90, category: "expert" },
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

        {/* Currently Focusing On */}
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
              Currently Focusing on: AWS, Azure, Docker & Advanced System Architecture
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;