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
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-dark scroll-mt-16">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/5 to-transparent" />

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
            <span className="font-cyber text-neon-purple text-sm tracking-widest">04</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-purple/50 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
            EXPERIENCE<span className="text-neon-purple">.</span>LOG
          </h2>
          <p className="font-cyber text-gray-400 text-sm tracking-widest mb-4">
            // Professional deployment history
          </p>
        </motion.div>

        {/* Neon Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail - neon glow */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple shadow-neon-cyan" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot with glow */}
                <div className={`absolute left-4 md:left-5 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-black border-2 ${idx === 0 ? 'border-neon-cyan shadow-neon-cyan animate-pulse' : 'border-neon-magenta'} shadow-[0_0_10px_currentColor]`} />

                {/* Card */}
                <div className="cyber-card p-6 group">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-neon-cyan/30 text-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <div className="text-lg font-display font-semibold text-white">{exp.role}</div>
                        <div className="text-sm font-cyber text-gray-400">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-cyber bg-cyber-gray border border-cyber-border text-gray-300">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-cyber bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-lime flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default Experience;
