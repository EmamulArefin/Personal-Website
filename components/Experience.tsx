'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { title } from 'node:process';

export function Experience() {
  const experiences = [
   /* {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications using React, Next.js, and Node.js",
        "Implemented microservices architecture resulting in 40% improved performance",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"]
    }*/
    {
      title: "Fresh Man", }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in web development and the impact I've made
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      {/* <div className="flex items-center text-blue-600 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-medium">{experience.company}</span>
                      </div>*/}
                    </div>
                   {/* <div className="flex flex-col md:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>*/}
                  </div>

                  {/*<ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                     
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>*/}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}