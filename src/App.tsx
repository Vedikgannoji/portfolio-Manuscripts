import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import BookCover from './components/BookCover';
import Prologue from './components/chapters/Prologue';
import ChapterOne from './components/chapters/ChapterOne';
import ChapterTwo from './components/chapters/ChapterTwo';
import ChapterThree from './components/chapters/ChapterThree';
import ChapterFour from './components/chapters/ChapterFour';
import Experience from './components/chapters/Experience';
import Epilogue from './components/chapters/Epilogue';
import Footer from './components/Footer';
import { ChevronLeft, ChevronRight, Home, Menu, X } from 'lucide-react';

function App() {
  const book = useRef<any>(null);
  const [showCover, setShowCover] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const chapters = [
    { title: 'Prologue: About Me', component: Prologue },
    { title: 'Chapter I: The Awakening', component: ChapterOne },
    { title: 'Chapter II: The Quests', component: ChapterTwo },
    { title: 'Chapter III: The Arcane Arts', component: ChapterThree },
    { title: 'Chapter IV: The Future Chapters', component: ChapterFour },
    { title: 'Chapter V: The Chronicles of Experience', component: Experience },
    { title: 'Epilogue: The Letter', component: Epilogue }
  ];

  const handleCoverClick = () => {
    setShowCover(false);
  };

  const nextPage = () => {
    if (book.current) {
      book.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (book.current) {
      book.current.pageFlip().flipPrev();
    }
  };

  const goToPage = (pageIndex: number) => {
    if (book.current) {
      book.current.pageFlip().flip(pageIndex);
    }
    setShowNavigation(false);
  };

  const backToCover = () => {
    setShowCover(true);
    setCurrentPage(0);
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  if (showCover) {
    return <BookCover onOpen={handleCoverClick} />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Add fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        body {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Navigation Controls */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={backToCover}
          className="p-3 bg-amber-700 text-white rounded-full shadow-lg hover:bg-amber-800 transition-colors duration-200"
          title="Back to Cover"
        >
          <Home className="w-5 h-5" />
        </button>
        <button
          onClick={() => setShowNavigation(!showNavigation)}
          className="p-3 bg-amber-700 text-white rounded-full shadow-lg hover:bg-amber-800 transition-colors duration-200"
          title="Table of Contents"
        >
          {showNavigation ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Table of Contents */}
      {showNavigation && (
        <div className="fixed top-20 left-4 z-40 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-sm border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4 font-serif">Table of Contents</h3>
          <div className="space-y-2">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-full text-left p-2 rounded hover:bg-amber-100 transition-colors duration-200 font-serif ${
                  currentPage === index ? 'bg-amber-200 text-amber-800 font-semibold' : 'text-gray-700'
                }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Page Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            currentPage === 0
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-amber-700 text-white hover:bg-amber-800'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-amber-200">
          <span className="text-amber-800 font-semibold font-serif">
            {currentPage + 1} / {chapters.length}
          </span>
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === chapters.length - 1}
          className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
            currentPage === chapters.length - 1
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-amber-700 text-white hover:bg-amber-800'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Book Container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative max-w-6xl w-full">
          <HTMLFlipBook
            ref={book}
            width={600}
            height={800}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1200}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            onFlip={onFlip}
            className="shadow-2xl"
          >
            {chapters.map((Chapter, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <Chapter.component />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      {/* Page turn hint for mobile */}
      <div className="fixed bottom-20 right-4 z-40 lg:hidden">
        <div className="bg-amber-700 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-serif">
          Swipe or tap edges to turn pages
        </div>
      </div>
    </div>
  );
}

export default App;