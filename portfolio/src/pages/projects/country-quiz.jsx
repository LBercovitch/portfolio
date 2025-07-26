import { useState, useEffect } from 'react';
import HorizontalNav from '../../components/nav/horizontal-nav';
import VerticalNav from '../../components/nav/vertical-nav';
import CountryQuizGame from '../../components/country-quiz-game/country-quiz-game';

function CountryQuiz() {
  // valid states are 0 (intro screen), 1 (game screen), 2 (game ended screen)
  const [gameState, setGameState] = useState(0);

  useEffect(() => {
    if (gameState === 1) {
      // Scroll to top when game starts
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [gameState]);

  return (
    <div className="bg-violet-200 grid place-items-center h-full min-h-screen font-josefin-sans text-2xl">
      <HorizontalNav colorName="violet" />
      <VerticalNav colorName="violet" />
      <div className="flex flex-col h-full min-h-screen w-11/12 md:w-180 lg:w-256 xl:w-300">
        <h1
          className={`${gameState !== 0 ? 'hidden' : 'block'} pt-8 md:pt-20 w-full text-center font-super-carnival text-transparent
            text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-stroke-color-[#333]
            text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#a684ff] sm:text-shadow-[3px_3px_#a684ff] xl:text-shadow-[5px_5px_#a684ff]`}
        >
          198
        </h1>
        <CountryQuizGame gameState={gameState} setGameState={setGameState} />
      </div>
    </div>
  );
}

export default CountryQuiz;
