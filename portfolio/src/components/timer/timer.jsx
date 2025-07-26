import { useState, useEffect } from 'react';

function Timer({ timerActive, resetTimer }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (resetTimer) {
      setTime(0);
    }
  }, [resetTimer]);

  useEffect(() => {
    let interval;

    // Set the time every second
    if (timerActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval)
    }
  }, [timerActive]);

  function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');

    return (
      <>
        <span className="inline-block w-[2ch] text-center">{hrs}</span><span className="inline-block">:</span>
        <span className="inline-block w-[2ch] text-center">{mins}</span><span className="inline-block">:</span>
        <span className="inline-block w-[2ch] text-center">{secs}</span>
      </>
    );
  }

  return (
    <div className="font-josefin-sans-bold self-center text-5xl text-[#333]">
      {formatTime(time)}
    </div>
  );
}

export default Timer;
