import { useState, useEffect } from 'react';
import Timer from '../timer/timer';

function GameControls({ timerActive, handleGiveUpClick, handlePlayPauseClick, resetTimer, setTimerActive, correctCountries, setGuess, guessMessage }) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleGuess = (event) => {
    setGuess(currentGuess.trim());
    setCurrentGuess("");
  };

  return (
    <div className="flex flex-wrap-reverse gap-y-5">
      <div className="flex flex-grow flex-wrap gap-y-4">
        <input
          type="text"
          className="text-lg sm:text-2xl border-3 border-[#333] rounded-lg h-15 px-2 mr-3 bg-[#fff]
            shadow-[4px_4px_#a684ff] disabled:shadow-[4px_4px_#bbb] disabled:bg-gray-200 disabled:cursor-not-allowed"
          placeholder="Enter a country"
          value={currentGuess}
          disabled={!timerActive}
          onChange={(e) => setCurrentGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleGuess();
            }
          }}
        />
        <button
          onClick={handleGuess}
          disabled={!timerActive}
          className="text-center border-3 border-[#333] rounded-lg h-15 min-w-26 px-2 mr-3 bg-violet-100
            hover:bg-violet-300 shadow-[4px_4px_#a684ff] cursor-pointer disabled:shadow-[4px_4px_#bbb]
            disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          Submit
        </button>
        <span className="font-josefin-sans-bold text-5xl self-center">{correctCountries.length}/198</span>
      </div>
      <div className="flex flex-wrap gap-y-4">
        <button
          type="button"
          aria-label="Give Up"
          className="text-center border-3 border-[#333] rounded-lg h-15 min-w-26 px-2 mr-3 bg-violet-100
            hover:bg-violet-300 shadow-[4px_4px_#a684ff] cursor-pointer"
          onClick={handleGiveUpClick}
        >
          Give Up
        </button>
        <button
          type="button"
          aria-label={`${timerActive ? 'Pause Game' : 'Play Game'}`}
          className="text-center border-3 border-[#333] rounded-lg min-w-14 h-15 mr-3 bg-violet-100
            hover:bg-violet-300 shadow-[4px_4px_#a684ff] cursor-pointer"
          onClick={handlePlayPauseClick}
        >
          {timerActive ? '⏸' : '▶'}
        </button>
        <Timer
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          resetTimer={resetTimer}
        />
      </div>
      <div className="basis-full font-josefin-sans-semibold">
        {guessMessage}
      </div>
    </div>
  );
}

export default GameControls;
