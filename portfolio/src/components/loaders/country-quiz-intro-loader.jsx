function CountryQuizIntroLoader() {
  return (
    <>
      <div className="flex flex-col gap-y-2 my-8 basis-full md:basis-3/4 self-center">
        <div className="h-8 w-5/6 mb-5 rounded-lg bg-violet-400 animate-pulse" />
        <div className="h-8 w-full rounded-lg bg-violet-300 animate-pulse" />
        <div className="h-8 w-11/12 rounded-lg bg-violet-400 animate-pulse" />
        <div className="h-8 w-full rounded-lg bg-violet-300 animate-pulse" />
        <div className="h-8 w-2/5 mt-3 rounded-lg bg-violet-300 animate-pulse" />
      </div>
      <div className="flex basis-full md:basis-1/4 justify-center items-center">
        <div className="h-30 lg:h-40 w-30 lg:w-40 rounded-full bg-violet-300 animate-pulse" />
      </div>
    </>
  );
}

export default CountryQuizIntroLoader;