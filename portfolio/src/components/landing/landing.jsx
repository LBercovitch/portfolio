import { useState, useEffect } from 'react';
import GifContainer from '../gif-container/gif-container';

function Landing() {
  const [showContent, setShowContent] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const gifDuration = 2300; // Duration of intro gif

  // Trigger the slide-in animation after show content is set.
  useEffect(() => {
    if (showContent) {
      // Force a second render cycle using setTimeout here.
      // This will delay slideIn until after content is mounted.
      // Without it, the annimation never runs
      const timer = setTimeout(() => {
        setSlideIn(true)
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  // Wait until the gif has finished playing, then render the main landing page
  const handlePlay = () => {
    setSlideIn(false);

    setTimeout(() => {
      setShowContent(true);
    }, gifDuration);
  };

  return (
    <>
      <div className="flex justify-center items-center h-dvh bg-lime-200">
        {!slideIn && (
          <GifContainer src={`/BalloonPop.gif?${Date.now()}`} onPlay={handlePlay} />
        )}
      </div>
    
      {showContent && (
        <div className={`
          flex absolute items-center -top-full w-full h-dvh bg-rose-200
          transition-transform duration-1000
          ${slideIn ? 'translate-y-full animate-bounce-finite': ''}
        `}>
          <h1 className="w-full text-center text-9xl font-super-carnival text-[#0000] text-shadow-[5px_5px_#ff7390]" style={{WebkitTextStroke: "4px #333" }}>
            Leah Bercovitch
          </h1>
        </div>
      )}
    </>
  );
}

export default Landing;
