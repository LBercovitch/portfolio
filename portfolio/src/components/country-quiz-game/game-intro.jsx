function GameIntro({ handleStartClick }) {
  return (
    <div className="flex flex-wrap bg-violet-50 border-4 border-[#333] p-5 rounded-xl shadow-[12px_12px_#a684ff] my-6">
      <div className="basis-full md:basis-3/4 self-center">
        <h2 className="font-josefin-sans-bold mb-5">
          Think you can name every country in the world?
        </h2>
        <p className="paragraph">
          Click play to begin the challenge. Once the timer starts, type as many country
          names as you can into the name field below. Each correct answer will be revealed on the map.
        </p>
        <p>How many can you name?</p>
      </div>
      <div className="flex basis-full md:basis-1/4 justify-center">
        <button
          type="button"
          aria-label={"Click to play the 198 Country Quiz"}
          onClick={handleStartClick}
        >
          <img
            src={`${import.meta.env.BASE_URL}/PlayButton.png`}
            className="h-45 lg:h-60 object-cover rounded-t-lg cursor-pointer pb-5"
            alt="play button"
          />
        </button>
      </div>
    </div>
  );
}

export default GameIntro;
