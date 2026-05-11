import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github, 
  Linkedin, 
  Instagram,
  Link as LinkIcon,
  Terminal
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Get current date in a readable format
    const currentDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    try {
      const response = await emailjs.send(
        'service_ts0q54e',    // Service ID
        'template_2chn5ls',   // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          current_date: currentDate  // Add this line to pass the date
        },
        'VAbyDzYrPrPRaoZaB'   // Public Key
      );

      console.log('Email sent successfully:', response);

      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert(`Failed to send message. ${error.text || error.message}`);
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "younaskk120@gmail.com",
      href: "mailto:younaskk120@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 313 0812324",
      href: "tel:+923130812324"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/YounasKhan2",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/mr-khan-65b123241",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/younas.k._k.?igsh=MTRsNjBxbnc1OWxlMA%3D%3D&utm_source=qr",
      label: "Instagram"
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      href: "https://www.fiverr.com/s/lj50dm7",
      label: "Fiverr"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-black scroll-mt-16">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon-cyan/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-cyber text-neon-cyan text-sm tracking-widest">05</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
            INITIATE<span className="text-neon-cyan">.</span>CONTACT
          </h2>
          <p className="font-cyber text-gray-400 text-sm tracking-widest">
            // Establish communication channel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Terminal window */}
            <div className="cyber-card p-6 corner-accent">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cyber-border">
                <Terminal size={18} className="text-neon-cyan" />
                <span className="font-cyber text-neon-cyan text-xs tracking-widest">contact_info.exe</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="font-mono text-sm space-y-4">
                <p className="text-gray-400">$ whoami</p>
                <p className="text-white">Full Stack Developer open for collaboration</p>
                
                <p className="text-gray-400 mt-4">$ cat contact_details.json</p>
                <div className="space-y-3 mt-2">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group"
                    >
                      <span className="text-neon-cyan">{info.icon}</span>
                      <div>
                        <span className="text-gray-500 font-cyber text-xs block">{info.label}</span>
                        <span className="font-medium group-hover:text-neon-cyan transition-colors">{info.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card p-6">
              <h4 className="font-cyber text-neon-magenta text-xs tracking-widest mb-4">
                CONNECT_NODES
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-cyber-border text-gray-400 hover:border-neon-magenta hover:text-neon-magenta transition-all"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Terminal Input Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cyber-card p-6 corner-accent">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyber-border">
                <Send size={18} className="text-neon-lime" />
                <span className="font-cyber text-neon-lime text-xs tracking-widest">transmit_message.exe</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-cyber text-xs text-gray-400 tracking-widest mb-2">
                      FROM_NAME
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-dark border border-cyber-border focus:border-neon-cyan focus:outline-none text-white font-mono transition-colors"
                      placeholder="your_name"
                    />
                  </div>
                  <div>
                    <label className="block font-cyber text-xs text-gray-400 tracking-widest mb-2">
                      FROM_EMAIL
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-dark border border-cyber-border focus:border-neon-cyan focus:outline-none text-white font-mono transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-cyber text-xs text-gray-400 tracking-widest mb-2">
                    SUBJECT_LINE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-border focus:border-neon-cyan focus:outline-none text-white font-mono transition-colors"
                    placeholder="Message subject..."
                  />
                </div>
                <div>
                  <label className="block font-cyber text-xs text-gray-400 tracking-widest mb-2">
                    MESSAGE_DATA
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-border focus:border-neon-cyan focus:outline-none text-white font-mono transition-colors resize-none"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button w-full py-4 font-cyber text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>EXECUTE_SEND</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;