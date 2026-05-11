// File: src/components/ui/FeaturedProjectsCarousel.jsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from 'lucide-react';

const FeaturedProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play every 6 seconds
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, projects.length]);

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto mb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden border border-cyber-border bg-cyber-dark">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-neon-cyan z-20" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-neon-cyan z-20" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-neon-cyan z-20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-neon-cyan z-20" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative aspect-[16/9] md:aspect-[2.35/1]"
          >
            {/* Image/Background */}
            <div className="absolute inset-0">
              {currentProject.image ? (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cyber-gray via-cyber-dark to-cyber-black flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 text-neon-cyan">
                      {currentProject.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400">{currentProject.shortDesc}</p>
                  </div>
                </div>
              )}
              {/* Dark Gradient Overlay for Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/60 to-transparent" />
            </div>

            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-32 pointer-events-none"
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Caption - Cyberpunk Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white hidden md:block"
            >
              <div className="max-w-[70%]">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  {currentProject.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-cyber tracking-wider bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/50">
                      <Star size={12} /> FEATURED
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs font-cyber tracking-wider bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50">
                    {Array.isArray(currentProject.category) ? currentProject.category[0] : currentProject.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-cyber tracking-wider bg-cyber-gray text-gray-300 border border-cyber-border">
                    {currentProject.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2">
                  {currentProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-xs font-cyber rounded bg-cyber-gray/80 text-gray-300 border border-cyber-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button px-4 py-2 text-xs inline-flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      <span>ACCESS_PROJECT</span>
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-cyber-border text-gray-400 hover:text-neon-magenta hover:border-neon-magenta transition-all text-xs font-cyber inline-flex items-center gap-2"
                    >
                      <Github size={14} />
                      <span>SOURCE_CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Mobile Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:hidden bg-gradient-to-t from-cyber-black to-transparent">
              <h3 className="text-lg font-display font-bold mb-1 text-neon-cyan">{currentProject.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-1">{currentProject.shortDesc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls - Cyberpunk Style */}
        {projects.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 border border-cyber-border bg-cyber-dark/80 hover:border-neon-cyan hover:text-neon-cyan transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 border border-cyber-border bg-cyber-dark/80 hover:border-neon-cyan hover:text-neon-cyan transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Indicators - Cyberpunk Style */}
      {projects.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-neon-cyan shadow-neon-cyan'
                  : 'w-4 bg-cyber-border hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar - Neon style */}
      {projects.length > 1 && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-border z-20">
          <motion.div
            className="h-full bg-neon-cyan shadow-neon-cyan"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: 'linear' }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default FeaturedProjectsCarousel;
