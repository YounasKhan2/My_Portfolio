// File: src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { Code, Briefcase, Book, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code className="w-5 h-5" />, value: "1+", label: "Years Experience" },
    { icon: <Briefcase className="w-5 h-5" />, value: "6+", label: "Projects" },
    { icon: <Book className="w-5 h-5" />, value: "10+", label: "Technologies" },
    { icon: <Users className="w-5 h-5" />, value: "5+", label: "Clients" }
  ];

  const keySkills = [
    "Full Stack Web Development",
    "Flutter Mobile App Development",
    "UI/UX Design",
    "Database Management",
    "API Integration",
    "Cloud Services"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p className="text-lg">
                I'm a passionate Full Stack Developer with expertise in building modern web and mobile applications. 
                My journey in development began with a deep curiosity for creating user-centric digital solutions.
              </p>
              <p>
                I specialize in JavaScript technologies, particularly React and Node.js ecosystems. 
                My approach combines technical expertise with creative problem-solving to deliver 
                robust and scalable solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-soft"
                >
                  <div className="flex justify-center text-blue-600 dark:text-blue-400 mb-2">
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

            {/* Skills & Expertise */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Skills
                </h3>
                <ul className="space-y-3">
                  {keySkills.map((skill, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies I Work With
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Frontend:</span> Dart, React.js, Next.js, Tailwind CSS, JavaScript (ES6+)
                  </p>
                  <p>
                    <span className="font-medium">Backend:</span> Firebase, Supabase, REST APIs
                  </p>
                  <p>
                    <span className="font-medium">Tools & Others:</span> Git, Firebase, Supabase, Vercel
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;