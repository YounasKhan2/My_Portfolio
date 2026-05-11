// File: src/components/sections/Articles.jsx
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const articles = [
  {
    title: 'Showcasing Full Stack Expertise and Innovative Problem Solving',
    url: 'https://www.loom.com/share/e3cb654b8dff4f039af640ab7fcb76ae',
    summary:
      'Video walkthrough of my full‑stack work and problem‑solving: an AI‑powered SaaS platform (React/Next.js, Node/Express, Python services with AssemblyAI/OpenAI, Stripe, Cloudinary, PostgreSQL) and a Python NLP project on FastAPI. I optimized real‑time transcription to under one second and used model quantization to run on low‑resource devices.',
    tags: ['Video', 'Full-Stack', 'Next.js', 'Node.js', 'Python', 'AI/ML'],
    year: '2025'
  }
];

// Cyberpunk tag colors
const tagColor = (t) => {
  const k = t.toLowerCase();
  if (k.includes('next') || k.includes('node')) return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30';
  if (k.includes('video')) return 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30';
  if (k.includes('ai') || k.includes('python') || k.includes('ml')) return 'bg-neon-purple/10 text-neon-purple border-neon-purple/30';
  return 'bg-cyber-gray text-gray-300 border-cyber-border';
};

const getReadingTime = (text) => {
  if (!text) return null;
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 180));
  return `${mins} min read`;
};

const Articles = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <section id="articles" className="py-24 relative overflow-hidden bg-cyber-dark scroll-mt-16">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-orange/5 to-transparent" />

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
            <span className="font-cyber text-neon-orange text-sm tracking-widest">06</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-orange/50 to-transparent" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
            DATA<span className="text-neon-orange">.</span>LOGS
          </h2>
          <p className="font-cyber text-gray-400 text-sm tracking-widest mb-4">
            // Articles and video documentation
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post, i) => {
            const reading = getReadingTime(post.summary);
            const isFeatured = i === 0;
            const isNew = String(post.year) === currentYear;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className={`group relative ${isFeatured ? 'lg:col-span-2' : ''}`}
              >
                <div className="cyber-card p-6 corner-accent h-full">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FileText size={16} className="text-neon-orange" />
                        <span className="font-cyber text-xs tracking-widest">ARTICLE_ENTRY</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {reading && (
                          <span className="text-xs font-cyber text-gray-500">{reading}</span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-cyber-gray border border-cyber-border text-gray-300">{post.year}</span>
                      </div>
                    </div>

                    <h3 className={`mt-2 font-display font-semibold text-white ${isFeatured ? 'text-xl' : 'text-lg'} line-clamp-2 group-hover:text-neon-orange transition-colors`}>
                      {post.title}
                    </h3>
                    <p
                      className={`text-gray-400 text-sm mt-3 leading-relaxed ${isFeatured ? 'line-clamp-4' : 'line-clamp-3'}`}
                      style={{ display: '-webkit-box', WebkitLineClamp: isFeatured ? 4 : 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 text-[10px] font-cyber rounded border ${tagColor(t)}`}>
                          {t.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 inline-flex items-center gap-2 text-neon-orange group-hover:text-neon-cyan transition-colors">
                      <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
                      <span className="text-xs font-cyber tracking-wider">ACCESS_CONTENT</span>
                    </div>

                    {/* New badge */}
                    {isNew && (
                      <span className="absolute top-4 left-4 text-[10px] font-cyber px-2 py-0.5 bg-neon-lime/20 border border-neon-lime/50 text-neon-lime">NEW_ENTRY</span>
                    )}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default Articles;
