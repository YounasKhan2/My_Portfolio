// File: src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Cloud, Cpu, Layers, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const techStack = [
    {
      category: "LANGUAGES",
      icon: <Terminal size={18} />,
      color: "neon-cyan",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Dart", level: 75 },
        { name: "C++", level: 65 },
        { name: "Python", level: 60 },
      ]
    },
    {
      category: "FRONTEND",
      icon: <Layers size={18} />,
      color: "neon-magenta",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "Redux Toolkit", level: 88 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Flutter", level: 80 },
      ]
    },
    {
      category: "BACKEND",
      icon: <Code size={18} />,
      color: "neon-lime",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "NestJS", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      category: "DATABASE",
      icon: <Database size={18} />,
      color: "neon-purple",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 82 },
        { name: "Prisma ORM", level: 88 },
        { name: "Firebase", level: 80 },
      ]
    },
    {
      category: "DEVOPS",
      icon: <Cloud size={18} />,
      color: "neon-orange",
      skills: [
        { name: "AWS", level: 82 },
        { name: "Azure", level: 78 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Vercel/Railway", level: 90 },
      ]
    },
    {
      category: "TOOLS",
      icon: <Wrench size={18} />,
      color: "neon-pink",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Agile/Scrum", level: 88 },
        { name: "Testing", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 90 },
      ]
    },
  ];

  const getColorClass = (color) => {
    const colors = {
      'neon-cyan': 'text-neon-cyan border-neon-cyan',
      'neon-magenta': 'text-neon-magenta border-neon-magenta',
      'neon-lime': 'text-neon-lime border-neon-lime',
      'neon-purple': 'text-neon-purple border-neon-purple',
      'neon-orange': 'text-neon-orange border-neon-orange',
      'neon-pink': 'text-neon-pink border-neon-pink',
    };
    return colors[color] || colors['neon-cyan'];
  };

  const getBgClass = (color) => {
    const colors = {
      'neon-cyan': 'bg-neon-cyan',
      'neon-magenta': 'bg-neon-magenta',
      'neon-lime': 'bg-neon-lime',
      'neon-purple': 'bg-neon-purple',
      'neon-orange': 'bg-neon-orange',
      'neon-pink': 'bg-neon-pink',
    };
    return colors[color] || colors['neon-cyan'];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-black scroll-mt-16">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-neon-lime/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-cyber text-neon-lime text-sm tracking-widest">03</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-lime/50 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            TECH<span className="text-neon-lime">.</span>STACK
          </h2>
          <p className="font-cyber text-gray-400 text-sm tracking-widest mb-4">
            // Skill matrix and competency levels
          </p>
        </motion.div>

        {/* Skills Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-6 corner-accent group"
            >
              {/* Header */}
              <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-cyber-border`}>
                <span className={`${getColorClass(category.color)}`}>
                  {category.icon}
                </span>
                <span className={`font-cyber text-sm tracking-widest ${getColorClass(category.color).split(' ')[0]}`}>
                  {category.category}
                </span>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300 font-mono">{skill.name}</span>
                      <span className={`text-xs font-cyber ${getColorClass(category.color).split(' ')[0]}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-cyber-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className={`h-full ${getBgClass(category.color)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category stats */}
              <div className="mt-6 pt-4 border-t border-cyber-border flex justify-between items-center">
                <span className="text-xs text-gray-500 font-cyber">MODULES_LOADED</span>
                <span className={`text-sm font-display font-bold ${getColorClass(category.color).split(' ')[0]}`}>
                  {category.skills.length}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "TOTAL_SKILLS", value: "30+", color: "neon-cyan" },
            { label: "EXPERT_LEVEL", value: "12", color: "neon-magenta" },
            { label: "STACK_DEPTH", value: "6", color: "neon-lime" },
            { label: "AVG_PROFICIENCY", value: "85%", color: "neon-purple" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border border-cyber-border bg-cyber-dark/50">
              <div className={`font-display text-2xl font-bold ${getColorClass(stat.color).split(' ')[0]} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs font-cyber text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default Skills;