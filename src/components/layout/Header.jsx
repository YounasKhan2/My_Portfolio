// File: src/components/layout/Header.jsx
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  Link as LinkIcon // Rename to avoid conflict with next/link
} from 'lucide-react';
import Link from 'next/link';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/YounasKhan2", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mr-khan-65b123241", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/younas._k._k._/", label: "Instagram" },
    { icon: <LinkIcon size={18} />, href: "https://www.fiverr.com/s/lj50dm7", label: "Fiverr" }
  ];

  return (
    <header className="fixed top-0 w-full h-16 bg-cyber-dark/90 z-30 backdrop-blur-md border-b border-cyber-border">
      <div className="h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left side - Logo/Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 ml-12 lg:ml-0"
        >
          <span className="font-display text-xl font-bold text-neon-cyan">MY</span>
          <span className="hidden sm:block font-cyber text-xs text-gray-400">v2.0</span>
        </motion.div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Social Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-neon-cyan transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-cyber-border" />

          {/* Download CV Button - Desktop only */}
          <motion.a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-black text-xs font-cyber tracking-wider transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={14} />
            <span>CV.DAT</span>
          </motion.a>
          
          {/* Contact Button */}
          <motion.a
            href="mailto:younaskk120@gmail.com"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-cyber-border text-gray-300 hover:border-neon-magenta hover:text-neon-magenta text-xs font-cyber tracking-wider transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={14} />
            <span>MAIL</span>
          </motion.a>

          {/* Theme Toggle - Hidden (only dark mode for cyberpunk) */}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hidden p-2 border border-cyber-border text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;