// File: src/components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/YounasKhan2", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/younas.k._k.?igsh=MTRsNjBxbnc1OWxlMA%3D%3D&utm_source=qr", label: "Instagram" }
  ];

  const reviews = [
    {
      name: "John Smith",
      role: "CEO at TechCorp",
      content: "Muhammad's attention to detail and creative problem-solving skills made our project a huge success. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Working with Muhammad was a pleasure. His technical expertise and communication skills are outstanding.",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "Startup Founder",
      content: "Exceptional developer who delivers high-quality work consistently. Will definitely work with him again!",
      rating: 5
    }
  ];

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-700 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        {/* Client Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{review.content}</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Mail size={20} />
              <a href="mailto:contact@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                younaskk120@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Phone size={20} />
              <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                
                +92 313 0812324
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <MapPin size={20} />
              <span>Quetta, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
  <ul className="space-y-2">
    {[
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ].map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Muhammad Younas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;