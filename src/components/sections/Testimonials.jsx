// File: src/components/sections/Testimonials.jsx
import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohammad",
      role: "CEO",
      company: "TechCorp",
      avatar: "/images/avatars/john.jpg", // You can add actual avatars later
      content: "Muhammad's attention to detail and creative problem-solving skills made our project a huge success. His ability to deliver high-quality solutions on time is remarkable.",
      rating: 5,
      project: "E-commerce Platform",
      color: "blue"
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "/images/avatars/sarah.jpg",
      content: "Working with Muhammad was a pleasure. His technical expertise and communication skills are outstanding. He transformed our ideas into a beautiful, functional application.",
      rating: 5,
      project: "Mobile App Development",
      color: "purple"
    },
    {
      name: "Alex Chen",
      role: "Startup Founder",
      company: "NextGen Solutions",
      avatar: "/images/avatars/alex.jpg",
      content: "Exceptional developer who delivers high-quality work consistently. His knowledge of modern technologies and best practices is impressive. Will definitely work with him again!",
      rating: 5,
      project: "AI Integration Platform",
      color: "green"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "DataFlow Inc",
      avatar: "/images/avatars/emily.jpg",
      content: "Muhammad's expertise in Flutter development is top-notch. He delivered a complex mobile application that exceeded our expectations in both functionality and performance.",
      rating: 5,
      project: "Data Analytics App",
      color: "orange"
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: "50+", label: "Happy Clients", color: "blue" },
    { icon: <Star size={24} />, value: "4.9", label: "Average Rating", color: "yellow" },
    { icon: <Award size={24} />, value: "100%", label: "Project Success", color: "green" },
    { icon: <TrendingUp size={24} />, value: "98%", label: "Client Retention", color: "purple" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-blue-900/20 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say About My Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my amazing clients have to say about our collaboration and the results we achieved together.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400 mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Testimonial Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className={`absolute -top-4 -left-4 p-3 bg-${testimonial.color}-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Quote size={20} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm mb-6">
                  <div className={`w-2 h-2 bg-${testimonial.color}-500 rounded-full`}></div>
                  <span>{testimonial.project}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${testimonial.color}-400 to-${testimonial.color}-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${testimonial.color}-100 to-transparent dark:from-${testimonial.color}-900/20 rounded-2xl -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join these amazing clients and let's create something extraordinary together. 
            I'm committed to delivering exceptional results that exceed your expectations.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
