import React from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ChapterTwo: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Learning Assistant",
      description: "An intelligent tutoring system that adapts to individual learning styles, providing personalized explanations and practice problems across multiple subjects.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "Machine Learning", "Natural Language Processing", "Flask"],
      status: "In Development",
      github: "https://github.com/Abhiix0",
      demo: "#"
    },
    {
      title: "Smart Campus Navigator",
      description: "A comprehensive campus navigation system with real-time updates, event integration, and accessibility features for students and visitors.",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["React", "Google Maps API", "Firebase", "Progressive Web App"],
      status: "Completed",
      github: "https://github.com/Abhiix0",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for analyzing and visualizing complex datasets with customizable charts, filters, and real-time data processing capabilities.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      status: "Completed",
      github: "https://github.com/Abhiix0",
      demo: "#"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure, transparent voting platform built on blockchain technology, ensuring vote integrity and providing real-time election monitoring capabilities.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      status: "Prototype",
      github: "https://github.com/Abhiix0",
      demo: "#"
    },
    {
      title: "Weather Prediction ML Model",
      description: "Advanced machine learning model for weather forecasting using historical data, satellite imagery, and atmospheric patterns for accurate predictions.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
      tech: ["Python", "TensorFlow", "Scikit-learn", "API Integration"],
      status: "Research Phase",
      github: "https://github.com/Abhiix0",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="h-full p-12 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated parchment texture overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10 bg-repeat" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Chapter II</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Quests</h2>
        </motion.div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DropCap letter="E" />
            <p className="text-lg mb-6 font-serif">
              very hero must prove their worth through trials and quests. In the realm of development, 
              these trials take the form of projects—each one a unique challenge that tests skills, 
              creativity, and perseverance. Here are the chronicles of my most significant adventures.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-12 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={projectVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8 bg-white/80 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="w-full lg:w-1/3">
                    <motion.div 
                      className="relative overflow-hidden rounded-lg shadow-md"
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300"
                      />
                      <motion.div 
                        className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {project.status}
                      </motion.div>
                      
                      {/* Magical shimmer overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ 
                          x: '100%', 
                          opacity: 1,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="w-full lg:w-2/3">
                    <motion.h3 
                      className="text-2xl font-bold text-amber-800 mb-3 font-serif"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-700 mb-4 font-serif leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold border border-amber-300 hover:bg-amber-200 transition-colors duration-200"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: 0.6 + index * 0.1 + techIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <motion.a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors duration-200 font-semibold shadow-md"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.a>
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200 font-semibold shadow-md"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative flourish between projects */}
                {index < projects.length - 1 && (
                  <motion.div 
                    className="text-center my-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Ornament type="flourish" className="mx-auto opacity-60" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 p-8 rounded-lg mt-12 border border-amber-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif text-center">The Lessons Learned</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Technical Mastery", desc: "Each project deepened my understanding of modern web technologies and best practices." },
                { title: "Problem Solving", desc: "Complex challenges taught me to approach problems systematically and creatively." },
                { title: "User Experience", desc: "Understanding user needs became paramount in creating meaningful applications." },
                { title: "Collaboration", desc: "Working with teams honed my communication and project management skills." }
              ].map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                >
                  <h4 className="font-semibold text-amber-700 mb-2 font-serif">{lesson.title}</h4>
                  <p className="text-gray-700 font-serif">{lesson.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Ornament type="flourish" className="mx-auto" />
            <p className="text-amber-700 font-serif italic mt-4">
              "Each quest completed, each challenge overcome, forged me into a stronger developer..."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChapterTwo;