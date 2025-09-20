import React from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { Rocket, Target, Brain, Users, Globe2, Lightbulb } from 'lucide-react';

const ChapterFour: React.FC = () => {
  const goals = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Impactful AI Projects",
      description: "Building AI-powered solutions that solve real-world problems and create meaningful impact in education, healthcare, and sustainability.",
      timeline: "2024-2025",
      status: "In Progress"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Systems Design Mastery",
      description: "Mastering the art of designing scalable, efficient systems that can handle complex requirements and large-scale operations.",
      timeline: "2025-2026",
      status: "Learning"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Source Contributions",
      description: "Contributing to meaningful open-source projects and building tools that benefit the developer community.",
      timeline: "2025-2026",
      status: "Planning"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Exploring cutting-edge technologies and contributing to research in AI, machine learning, and emerging tech fields.",
      timeline: "2025+",
      status: "Envisioning"
    }
  ];

  const values = [
    { title: "Curiosity", description: "Always asking questions and seeking deeper understanding" },
    { title: "Efficiency", description: "Building solutions that are both elegant and effective" },
    { title: "Growth", description: "Embracing challenges as opportunities to learn and evolve" },
    { title: "Impact", description: "Creating meaningful solutions that benefit others" }
  ];

  return (
    <div className="h-full p-12 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Faded text pattern for unfinished pages effect */}
      <div className="absolute inset-0 opacity-5 bg-repeat pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' font-family='serif' font-size='12' fill='%23000'%3ETo be written...%3C/text%3E%3Ctext x='10' y='40' font-family='serif' font-size='12' fill='%23000'%3EThe future awaits...%3C/text%3E%3Ctext x='10' y='60' font-family='serif' font-size='12' fill='%23000'%3EStory continues...%3C/text%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Chapter IV</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Future Chapters</h2>
          <p className="text-amber-600 mt-2 font-serif">(Unfinished Pages)</p>
        </div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div className="mb-8">
            <DropCap letter="T" />
            <p className="text-lg mb-6 font-serif">
              he most exciting chapters of any story are often those yet to be written. As I stand 
              at the threshold of new adventures, I can see the outline of future quests taking shape 
              in the mists of tomorrow. These pages, though unfinished, hold the dreams and aspirations 
              that will guide my journey forward.
            </p>
          </div>

          {/* Goals Section */}
          <div className="my-12">
            <h3 className="text-3xl font-bold text-amber-800 mb-8 font-serif text-center">Quests on the Horizon</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <div 
                  key={index}
                  className="relative bg-white/60 p-6 rounded-lg shadow-lg border-2 border-dashed border-amber-300 hover:border-amber-500 transition-all duration-300 group"
                >
                  {/* Status badge */}
                  <div className="absolute top-2 right-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                    {goal.status}
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="text-amber-600 mr-4 group-hover:scale-110 transition-transform duration-200">
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-amber-800 mb-2 font-serif">{goal.title}</h4>
                      <p className="text-gray-700 font-serif text-sm mb-3">{goal.description}</p>
                      <div className="flex items-center">
                        <Target className="w-4 h-4 text-amber-600 mr-2" />
                        <span className="text-amber-700 font-semibold text-sm">{goal.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-r from-amber-100/60 to-orange-100/60 p-8 rounded-lg my-12 border-2 border-dashed border-amber-300">
            <div className="text-center mb-6">
              <Rocket className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">The Grand Vision</h3>
            </div>
            <p className="text-lg font-serif text-gray-800 text-center mb-6">
              To become a catalyst for technological innovation, creating solutions that not only solve 
              problems but inspire others to dream bigger and reach higher. I envision a future where 
              technology serves humanity's highest aspirations.
            </p>
            
            {/* Core Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4 bg-white/50 rounded-lg">
                  <h4 className="font-bold text-amber-800 font-serif mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-700 font-serif">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Collaboration */}
          <div className="text-center bg-white/70 p-8 rounded-lg shadow-lg border border-amber-200 my-12">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">Join the Story</h3>
            <p className="text-lg font-serif text-gray-800 mb-6">
              The most beautiful stories are written together. If you're looking for someone passionate 
              about creating exceptional digital experiences, let's collaborate on the next chapter.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors duration-200 font-semibold">
                Start a Conversation
              </button>
              <button className="px-6 py-3 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200 font-semibold">
                View My Work
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Ornament type="flourish" className="mx-auto opacity-60" />
            <p className="text-amber-700 font-serif italic mt-4">
              "The story continues... each day a new page, each project a new adventure..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterFour;