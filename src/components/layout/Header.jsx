// File: src/components/layout/Header.jsx
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/YounasKhan2", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/younas.k._k.?igsh=MTRsNjBxbnc1OWxlMA%3D%3D&utm_source=qr", label: "Instagram" }
  ];

  return (
    <header className="fixed top-0 w-full h-16 bg-white/80 dark:bg-gray-900/80 z-30 backdrop-blur-sm">
      <div className="h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left side - Logo/Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-semibold text-gray-800 dark:text-white ml-12 lg:ml-0" // Added margin for mobile
        >
          Muhammad Younas
        </motion.div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Social Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700" />

          {/* Download/Open CV Button - Desktop only */}
          <motion.a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            <span>CV</span>
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="mailto:younaskk120@gmail.com"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} />
            <span>Contact</span>
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;