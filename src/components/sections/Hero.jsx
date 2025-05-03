// File: src/components/sections/Hero.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedText from '../ui/AnimatedText';
import Link from 'next/link';

// Extended Code snippets
const CodeSnippets = [
  {
    code: `function Developer() {
  return {
    name: "Muhammad Younas",
    skills: ["React", "Next.js", "Flutter"]
  }
}`
  },
  {
    code: `const Project = {
  type: "Amazing",
  status: "In Progress",
  coffee: "Required ☕️"
}`
  },
  {
    code: `.developer {
  creativity: infinite;
  passion: 100%;
  coffee-level: high;
}`
  },
  {
    code: `// Building amazing experiences
const skills = [
  "Frontend 💻",
  "Mobile Apps 📱",
  "UI/UX Design 🎨"
];`
  },
  {
    code: `async function coffee() {
  while (coding) {
    await drink('☕️');
    continue coding;
  }
}`
  },
  {
    code: `// Success formula
if (coffee.empty) {
  refill();
} else {
  keepCoding();
}`
  }
];

const FloatingCode = ({ code, index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.3, 0.2, 0.3],
      y: [-10, 10, -10],
      x: [-5, 5, -5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: index * 2,
      ease: "linear"
    }}
    className="absolute hidden lg:block pointer-events-none text-sm font-mono"
    style={{
      top: `${15 + (index * 15)}%`,
      right: `${5 + ((index % 3) * 15)}%`,
      transform: `rotate(${-5 + (index * 2)}deg)`,
      maxWidth: '300px'
    }}
  >
    <pre className="whitespace-pre text-primary-600 dark:text-primary-400">
      {code}
    </pre>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20 relative overflow-hidden">
      
      {/* Floating Code Background */}
      {CodeSnippets.map((snippet, index) => (
        <FloatingCode key={index} code={snippet.code} index={index} />
      ))}

      {/* Rest of your Hero component remains the same */}
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
              <motion.span 
                className="text-primary-600 dark:text-primary-400 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Muhammad Younas
              </motion.span>
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
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors group"
              >
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight size={20} />
                </motion.div>
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
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-primary-500/5 to-purple-500/10 rounded-3xl filter blur-3xl opacity-60" />
              
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                    "0 25px 50px -12px rgba(139, 92, 246, 0.15)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
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