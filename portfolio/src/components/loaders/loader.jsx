function Loader({ bgColor, spinnerArc }) {
  return (
    <div className={`${bgColor} flex justify-center w-full relative`}>
      <div
        className={`rounded-full ${spinnerArc} h-48 w-48`}
        role="status"
        aria-label="Loading"
      />
      <div
        className={`absolute rounded-full ${bgColor} h-36 w-36 z-10 top-6`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

export default Loader;