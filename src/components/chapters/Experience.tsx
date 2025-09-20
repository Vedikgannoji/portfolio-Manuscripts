import React, { useState } from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Award, 
  Users, 
  Calendar, 
  ChevronDown, 
  ChevronRight,
  Star,
  Trophy,
  Target,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['internships']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const experiences = [
    {
      title: "AI Research Intern",
      company: "Tech Innovation Lab",
      location: "Remote",
      period: "Summer 2024",
      duration: "3 months",
      description: "Developed machine learning models for natural language processing applications, contributing to research on educational AI systems.",
      achievements: [
        "Improved model accuracy by 15% through feature engineering",
        "Collaborated with cross-functional teams on 3 research projects",
        "Presented findings at internal research symposium",
        "Published research paper on AI in education"
      ],
      technologies: ["Python", "TensorFlow", "NLP", "Research"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Software Development Intern",
      company: "StartupXYZ",
      location: "Hybrid",
      period: "Winter 2023",
      duration: "4 months",
      description: "Built full-stack web applications using modern technologies, focusing on user experience and performance optimization.",
      achievements: [
        "Developed responsive web applications serving 1000+ users",
        "Implemented automated testing reducing bugs by 40%",
        "Mentored 2 junior interns in best practices",
        "Led migration to modern React architecture"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Data Science Intern",
      company: "Analytics Corp",
      location: "On-site",
      period: "Summer 2023",
      duration: "3 months",
      description: "Analyzed large datasets to extract business insights and built predictive models for customer behavior analysis.",
      achievements: [
        "Built predictive models with 85% accuracy",
        "Created interactive dashboards for stakeholders",
        "Processed and analyzed 10M+ data points",
        "Reduced data processing time by 60%"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      status: "Completed",
      link: "#"
    }
  ];

  const collaborations = [
    {
      title: "Open Source Contributor",
      project: "Educational AI Tools",
      role: "Core Contributor",
      description: "Contributing to open-source projects focused on making AI more accessible for educational purposes.",
      impact: "Used by 500+ educators worldwide",
      technologies: ["Python", "Machine Learning", "Open Source"],
      link: "https://github.com/Abhiix0"
    },
    {
      title: "Hackathon Team Lead",
      project: "Smart Campus Solutions",
      role: "Team Leader",
      description: "Led a team of 4 developers to create innovative campus management solutions during 48-hour hackathons.",
      impact: "Won 2nd place in National Hackathon 2024",
      technologies: ["React", "Firebase", "Mobile Development"],
      link: "#"
    },
    {
      title: "Research Collaborator",
      project: "AI Ethics Study",
      role: "Research Assistant",
      description: "Collaborated with university researchers on studying ethical implications of AI in decision-making systems.",
      impact: "Co-authored paper with 100+ citations",
      technologies: ["Research", "Ethics", "AI"],
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition",
      description: "Achieved academic excellence with consistent high performance across multiple semesters",
      year: "2023-2024",
      category: "Academic",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Best Innovation Award",
      description: "Recognized for developing creative solutions to real-world problems in annual tech competition",
      year: "2024",
      category: "Innovation",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: "Technical Leadership Certificate",
      description: "Completed advanced program in technical leadership and project management",
      year: "2024",
      category: "Leadership",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Open Source Contributor Badge",
      description: "Recognized for significant contributions to open-source projects and community involvement",
      year: "2024",
      category: "Community",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="h-full p-12 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Floating achievement badges */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-300 rounded-full opacity-40"
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Chapter V</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Chronicles of Experience</h2>
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
              very journey is marked by pivotal moments of growth, collaboration, and achievement. 
              These experiences have shaped my understanding of technology's potential and my role 
              in harnessing it for meaningful impact. Here are the chronicles of my professional adventures.
            </p>
          </motion.div>

          {/* Professional Experience */}
          <div className="mb-12">
            <motion.button
              onClick={() => toggleSection('internships')}
              className="flex items-center gap-3 text-2xl font-bold text-amber-800 mb-6 font-serif hover:text-amber-900 transition-colors duration-200 w-full text-left"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Briefcase className="w-8 h-8" />
              Professional Experience
              <motion.div
                animate={{ rotate: expandedSections.includes('internships') ? 0 : -90 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {expandedSections.includes('internships') && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-8 overflow-hidden"
                >
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200 backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-amber-800 font-serif">{exp.title}</h3>
                          <div className="flex items-center gap-4 text-amber-700 font-semibold mt-1">
                            <span>{exp.company}</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-amber-600 mt-2 md:mt-0">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-serif">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-serif text-sm">{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 font-serif">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-semibold border border-amber-300"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              delay: 0.1 + techIndex * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-amber-800 font-serif">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li 
                              key={achIndex} 
                              className="flex items-start gap-2 text-gray-700 font-serif"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + achIndex * 0.1 }}
                            >
                              <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {exp.link && (
                        <motion.a
                          href={exp.link}
                          className="inline-flex items-center gap-2 mt-4 text-amber-700 hover:text-amber-900 font-semibold transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </motion.a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Collaborations */}
          <div className="mb-12">
            <motion.button
              onClick={() => toggleSection('collaborations')}
              className="flex items-center gap-3 text-2xl font-bold text-amber-800 mb-6 font-serif hover:text-amber-900 transition-colors duration-200 w-full text-left"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Users className="w-8 h-8" />
              Collaborations & Projects
              <motion.div
                animate={{ rotate: expandedSections.includes('collaborations') ? 0 : -90 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {expandedSections.includes('collaborations') && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
                >
                  {collaborations.map((collab, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200 backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <h3 className="text-lg font-bold text-amber-800 mb-2 font-serif">{collab.title}</h3>
                      <p className="text-amber-700 font-semibold mb-1">{collab.project}</p>
                      <p className="text-amber-600 text-sm mb-3 font-serif italic">{collab.role}</p>
                      <p className="text-gray-700 mb-4 font-serif text-sm">{collab.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {collab.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium border border-amber-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-amber-600 mb-3">
                        <Target className="w-4 h-4" />
                        <span className="font-serif text-sm font-semibold">{collab.impact}</span>
                      </div>

                      {collab.link && (
                        <motion.a
                          href={collab.link}
                          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <motion.button
              onClick={() => toggleSection('achievements')}
              className="flex items-center gap-3 text-2xl font-bold text-amber-800 mb-6 font-serif hover:text-amber-900 transition-colors duration-200 w-full text-left"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Trophy className="w-8 h-8" />
              Notable Achievements
              <motion.div
                animate={{ rotate: expandedSections.includes('achievements') ? 0 : -90 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {expandedSections.includes('achievements') && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden"
                >
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 p-6 rounded-lg border border-amber-200 text-center backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="text-amber-600 mx-auto mb-4"
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-amber-800 mb-2 font-serif">{achievement.title}</h3>
                      <p className="text-gray-700 font-serif text-sm mb-3">{achievement.description}</p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-amber-600 font-semibold text-sm">{achievement.year}</span>
                        <span className="text-amber-500 text-xs px-2 py-1 bg-amber-100 rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Ornament type="flourish" className="mx-auto" />
            <p className="text-amber-700 font-serif italic mt-4">
              "Each experience a lesson, each collaboration a new perspective, each achievement a stepping stone..."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;