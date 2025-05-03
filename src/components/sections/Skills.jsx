// File: src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { Code, Database, Palette, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "Dart", level: 80 },
        { name: "Next.js", level: 60 },
        { name: "JavaScript", level: 70 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Firebase", level: 70 },
        { name: "Supabase", level: 70 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      skills: [
        { name: "Responsive Design", level: 70 },
        { name: "User Interface", level: 70 },
        { name: "Material UI", level: 80 },
        { name: "User Experience", level: 80 },
        { name: "Figma", level: 40 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 90 },
        { name: "Restful APIs", level: 60 },
        { name: "WebSockets", level: 40 },
      ]
    }
  ];

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
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/10 dark:bg-blue-400/10 rounded-full">
            <Terminal size={20} className="text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">
              Currently Working on: Flutter mobile app development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;