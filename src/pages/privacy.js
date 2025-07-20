// File: src/pages/privacy.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database, Globe, UserCheck, Calendar, Mail } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = "January 20, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name and email address when you contact us through forms",
            "Professional information you choose to share",
            "Communication preferences and feedback"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "IP address and browser type for security purposes",
            "Website usage patterns to improve user experience",
            "Device information for responsive design optimization",
            "Cookies and similar tracking technologies"
          ]
        }
      ]
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Communication",
          items: [
            "Respond to your inquiries and project requests",
            "Send updates about project progress (if applicable)",
            "Provide technical support and assistance"
          ]
        },
        {
          subtitle: "Service Improvement",
          items: [
            "Analyze website performance and user engagement",
            "Enhance user experience and functionality",
            "Develop new features based on user feedback",
            "Troubleshoot technical issues"
          ]
        }
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "SSL encryption for all data transmission",
            "Secure servers with regular security updates",
            "Limited access to personal information",
            "Regular security audits"
          ]
        },
        {
          subtitle: "Data Retention",
          items: [
            "Personal data retained only as long as necessary",
            "Automatic deletion of old contact form submissions",
            "Secure disposal of unnecessary information",
            "Data minimization principles applied"
          ]
        }
      ]
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: <Globe className="w-5 h-5" />,
      content: [
        {
          subtitle: "Services Used",
          items: [
            "EmailJS for contact form functionality",
            "Google Analytics for website performance (anonymized)",
            "Vercel/Netlify for hosting services",
            "Cloudflare for security and CDN services"
          ]
        },
        {
          subtitle: "Third-Party Policies",
          items: [
            "Each service has its own privacy policy",
            "We recommend reviewing their policies",
            "We do not sell or share personal data with third parties",
            "Data processing agreements in place where required"
          ]
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        {
          subtitle: "Data Rights",
          items: [
            "Request access to your personal information",
            "Request correction of inaccurate data",
            "Request deletion of your personal data",
            "Object to processing of your data"
          ]
        },
        {
          subtitle: "Control Options",
          items: [
            "Opt-out of non-essential communications",
            "Request data portability",
            "Withdraw consent at any time",
            "Lodge complaints with regulatory authorities"
          ]
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookies Policy",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Types of Cookies",
          items: [
            "Essential cookies for website functionality",
            "Performance cookies for analytics",
            "Preference cookies for user settings"
          ]
        },
        {
          subtitle: "Managing Cookies",
          items: [
            "Browser settings can control cookie preferences",
            "Opt-out mechanisms for analytics cookies",
            "Clear cookies through browser settings"
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <Head>
        <title>Privacy Policy - Muhammad Younas</title>
        <meta name="description" content="Privacy Policy for Muhammad Younas portfolio website. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, Muhammad Younas, web developer privacy" />
        <meta property="og:title" content="Privacy Policy - Muhammad Younas" />
        <meta property="og:description" content="Privacy Policy for Muhammad Younas portfolio website. Learn how we collect, use, and protect your personal information." />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Lock className="w-8 h-8 text-white" />
              </motion.div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Quick Navigation
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {section.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="text-blue-600 dark:text-blue-400">
                    {section.icon}
                  </div>
                  {section.title}
                </h2>
                
                <div className="space-y-6">
                  {section.content.map((subsection, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="mb-6 text-blue-100">
              If you have any questions about this Privacy Policy or how your data is handled, 
              please don't hesitate to contact us.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail size={16} />
              Contact Us
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This Privacy Policy is effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, 
              which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}