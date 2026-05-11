// File: src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { Terminal, ArrowDown, Code2, Cpu, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

// Typewriter effect hook
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setIsComplete(false);
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// Glitch text component
const GlitchText = ({ text, className = '' }) => {
  return (
    <span className={`glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </span>
  );
};

// Terminal line component
const TerminalLine = ({ prompt, command, delay = 0 }) => {
  const { displayText, isComplete } = useTypewriter(command, 40);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isComplete) {
      const blink = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(blink);
    }
  }, [isComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="font-mono text-sm md:text-base"
    >
      <span className="text-neon-lime">➜</span>{' '}
      <span className="text-cyber-border">~</span>{' '}
      <span className="text-neon-cyan">{prompt}</span>{' '}
      <span className="text-gray-300">
        {displayText}
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
      </span>
    </motion.div>
  );
};

// Floating decoration component
const FloatingDecoration = ({ icon: Icon, delay, position }) => (
  <motion.div
    className={`absolute hidden lg:block text-neon-cyan/30 ${position}`}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon size={48} strokeWidth={1} />
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-cyber-black cyber-grid flex items-center">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

      {/* Floating decorations */}
      <FloatingDecoration icon={Code2} delay={0} position="top-[15%] right-[10%]" />
      <FloatingDecoration icon={Cpu} delay={1} position="top-[40%] right-[5%]" />
      <FloatingDecoration icon={Globe} delay={2} position="bottom-[30%] right-[12%]" />

      {/* Diagonal accent lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#line-gradient)" strokeWidth="1" />
        <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="url(#line-gradient)" strokeWidth="0.5" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Terminal Aesthetic Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-gray/80 border border-neon-cyan/30 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
              <span className="text-neon-cyan font-cyber text-xs tracking-widest uppercase">Available for hire</span>
            </motion.div>

            {/* Main heading with glitch effect */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 font-mono text-sm tracking-widest uppercase"
              >
                System.init(developer)
              </motion.p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
                <GlitchText text="MUHAMMAD" className="text-white block" />
                <GlitchText text="YOUNAS" className="text-neon-cyan block" />
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mt-4"
              />
            </div>

            {/* Terminal-style description */}
            <div className="bg-cyber-dark/80 backdrop-blur-sm border border-cyber-border rounded-lg p-6 max-w-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyber-border">
                <Terminal size={16} className="text-neon-cyan" />
                <span className="text-xs text-gray-500 font-mono">developer_profile.exe</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              <div className="space-y-2">
                <TerminalLine prompt="role" command="Full Stack Developer" delay={0.8} />
                <TerminalLine prompt="stack" command="React • Next.js • Flutter • Node.js" delay={1.2} />
                <TerminalLine prompt="status" command="Building the future, one pixel at a time" delay={1.6} />
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="cyber-button px-8 py-4 rounded font-cyber text-sm tracking-widest group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXPLORE_WORK
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border border-cyber-border text-gray-400 hover:text-neon-cyan hover:border-neon-cyan rounded font-cyber text-sm tracking-widest transition-all duration-300"
              >
                INIT_CONTACT
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Asymmetric Profile Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative frame */}
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-neon-cyan" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-neon-magenta" />
              
              {/* Rotating border effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan rounded-lg opacity-50 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Main image container */}
              <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[400px] lg:h-[520px] bg-cyber-dark border border-cyber-border overflow-hidden corner-accent">
                {/* Profile image */}
                <img
                  src="/images/profile.jpg"
                  alt="Muhammad Younas"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/profile.png';
                  }}
                />

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent" />
                
                {/* Holographic scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent h-20"
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Data overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-cyber text-xs text-neon-cyan/70 space-y-1">
                    <p>ID: DEV_001</p>
                    <p>EXP: 2+ YEARS</p>
                    <p>LOC: PAKISTAN</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                className="absolute -left-8 top-20 bg-cyber-dark/90 backdrop-blur border border-neon-cyan/30 rounded p-3 hidden lg:block"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-cyber text-neon-cyan text-xs">PROJECTS</p>
                <p className="font-display text-2xl text-white">25+</p>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-32 bg-cyber-dark/90 backdrop-blur border border-neon-magenta/30 rounded p-3 hidden lg:block"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="font-cyber text-neon-magenta text-xs">TECH_STACK</p>
                <p className="font-display text-2xl text-white">15+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="font-cyber text-xs text-gray-500 tracking-widest">SCROLL_DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;