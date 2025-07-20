// File: src/components/layout/Sidebar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronRight,
  Star
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  // Navigation items with icons
  const navItems = [
    { title: "Home", icon: <Home size={20} />, href: "/" },
    { title: "About", icon: <User size={20} />, href: "#about" },
    { title: "Skills", icon: <Code size={20} />, href: "#skills" },
    { title: "Projects", icon: <Briefcase size={20} />, href: "#projects" },
    { title: "Testimonials", icon: <Star size={20} />, href: "#testimonials" },
    { title: "Contact", icon: <Mail size={20} />, href: "#contact" }
  ];

  // Track scroll position to hide sidebar near footer
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const footerHeight = 600; // Approximate footer height
      
      // Hide sidebar when near footer
      setShowSidebar(scrollTop < (documentHeight - windowHeight - footerHeight));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed top-4 left-4 z-50 p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg 
          shadow-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
          dark:hover:text-white lg:hidden backdrop-blur-sm
          ${!showSidebar && 'lg:opacity-0 lg:pointer-events-none'}
        `}
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      {/* Desktop Hover Trigger Area */}
      <div
        className={`
          hidden lg:block fixed left-0 top-0 w-16 h-full z-40
          ${!showSidebar && 'lg:opacity-0 lg:pointer-events-none'}
        `}
        onMouseEnter={() => setIsHovered(true)}
      />

      {/* Desktop Indicator - Only visible when sidebar is closed */}
      <AnimatePresence>
        {!isHovered && showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden lg:block fixed left-3 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
          >
            <motion.div
              animate={{
                x: [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-1 h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent rounded-full" />
              <motion.div className="text-blue-500/70 dark:text-blue-400/70">
                <ChevronRight size={20} />
              </motion.div>
              <div className="w-1 h-16 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isHovered ? 'lg:translate-x-0' : 'lg:-translate-x-full'}
          ${!showSidebar && 'lg:opacity-0 lg:pointer-events-none'}
          w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm lg:w-auto lg:min-w-[200px]
          lg:bg-transparent lg:dark:bg-transparent
        `}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Close button - only visible on mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white lg:hidden"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Navigation Links - Centered in desktop with compact background */}
        <nav className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full">
          <div className={`
            p-6 lg:p-8
            lg:bg-white/10 lg:dark:bg-gray-900/10 lg:backdrop-blur-sm lg:rounded-r-xl
            ${isHovered ? 'lg:shadow-lg' : ''}
          `}>
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 text-lg whitespace-nowrap"
                    onClick={() => {
                      setIsOpen(false);
                      setIsHovered(false);
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay - only visible on mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;