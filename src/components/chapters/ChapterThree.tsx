import React from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch, 
  TestTube,
  Shield,
  Zap,
  Brain,
  Cloud,
  Settings,
  Terminal
} from 'lucide-react';

const ChapterThree: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["Python", "JavaScript", "Java", "C++", "SQL", "HTML/CSS"],
      description: "Core programming languages for diverse applications",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
      description: "Building intelligent systems and data-driven solutions",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Docker", "Linux"],
      description: "Essential tools for efficient development workflow",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "Node.js", "Flask", "FastAPI", "MongoDB", "PostgreSQL"],
      description: "Building modern web applications and APIs",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Data Science",
      icon: <Database className="w-8 h-8" />,
      skills: ["Data Analysis", "Visualization", "Statistical Modeling", "Streamlit", "Plotly", "Matplotlib"],
      description: "Extracting insights from complex datasets",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Google Cloud", "Heroku", "Vercel", "CI/CD", "API Integration"],
      description: "Deploying and scaling applications in the cloud",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const tools = [
    { name: "Python Development", icon: <Terminal className="w-6 h-6" />, proficiency: 90, color: "from-yellow-400 to-yellow-500" },
    { name: "Git & Version Control", icon: <GitBranch className="w-6 h-6" />, proficiency: 85, color: "from-red-400 to-red-500" },
    { name: "AI Tools & Frameworks", icon: <Brain className="w-6 h-6" />, proficiency: 80, color: "from-purple-400 to-purple-500" },
    { name: "Problem Solving", icon: <Zap className="w-6 h-6" />, proficiency: 95, color: "from-blue-400 to-blue-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <div className="h-full p-12 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Animated magical particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
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
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Chapter III</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Arcane Arts</h2>
        </motion.div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DropCap letter="I" />
            <p className="text-lg mb-6 font-serif">
              n the grand library of technology, I have spent countless hours studying the arcane arts 
              of development. Each skill mastered is like learning a new spell, each tool acquired 
              becomes an instrument in my digital arsenal. Here lies the chronicle of my technical expertise.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 group backdrop-blur-sm"
                variants={skillVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="text-amber-600 mr-3"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-amber-800 font-serif">{category.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 font-serif text-sm">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm font-medium border border-amber-300 hover:bg-amber-200 transition-colors duration-200"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Magical glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 rounded-lg`}
                  whileHover={{ 
                    opacity: 0.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Proficiency */}
          <motion.div 
            className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 p-8 rounded-lg my-12 border border-amber-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-6 font-serif text-center">Tools of the Trade</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center">
                    <motion.div 
                      className="text-amber-600 mr-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tool.icon}
                    </motion.div>
                    <span className="font-semibold text-amber-800 font-serif">{tool.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-amber-200 rounded-full h-3 mr-3 overflow-hidden">
                      <motion.div 
                        className={`bg-gradient-to-r ${tool.color} h-3 rounded-full`}
                        variants={progressVariants}
                        initial="hidden"
                        animate="visible"
                        custom={tool.proficiency}
                      />
                    </div>
                    <motion.span 
                      className="text-amber-700 font-semibold text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + index * 0.1 }}
                    >
                      {tool.proficiency}%
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div 
            className="bg-white/70 p-8 rounded-lg shadow-lg border border-amber-200 my-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">The Developer's Creed</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Clean Code", desc: "Writing code that is readable, maintainable, and elegant—treating each function as a work of art." },
                { title: "Continuous Learning", desc: "Embracing new technologies and methodologies, staying curious and adaptable in an ever-evolving field." },
                { title: "User-Centric Design", desc: "Always keeping the end user in mind, creating solutions that are intuitive and delightful to use." },
                { title: "Collaborative Spirit", desc: "Believing that the best solutions emerge from diverse perspectives and collaborative efforts." }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h4 className="font-semibold text-amber-700 mb-2 font-serif">{principle.title}</h4>
                  <p className="text-gray-700 font-serif text-sm">{principle.desc}</p>
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
              "With these arts mastered, I am ready to weave digital magic..."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChapterThree;