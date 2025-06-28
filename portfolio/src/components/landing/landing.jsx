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

  // Wait until the gif has finished playing before rendering the main landing page
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
          <GifContainer src={`${import.meta.env.BASE_URL}/BalloonPop.gif?${Date.now()}`} onPlay={handlePlay} />
        )}
      </div>
    
      {showContent && (
        <div className={`
          flex absolute items-center -top-full w-full h-dvh bg-rose-200
          transition-transform duration-1000
          ${slideIn ? 'translate-y-full animate-bounce-finite': ''}
        `}>
          <h1 className="
            w-full text-center font-super-carnival text-transparent text-5xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#ff7390] sm:text-shadow-[3px_3px_#ff7390] xl:text-shadow-[5px_5px_#ff7390]
          ">
            Leah Bercovitch
          </h1>
        </div>
      )}
    </>
  );
}

export default Landing;
