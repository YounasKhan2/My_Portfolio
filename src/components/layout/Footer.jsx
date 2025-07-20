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
      href: "https://www.instagram.com/younas.k._k/?igsh=MTRsNjBxbnc1OWxlMA%3D%3D&utm_source=qr", 
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
    { name: 'Testimonials', href: '#testimonials', description: 'Client feedback' },
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
    location: "Quetta, Pakistan",
    timezone: "UTC+5"
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

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
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code className="text-blue-400" size={28} />
                  Muhammad Younas
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Full-stack developer passionate about creating innovative solutions with modern technologies. 
                  Specializing in mobile and web applications that make a difference.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>Available for new projects</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 ${link.color} rounded-lg transition-all duration-300 group`}
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
                <h4 className="text-lg font-semibold mb-6 text-blue-400">Navigation</h4>
                <ul className="space-y-4">
                  {quickLinks.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        className="group flex flex-col gap-1 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400">
                          {item.description}
                        </span>
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
                <h4 className="text-lg font-semibold mb-6 text-green-400">Services</h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="group flex flex-col gap-1">
                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                          {service.name}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400">
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
                <h4 className="text-lg font-semibold mb-6 text-purple-400">Get In Touch</h4>
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gray-800 group-hover:bg-purple-600 rounded-lg transition-colors duration-200">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-400">{contactInfo.email}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-gray-800 group-hover:bg-green-600 rounded-lg transition-colors duration-200">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-400">{contactInfo.phone}</div>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-400">{contactInfo.location}</div>
                      <div className="text-xs text-gray-500">{contactInfo.timezone}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <span>© {currentYear} Muhammad Younas.</span>
                <span>Crafted with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and Next.js</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a 
                  href="/privacy" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
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