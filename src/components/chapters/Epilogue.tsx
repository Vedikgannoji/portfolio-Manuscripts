import React, { useState } from 'react';
import DropCap from '../DropCap';
import Ornament from '../Ornament';
import { Mail, Send, User, MessageCircle, MapPin, Calendar, Search as Seal } from 'lucide-react';

const Epilogue: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "24r21a6778@mlrit.ac.in" },
    { icon: <MapPin className="w-5 h-5" />, label: "GitHub", value: "github.com/Abhiix0" },
    { icon: <Calendar className="w-5 h-5" />, label: "Availability", value: "Available for hire" }
  ];

  return (
    <div className="h-full p-12 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Chapter Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Epilogue</h1>
          <Ornament type="divider" className="mx-auto" />
          <h2 className="text-3xl text-amber-800 mt-4 font-serif italic">The Letter</h2>
        </div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div className="mb-8">
            <DropCap letter="A" />
            <p className="text-lg mb-6 font-serif">
              s our tale draws to a close, I extend an invitation to you, dear reader. Like the 
              final pages of a beloved novel that leaves you yearning for more, this is not truly 
              an ending, but rather the beginning of a new chapter—one we might write together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-800 font-serif mb-6">Reach Across the Pages</h3>
              
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center p-4 bg-white/70 rounded-lg shadow-md border border-amber-200">
                  <div className="text-amber-600 mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 font-serif">{method.label}</p>
                    <p className="text-gray-700 font-serif">{method.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 p-6 rounded-lg border border-amber-200 mt-8">
                <h4 className="font-bold text-amber-800 font-serif mb-3">Let's Create Something Magical</h4>
                <p className="text-gray-700 font-serif text-sm leading-relaxed">
                  Whether you're looking to build a new application, need consultation on a technical 
                  challenge, or simply want to discuss the future of web development, I'm here to help 
                  turn your vision into reality.
                </p>
              </div>
            </div>

            {/* Envelope Form */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-amber-800 font-serif mb-6">Send a Letter</h3>
              
              {/* Envelope Animation */}
              <div className="relative mb-6">
                <div 
                  className={`transform transition-all duration-500 cursor-pointer ${
                    isEnvelopeOpen ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
                >
                  {/* Envelope */}
                  <div className="relative w-full h-48 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg border-2 border-amber-300">
                    {/* Envelope flap */}
                    <div 
                      className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-200 to-amber-300 transform-origin-top transition-all duration-500 ${
                        isEnvelopeOpen ? 'rotate-x-180' : ''
                      }`}
                      style={{
                        clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Wax seal */}
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                        <Seal className="w-8 h-8 text-amber-800" />
                      </div>
                    </div>
                    
                    {/* Click instruction */}
                    {!isEnvelopeOpen && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-amber-700 text-sm font-serif animate-pulse">
                        Click to open the envelope
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Form - appears when envelope is opened */}
              <div className={`transition-all duration-500 ${
                isEnvelopeOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-amber-800 mb-2 font-serif">
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white/80 font-serif"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-amber-800 mb-2 font-serif">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white/80 font-serif"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-amber-800 mb-2 font-serif">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white/80 font-serif"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-amber-800 mb-2 font-serif">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none bg-white/80 font-serif resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors duration-200 font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Send Letter
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Closing thoughts */}
          <div className="text-center bg-white/70 p-8 rounded-lg shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">Until Our Paths Cross Again</h3>
            <p className="text-lg font-serif text-gray-800 leading-relaxed">
              Thank you for taking this journey through my digital chronicles. Like any good story, 
              the real magic happens when characters from different tales meet and create something 
              entirely new together. I look forward to hearing from you and discovering what adventures 
              await us.
            </p>
          </div>

          <div className="text-center mt-12">
            <Ornament type="flourish" className="mx-auto" />
            <p className="text-amber-700 font-serif italic mt-4 text-lg">
              "Thus concludes this chapter, but the story never truly ends..."
            </p>
            <p className="text-amber-600 font-serif text-sm mt-2">
              — The End of the Beginning —
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epilogue;