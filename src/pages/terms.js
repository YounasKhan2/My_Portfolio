// File: src/pages/terms.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowLeft, 
  FileText, 
  Scale, 
  AlertCircle, 
  Users, 
  Zap, 
  Shield, 
  Calendar, 
  Mail,
  CheckCircle,
  XCircle,
  Globe,
  Code,
  Terminal,
  PenTool
} from 'lucide-react';

export default function Terms() {
  const lastUpdated = "January 20, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          items: [
            "By accessing or using this website, you agree to be bound by these Terms of Service",
            "You represent you have legal capacity to enter into this agreement",
            "If using on behalf of an organization, you warrant you have authority to bind that entity"
          ]
        },
        {
          subtitle: "Modifications",
          items: [
            "We reserve the right to modify these terms at any time",
            "Material changes will be notified via website notice or email",
            "Your continued use constitutes acceptance of revised terms",
            "Review terms periodically for updates"
          ]
        }
      ]
    },
    {
      id: "use-license",
      title: "Use License",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Permitted Use",
          items: [
            "Personal, non-commercial use of website content",
            "Legitimate inquiries regarding professional services",
            "Educational purposes with proper attribution",
            "Linking to our content with appropriate context"
          ]
        },
        {
          subtitle: "Prohibited Activities",
          items: [
            "Commercial use without express written permission",
            "Data mining, scraping, or automated content extraction",
            "Creating derivative works without authorization",
            "Circumventing security or access controls",
            "Uploading malicious content or engaging in harmful activities"
          ]
        }
      ]
    },
    {
      id: "services",
      title: "Professional Services",
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Offerings",
          items: [
            "Custom mobile application development (Flutter, React Native)",
            "Web development (React, Next.js, Node.js, full-stack solutions)",
            "AI/ML integration and custom solutions",
            "UI/UX design and consultation services",
            "Technical consulting and architecture design"
          ]
        },
        {
          subtitle: "Service Terms",
          items: [
            "All professional services require separate written agreement",
            "Project scope, deliverables, and timelines defined per engagement",
            "Payment terms and milestones specified in service contracts",
            "Intellectual property rights negotiated per project",
            "Confidentiality terms outlined in non-disclosure agreements"
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Website Content",
          items: [
            "All original content © Muhammad Younas unless otherwise noted",
            "Includes text, graphics, logos, code, and design elements",
            "Protected by copyright, trademark, and other intellectual property laws",
            "Third-party content used with permission or under license"
          ]
        },
        {
          subtitle: "Project Work",
          items: [
            "Client projects governed by specific contractual terms",
            "Open source contributions subject to respective OSS licenses",
            "Portfolio rights typically retained for demonstration purposes",
            "Source code licensing negotiated per project requirements"
          ]
        }
      ]
    },
    {
      id: "disclaimers",
      title: "Disclaimers & Limitations",
      icon: <AlertCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Website Disclaimer",
          items: [
            "Content provided for informational purposes only",
            "No warranties of accuracy, completeness, or timeliness",
            "Technical errors or interruptions may occur",
            "Third-party links provided without endorsement"
          ]
        },
        {
          subtitle: "Professional Services",
          items: [
            "Services provided on professional best-effort basis",
            "Results may vary based on project specifications",
            "No guarantee of specific business outcomes or performance metrics",
            "Client responsibilities outlined in service agreements"
          ]
        },
        {
          subtitle: "Limitation of Liability",
          items: [
            "Not liable for indirect, incidental, or consequential damages",
            "Maximum liability limited to fees paid for services rendered",
            "Exclusions for force majeure events and client-provided materials",
            "Time limitation for claims as specified in service contracts"
          ]
        }
      ]
    },
    {
      id: "user-conduct",
      title: "User Conduct",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Acceptable Behavior",
          items: [
            "Professional and respectful communication at all times",
            "Accurate representation of identity and credentials",
            "Compliance with all applicable laws and regulations",
            "Good faith engagement for legitimate inquiries"
          ]
        },
        {
          subtitle: "Prohibited Conduct",
          items: [
            "Harassment, abuse, or discriminatory behavior of any kind",
            "Spam, phishing, or fraudulent activities",
            "Unauthorized access attempts or security testing without permission",
            "Misrepresentation of affiliation or endorsement",
            "Violation of third-party rights or privacy"
          ]
        }
      ]
    },
    {
      id: "termination",
      title: "Termination",
      icon: <XCircle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Website Access",
          items: [
            "We may terminate or restrict access for violation of these terms",
            "May occur without notice for egregious violations",
            "Termination does not affect accrued rights or obligations"
          ]
        },
        {
          subtitle: "Professional Services",
          items: [
            "Service contracts include specific termination provisions",
            "Typically require written notice and settlement of obligations",
            "Post-termination obligations may survive (e.g., confidentiality)"
          ]
        }
      ]
    }
  ];

  const keyPoints = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Fair Use",
      description: "Respect intellectual property and copyright laws"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Professional Standards",
      description: "Services provided with professional care and skill"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clear Agreements",
      description: "Project-specific terms override general terms"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Good Faith",
      description: "Mutual respect and professional conduct expected"
    }
  ];

  return (
    <div>
      <Head>
        <title>Terms of Service - Muhammad Younas</title>
        <meta name="description" content="Comprehensive Terms of Service for Muhammad Younas portfolio website and professional development services." />
        <meta name="keywords" content="terms of service, web developer terms, software development terms, Muhammad Younas" />
        <meta property="og:title" content="Terms of Service - Muhammad Younas" />
        <meta property="og:description" content="Legal terms governing use of Muhammad Younas' portfolio website and services." />
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
                className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Scale className="w-8 h-8 text-white" />
              </motion.div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Legal agreement governing your use of this website and services.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={16} />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>

          {/* Key Points Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                  {point.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Table of Contents
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
                      <ul className="space-y-3">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:text-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mt-8"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  Important Legal Notice
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  These terms constitute a binding legal agreement. For professional services, 
                  separate contracts containing detailed terms and conditions will be executed. 
                  Nothing in these terms creates an employment, partnership, or joint venture relationship.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mt-8"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="mb-6 text-purple-100">
              For clarification on any terms or to discuss professional services, 
              please contact us directly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail size={16} />
              Contact for Clarification
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>Governing Law:</strong> These terms shall be governed by and construed in accordance with the laws 
              of the jurisdiction where Muhammad Younas operates, without regard to conflict of law principles.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Effective Date:</strong> These terms were last updated on {lastUpdated} and are effective immediately upon posting.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}