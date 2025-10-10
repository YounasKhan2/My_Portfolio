// File: src/components/sections/Articles.jsx
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const articles = [
  {
    title: 'Showcasing Full Stack Expertise and Innovative Problem Solving',
    url: 'https://www.loom.com/share/e3cb654b8dff4f039af640ab7fcb76ae',
    summary:
      'Video walkthrough of my full‑stack work and problem‑solving: an AI‑powered SaaS platform (React/Next.js, Node/Express, Python services with AssemblyAI/OpenAI, Stripe, Cloudinary, PostgreSQL) and a Python NLP project on FastAPI. I optimized real‑time transcription to under one second and used model quantization to run on low‑resource devices. I also share strengths (full‑stack, problem‑solving, continuous learning) and my timeboxing approach to avoid over‑optimization.',
    tags: ['Video', 'Full-Stack', 'Next.js', 'Node.js', 'Python', 'AI/ML'],
    year: '2025'
  }
];

// Lightweight helpers for UI polish
const tagColor = (t) => {
  const k = t.toLowerCase();
  if (k.includes('next')) return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40';
  if (k.includes('flutter') || k.includes('dart')) return 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800/40';
  if (k.includes('ai') || k.includes('openai') || k.includes('llama')) return 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40';
  if (k.includes('stripe')) return 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/40';
  return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200/60 dark:border-gray-600/60';
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
    <section id="articles" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Short write-ups and guides from my projects and learning.</p>
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
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-move">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/90 dark:bg-gray-800/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[200px]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FileText size={16} />
                        <span className="text-xs">Article</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {reading && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">{reading}</span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{post.year}</span>
                      </div>
                    </div>

                    <h3 className={`mt-3 font-semibold text-gray-900 dark:text-white ${isFeatured ? 'text-xl' : 'text-lg'} line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                      {post.title}
                    </h3>
                    <p
                      className={`text-gray-600 dark:text-gray-300 mt-2 ${isFeatured ? 'line-clamp-4' : 'line-clamp-3'}`}
                      style={{ display: '-webkit-box', WebkitLineClamp: isFeatured ? 4 : 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 text-[11px] rounded-full border ${tagColor(t)}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
                      <span className="text-sm">Read more</span>
                    </div>

                    {/* New badge + hover action */}
                    {isNew && (
                      <span className="absolute top-3 left-3 text-[11px] px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">New</span>
                    )}
                    <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                      <ExternalLink size={14} />
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes gradientMove { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
          .animate-gradient-move { background-size: 200% 200%; animation: gradientMove 8s linear infinite; }
        `}</style>
      </div>
    </section>
  );
};

export default Articles;
