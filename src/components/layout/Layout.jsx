// File: src/components/layout/Layout.jsx
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Analytics } from "@vercel/analytics/next";

// Import Sidebar normally as it's critical for navigation
import Sidebar from './Sidebar';

// Dynamically import non-critical components
const Header = dynamic(() => import('./Header'), {
  ssr: true,
  loading: () => <div className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" />
});

const Footer = dynamic(() => import('./Footer'), {
  ssr: true,
  loading: () => <div className="h-24 bg-white/80 dark:bg-gray-900/80" />
});

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle theme initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get stored theme or system preference
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
      setMounted(true);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        if (!localStorage.getItem('theme')) {
          setIsDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, mounted]);

  // Avoid theme flash on initial load
  if (!mounted) {
    return (
      <div className="relative min-h-screen bg-gray-50">
        <div className="h-16 bg-white/80 backdrop-blur-sm" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-[#0B1121] transition-colors duration-300">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Sidebar />
      <main className="pt-16 transition-colors duration-300">
        {children}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;