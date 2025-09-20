import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface BookCoverProps {
  onOpen: () => void;
}

const BookCover: React.FC<BookCoverProps> = ({ onOpen }) => {
  // Floating particles animation
  const particles = Array.from({ length: 25 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-60"
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [0.5, 1, 0.5],
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
  ));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-amber-900/20"></div>
      
      {/* Parchment texture overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Floating particles */}
      {particles}

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top ornamental flourish */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <svg width="200" height="40" viewBox="0 0 200 40" className="text-amber-600 mx-auto">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
              <path d="M20 20 Q50 5, 80 20 Q110 35, 140 20 Q170 5, 180 20" stroke="url(#goldGradient)" fill="none" strokeWidth="2"/>
              <path d="M10 20 Q40 30, 70 20 Q100 10, 130 20 Q160 30, 190 20" stroke="url(#goldGradient)" fill="none" strokeWidth="1" opacity="0.7"/>
              <circle cx="100" cy="20" r="4" fill="url(#goldGradient)"/>
              <circle cx="50" cy="20" r="2" fill="url(#goldGradient)" opacity="0.8"/>
              <circle cx="150" cy="20" r="2" fill="url(#goldGradient)" opacity="0.8"/>
            </svg>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-amber-900 mb-6 font-serif leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Abhinav Sai Gunnampalli
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl md:text-3xl text-amber-700 mb-8 font-serif italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Curious Learner | Builder | Explorer
          </motion.p>

          {/* Quick Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a 
              href="#resume" 
              className="text-amber-700 hover:text-amber-900 font-serif text-lg border-b-2 border-transparent hover:border-amber-700 transition-all duration-300"
            >
              Resume
            </a>
            <a 
              href="#projects" 
              className="text-amber-700 hover:text-amber-900 font-serif text-lg border-b-2 border-transparent hover:border-amber-700 transition-all duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-amber-700 hover:text-amber-900 font-serif text-lg border-b-2 border-transparent hover:border-amber-700 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Bottom ornamental flourish */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-12"
          >
            <svg width="300" height="30" viewBox="0 0 300 30" className="text-amber-600 mx-auto">
              <defs>
                <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
              <path d="M30 15 Q75 5, 120 15 Q165 25, 210 15 Q255 5, 270 15" stroke="url(#goldGradient2)" fill="none" strokeWidth="2"/>
              <path d="M20 15 Q65 22, 110 15 Q155 8, 200 15 Q245 22, 280 15" stroke="url(#goldGradient2)" fill="none" strokeWidth="1" opacity="0.6"/>
              <circle cx="150" cy="15" r="3" fill="url(#goldGradient2)"/>
              <circle cx="90" cy="15" r="1.5" fill="url(#goldGradient2)" opacity="0.8"/>
              <circle cx="210" cy="15" r="1.5" fill="url(#goldGradient2)" opacity="0.8"/>
            </svg>
          </motion.div>

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
            onClick={onOpen}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-serif text-lg font-semibold border-2 border-amber-600 hover:border-amber-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin the Chronicle</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-amber-600"
            >
              <span className="text-sm font-serif mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated floating book in bottom-left corner */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 2.1 }}
        className="absolute bottom-8 left-8 z-20"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotateY: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative"
        >
          {/* Book base */}
          <div className="relative w-24 h-16 bg-gradient-to-b from-amber-200 to-amber-300 rounded-r-md shadow-lg border-l-4 border-amber-600 transform perspective-1000 rotate-y-12">
            {/* Book pages */}
            <div className="absolute inset-1 bg-gradient-to-b from-amber-50 to-amber-100 rounded-r-sm">
              {/* Animated page flip effect */}
              <motion.div
                animate={{ 
                  rotateY: [0, 180, 0],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-r-sm origin-left"
                style={{ transformStyle: 'preserve-3d' }}
              />
              
              {/* Page lines */}
              <div className="absolute inset-2 space-y-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-0.5 bg-amber-400 opacity-30 rounded"></div>
                ))}
              </div>
            </div>
            
            {/* Magical glow around book */}
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 opacity-30 blur-lg rounded-lg animate-pulse"></div>
            <div className="absolute -inset-1 bg-amber-400 opacity-15 blur-sm rounded-lg"></div>
          </div>
          
          {/* Enhanced floating particles around book */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'w-1.5 h-1.5 bg-yellow-300' : 
                i % 3 === 1 ? 'w-1 h-1 bg-amber-400' : 
                'w-0.5 h-0.5 bg-amber-300'
              }`}
              animate={{
                x: [0, Math.random() * 60 - 30, 0],
                y: [0, Math.random() * 60 - 30, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [0.3, 1.2, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookCover;