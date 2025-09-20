import React from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';

const Prologue: React.FC = () => {
  return (
    <div className="h-full p-12 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Corner ornaments */}
      <Ornament type="corner" className="absolute top-4 left-4" />
      <Ornament type="corner" className="absolute top-4 right-4 transform rotate-90" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Chapter Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Prologue</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">About the Author</h2>
        </div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div className="mb-8">
            <DropCap letter="A" />
            <p className="text-lg mb-6 font-serif">
              bhinav Sai Gunnampalli is a curious learner and builder at heart, always seeking ways 
              to blend creativity with technology. He thrives on challenges, values efficiency, and 
              is passionate about projects that create meaningful impact. With a mindset inspired by 
              strategy, exploration, and growth, he treats every project as a step toward mastering 
              the craft of innovation.
            </p>
          </div>

          <p className="text-lg mb-6 font-serif">
            In the quiet hours of exploration, when curiosity meets opportunity, I find myself drawn 
            to the intersection of technology and human potential. This tome chronicles my journey 
            through the ever-evolving landscape of innovation, where each challenge becomes a stepping 
            stone toward greater understanding.
          </p>

          <p className="text-lg mb-6 font-serif">
            Born from an insatiable curiosity and nurtured through hands-on exploration, my passion 
            for building meaningful solutions has grown into something far greater than I once imagined. 
            Each project tells a story, each challenge carries lessons, and every breakthrough opens 
            new doors to possibility.
          </p>

          <div className="bg-amber-100/50 p-6 rounded-lg border-l-4 border-amber-600 my-8">
            <p className="text-lg font-serif italic text-amber-900">
              "The most impactful innovations emerge not from perfection, but from the courage to 
              explore, the persistence to learn, and the vision to see possibilities where others see problems."
            </p>
          </div>

          <p className="text-lg mb-6 font-serif">
            This portfolio stands as testament to my evolution as a learner, builder, and explorer. 
            Within these pages, you'll discover the chapters of my journey—each one building upon 
            the last, each one pointing toward new horizons of growth and impact.
          </p>

          <div className="text-center mt-12">
            <Ornament type="flourish" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prologue;