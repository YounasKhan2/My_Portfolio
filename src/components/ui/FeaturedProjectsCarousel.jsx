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
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
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
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl md:text-5xl font-bold mb-2">{currentProject.title}</h3>
                    <p className="text-lg md:text-xl opacity-90">{currentProject.shortDesc}</p>
                  </div>
                </div>
              )}
              {/* Dark Gradient Overlay for Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Caption - Like CoreUI CCarouselCaption */}
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
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/90 text-yellow-900">
                      <Star size={12} /> Featured
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/30 text-blue-100 border border-blue-400/30">
                    {Array.isArray(currentProject.category) ? currentProject.category[0] : currentProject.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-500/30 text-gray-100 border border-gray-400/30">
                    {currentProject.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2">
                  {currentProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-xs rounded bg-white/10 text-white/90 border border-white/20"
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
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Mobile Caption (Always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:hidden bg-gradient-to-t from-black/95 to-transparent">
              <h3 className="text-lg font-bold mb-1">{currentProject.title}</h3>
              <p className="text-xs text-gray-300 line-clamp-1">{currentProject.shortDesc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls - Like CoreUI controls */}
        {projects.length > 1 && (
          <>
            {/* Previous Button - 15% width area like CoreUI */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-0 bottom-0 w-[15%] z-10 flex items-center justify-start pl-4 bg-gradient-to-r from-black/50 to-transparent opacity-50 hover:opacity-90 transition-opacity duration-150"
              aria-label="Previous slide"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                <ChevronLeft size={24} />
              </span>
            </button>

            {/* Next Button - 15% width area like CoreUI */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-0 bottom-0 w-[15%] z-10 flex items-center justify-end pr-4 bg-gradient-to-l from-black/50 to-transparent opacity-50 hover:opacity-90 transition-opacity duration-150"
              aria-label="Next slide"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                <ChevronRight size={24} />
              </span>
            </button>
          </>
        )}
      </div>

      {/* Indicators - Like CoreUI indicators */}
      {projects.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-600 ease-out ${
                index === currentIndex
                  ? 'w-8 bg-white opacity-100'
                  : 'w-8 bg-white/50 hover:bg-white/70'
              }`}
              style={{ 
                height: '3px',
                transition: 'opacity 0.6s ease, width 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {projects.length > 1 && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 z-20">
          <motion.div
            className="h-full bg-blue-600"
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
