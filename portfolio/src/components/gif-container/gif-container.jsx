import { useState } from 'react';

function GifContainer({ src, onPlay }) {
  const [playGif, setPlayGif] = useState(false);

  const handlePlay = () => {
    setPlayGif(true);
    onPlay();
  };

  // Wait until the play button is clicked before initializing the gif
  return (
    <>
      {!playGif ? (
        <button
          onClick={handlePlay}
        >
          <img
            src={`${import.meta.env.BASE_URL}/PlayButton.png`}
            alt="Play Button"
            className="cursor-pointer"
          />
        </button>
      ) : (
        <img
          className="max-h-5/6"
          src={src}
          alt="Intro animation"
        />
      )}
    </>
  );
}

export default GifContainer;