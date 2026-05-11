// File: src/components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Link as LinkIcon,
  Code,
  Heart,
  Calendar
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/YounasKhan2", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://linkedin.com/in/mr-khan-65b123241", 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/younas._k._k._/", 
      label: "Instagram",
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    },
    { 
      icon: <LinkIcon size={24} />, 
      href: "https://www.fiverr.com/s/lj50dm7", 
      label: "Fiverr",
      color: "hover:text-green-600 dark:hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', description: 'Back to homepage' },
    { name: 'About', href: '#about', description: 'Learn more about me' },
    { name: 'Skills', href: '#skills', description: 'My technical expertise' },
    { name: 'Projects', href: '#projects', description: 'View my work' },
    { name: 'Experience', href: '#experience', description: 'Roles and impact' },
    { name: 'Articles', href: '#articles', description: 'Blogs & Videos' },
    { name: 'Contact', href: '#contact', description: 'Get in touch' }
  ];

  const services = [
    { name: 'Mobile App Development', description: 'Flutter & React Native' },
    { name: 'Web Development', description: 'React, Next.js & Modern Stack' },
    { name: 'AI Integration', description: 'LLM & Machine Learning' },
    { name: 'UI/UX Design', description: 'User-centered design' }
  ];

  const contactInfo = {
    email: "younaskk120@gmail.com",
    phone: "+92 313 0812324",
  location: "Lahore, Pakistan",
    timezone: "UTC+5"
  };

  return (
    <footer className="relative bg-cyber-black border-t border-cyber-border overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                  <Code className="text-neon-cyan" size={28} />
                  <span className="text-white">MY</span>
                  <span className="font-cyber text-xs text-neon-cyan">v2.0</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Full-stack developer passionate about creating innovative solutions with modern technologies. 
                  Building the future, one line of code at a time.
                </p>
                <div className="flex items-center gap-2 text-xs font-cyber text-neon-lime">
                  <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
                  <span>SYSTEM_ONLINE</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="font-cyber text-xs text-gray-500 tracking-widest mb-4">CONNECT_NODES</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 border border-cyber-border text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="font-cyber text-neon-magenta text-xs tracking-widest mb-6">NAVIGATION</h4>
                <ul className="space-y-3">
                  {quickLinks.map((item) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors duration-200"
                      >
                        <span className="text-neon-cyan text-xs">›</span>
                        <span className="text-sm">{item.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="font-cyber text-neon-lime text-xs tracking-widest mb-6">SERVICES</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <motion.li 
                      key={service.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="group flex flex-col gap-1">
                        <span className="text-sm text-gray-300 group-hover:text-neon-lime transition-colors duration-200">
                          {service.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {service.description}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-cyber text-neon-purple text-xs tracking-widest mb-6">CONTACT_DATA</h4>
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-purple transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <Mail size={16} className="text-neon-purple" />
                    <span className="text-sm font-mono">{contactInfo.email}</span>
                  </motion.a>

                  <motion.a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-lime transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <Phone size={16} className="text-neon-lime" />
                    <span className="text-sm font-mono">{contactInfo.phone}</span>
                  </motion.a>

                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={16} className="text-neon-cyan" />
                    <div>
                      <span className="text-sm font-mono">{contactInfo.location}</span>
                      <span className="text-xs text-gray-500 font-cyber block">{contactInfo.timezone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-border bg-cyber-dark/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-xs font-cyber text-gray-500">
                <span>© {currentYear} SYSTEM_YK</span>
                <span className="text-neon-cyan">|</span>
                <span>CRAFTED_WITH</span>
                <Heart size={12} className="text-neon-magenta" />
                <span>AND_CODE</span>
              </div>
              
              <div className="flex items-center gap-6 text-xs font-cyber text-gray-500">
                <a 
                  href="/privacy" 
                  className="hover:text-neon-cyan transition-colors duration-200"
                >
                  PRIVACY_POLICY
                </a>
                <a 
                  href="/terms" 
                  className="hover:text-neon-cyan transition-colors duration-200"
                >
                  TERMS_OF_SERVICE
                </a>
                <div className="flex items-center gap-2 text-neon-lime">
                  <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse"></div>
                  <span>AVAILABLE_FOR_WORK</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;