function GameEnd({ handleStartClick, score = 0, totalNumCountries = 198 }) {
  return (
    <div className="flex flex-wrap bg-violet-50 border-4 border-[#333] p-5 rounded-xl shadow-[12px_12px_#a684ff] my-6">
      <div className="basis-full md:basis-3/4 self-center">
        <h2 className="font-josefin-sans-bold mb-5 text-4xl">
          {score === totalNumCountries ? `Congratulations! You named every country!` :
            score >=100 ? `Congratulations, you named ${score}/${totalNumCountries} countries!` :
            `You only named ${score}/${totalNumCountries} countries. Better luck next time!`
          }
        </h2>
        <p className="paragraph">
          Click on the play button to try again.
        </p>
      </div>
      <div className="flex basis-full md:basis-1/4 justify-center">
        <button
          type="button"
          aria-label={`Click to play the ${totalNumCountries} Country Quiz`}
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

export default GameEnd;
