import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-100 to-orange-100 border-t-2 border-amber-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name and tagline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-amber-900 font-serif">Abhinav Sai Gunnampalli</h3>
            <p className="text-amber-700 font-serif italic">Curious Learner | Builder | Explorer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Abhiix0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors duration-200 font-serif"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/abhinav-sai-g-942bb5333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors duration-200 font-serif"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:24r21a6778@mlrit.ac.in"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors duration-200 font-serif"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-amber-300">
          <p className="text-amber-600 font-serif text-sm">
            © 2024 Abhinav Sai Gunnampalli. Crafted with passion and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;