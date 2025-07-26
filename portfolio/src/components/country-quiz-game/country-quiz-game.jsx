import { useState, useEffect } from 'react';
import GameControls from './game-controls';
import GameIntro from './game-intro';
import GameMap from './game-map';
import GameEnd from './game-end';

function CountryQuizGame({ gameState, setGameState }) {
  const [timerActive, setTimerActive] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [mapFeatures, setMapFeatures] = useState([]);
  const [correctCountries, setCorrectCountries] = useState([]);
  const [guess, setGuess] = useState('');
  const [guessMessage, setGuessMessage] = useState('');
  const totalNumCountries = 198;

  // If the user gruesses all of the countries, end the game
  useEffect(() => {
    if (correctCountries === totalNumCountries) setGameState(2);
  }, [correctCountries]);

  const handleStartClick = () => {
    setGameState(1);
    handleStart();
  };

  const handleGiveUpClick = () => {
    setGameState(2);
  };

  const handleStart = () => {
    setResetTimer(true);
    setTimerActive(true);

    // Reset map features
    setMapFeatures([]);
    setCorrectCountries([]);
    setGuess('');
    setGuessMessage('');
  
    // We only want to reset the timer once, so we should revert resetTimer back to false
    // This is wrapped in a setTimeout to ensure that it happens on the next render cycle
    setTimeout(() => setResetTimer(false), 0);
  };

  const handlePlayPauseClick = () => {
    setTimerActive(prev => !prev);
  };

  return (
    <div className="text-[#333] pt-5">
      <div className={`${gameState === 0 ? 'block' : 'hidden'}`}>
        <GameIntro handleStartClick={handleStartClick} />
      </div>
      <div className={`${gameState === 1 ? 'block' : 'hidden'} justify-center bg-violet-50 border-4 border-[#333] p-5 rounded-xl shadow-[12px_12px_#a684ff] mb-6`}>
        <GameControls
          timerActive={timerActive}
          handleGiveUpClick={handleGiveUpClick}
          handlePlayPauseClick={handlePlayPauseClick}
          resetTimer={resetTimer}
          setTimerActive={setTimerActive}
          setGuess={setGuess}
          correctCountries={correctCountries}
          guessMessage={guessMessage}
        />
        <GameMap
          guess={guess}
          setGuess={setGuess}
          mapFeatures={mapFeatures}
          setMapFeatures={setMapFeatures}
          correctCountries={correctCountries}
          setCorrectCountries={setCorrectCountries}
          setGuessMessage={setGuessMessage}
        />
      </div>
      <div className={`${gameState === 2 ? 'block' : 'hidden'}`}>
        <GameEnd
          handleStartClick={handleStartClick}
          score={correctCountries.length}
          totalNumCountries={totalNumCountries}
        />
      </div>
    </div>
  );
}

export default CountryQuizGame;
