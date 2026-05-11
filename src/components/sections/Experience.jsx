// File: src/components/sections/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Preesoft',
    role: 'Full Stack Web Developer',
    location: 'Lahore, Pakistan',
    period: 'May 2024 – Present',
    highlights: [
      'Architect and maintain RESTful and microservices-based back-end APIs using Node.js and NestJS, achieving 99.9% system uptime',
      'Build and optimize responsive, high-performance UIs using Next.js, React, Redux, and Tailwind CSS, improving page load times by 35%',
      'Design and manage relational and non-relational databases (PostgreSQL, MongoDB, Redis) with focus on query optimization and caching',
      'Refactor legacy codebases to modern TypeScript standards, reducing technical debt and improving scalability by 40%',
      'Deploy and manage applications on AWS and Azure using Docker containers and Railway, ensuring seamless CI/CD workflows',
      'Lead code reviews and debugging sessions, enforcing best practices and driving a 30% reduction in post-deployment bugs',
    ],
  },
  {
    company: 'Freelance / Client Projects',
    role: 'Full‑Stack Developer',
    location: 'Remote',
    period: '2023 – 2024',
    highlights: [
      'Delivered 5+ production apps with Next.js, React, and Node.js',
      'Integrated AI features (AssemblyAI, OpenAI) into learning platforms',
      'Boosted performance and SEO via image optimization and code‑splitting',
    ],
  },
  {
    company: 'Personal Projects',
    role: 'Indie Developer',
    location: 'Lahore, Pakistan',
    period: '2022 – Present',
    highlights: [
      'Built an offline LLM chatbot using Flutter + llama.cpp',
      'Shipped multiple apps to Vercel/Netlify with CI/CD',
      'Implemented auth, payments, and analytics where applicable',
    ],
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience building scalable web applications and leading development teams.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-40" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-5 top-7 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white dark:bg-gray-900 ring-4 ring-blue-500/30 shadow-[0_0_0_3px_rgba(59,130,246,0.08)]" />

                {/* Card */}
                <div className="group relative bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        <Calendar size={14} /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-2 space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={16} className="mt-0.5 text-green-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
