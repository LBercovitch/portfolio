function CountryQuizLoader() {
  return (
    <>
      <div className="flex flex-wrap-reverse gap-y-5 mt-5">
        <div className="flex flex-grow flex-wrap gap-y-4">
          <div className="rounded-lg h-15 w-60 px-2 mr-3 bg-violet-300 animate-pulse" />
          <div className="rounded-lg h-15 w-26 px-2 mr-3 bg-violet-300 animate-pulse" />
          <div className="rounded-lg h-15 w-28 px-2 bg-violet-400 animate-pulse" />
        </div>
        <div className="flex flex-wrap gap-y-4">
          <div className="rounded-lg h-15 w-26 px-2 mr-3 bg-violet-300 animate-pulse" />
          <div className="rounded-lg w-14 h-15 mr-3 bg-violet-300 animate-pulse" />
          <div className="rounded-lg h-15 w-48 px-2 bg-violet-400 animate-pulse" />
        </div>
      </div>
      <div className="rounded-lg w-full aspect-video mt-5 bg-violet-400 animate-pulse" />
    </>
  );
}

export default CountryQuizLoader;