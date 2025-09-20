import React from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { Code2, Lightbulb, BookOpen } from 'lucide-react';

const ChapterOne: React.FC = () => {
  return (
    <div className="h-full p-12 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Chapter Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Chapter I</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Awakening</h2>
        </div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div className="mb-8">
            <DropCap letter="T" />
            <p className="text-lg mb-6 font-serif">
              he first spark of curiosity ignited during a seemingly ordinary afternoon. I was browsing 
              the internet when I stumbled upon a simple webpage that changed everything—its elegant 
              design and smooth interactions left me wondering: "How is this magic created?"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="text-center p-6 bg-white/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Code2 className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2 font-serif">First Lines</h3>
              <p className="text-gray-700 font-serif">My journey began with HTML and CSS, learning to paint with code.</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Lightbulb className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2 font-serif">The Revelation</h3>
              <p className="text-gray-700 font-serif">JavaScript opened new worlds of interactivity and dynamic experiences.</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <BookOpen className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2 font-serif">Deep Dive</h3>
              <p className="text-gray-700 font-serif">Frameworks and libraries became my new literature to master.</p>
            </div>
          </div>

          <p className="text-lg mb-6 font-serif">
            Like Prometheus stealing fire from the gods, I had discovered the power to create digital worlds. 
            Each tutorial was a new chapter in my education, each error a lesson in humility, and each 
            successful deployment a victory worth celebrating.
          </p>

          <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 p-8 rounded-lg my-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">The Turning Point</h3>
            <p className="text-lg font-serif text-gray-800">
              The moment I realized I could build applications that solve real problems, that could touch 
              lives and make a difference—that was when coding transformed from hobby to calling.
            </p>
          </div>

          <p className="text-lg mb-6 font-serif">
            What started as curiosity had blossomed into passion. The late nights debugging code, the 
            euphoria of solving complex problems, the satisfaction of seeing an idea come to life on 
            the screen—these became the rhythm of my new existence.
          </p>

          <div className="text-center mt-12">
            <Ornament type="flourish" className="mx-auto" />
            <p className="text-amber-700 font-serif italic mt-4">
              "And so began the journey that would shape my destiny..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterOne;