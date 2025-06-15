'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, and modern JavaScript frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Proficient in Node.js, .NET, and database management"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end web application development and deployment"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach with modern UI/UX principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  As a dedicated full stack web developer, I specialize in creating robust and scalable 
                  web applications using cutting-edge technologies. My expertise spans across frontend 
                  and backend development, with a strong focus on user experience and performance optimization.
                </p>
                <p>
                  I have extensive experience working with React, Next.js, Node.js, and various databases 
                  including PostgreSQL, MySQL, and SQL Server. I'm also proficient in .NET MVC, Python, 
                  and modern development tools and practices.
                </p>
                <p>
                  My passion lies in solving complex problems through clean, efficient code and creating 
                  applications that make a positive impact on users' lives.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-blue-600 mb-4">{highlight.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers and designers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Start a Conversation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}