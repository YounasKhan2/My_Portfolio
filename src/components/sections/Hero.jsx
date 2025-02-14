// File: src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Muhammad Younas
              </span>
            </h1>

            <div className="h-12">
              <AnimatedText texts={['Web Developer', 'App Developer', 'Designer']} />
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              A passionate Web & App Developer specializing in modern web technologies,
              creating beautiful and functional digital experiences.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[350px] h-[420px] lg:w-[350px] lg:h-[450px]">
              {/* Subtle spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-3xl filter blur-3xl opacity-60" />
              
              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Muhammad Younas"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;