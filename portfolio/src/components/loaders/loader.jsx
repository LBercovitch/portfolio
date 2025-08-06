function Loader({ bgColor, spinnerColor }) {
  return (
    <div className={`${bgColor} flex justify-center items-center w-full h-full relative`}>
      <div
        className={`rounded-full ${spinnerColor} h-48 w-48`}
        role="status"
        aria-label="Loading"
      />
      <div
        className={`absolute rounded-full ${bgColor} h-36 w-36 z-10`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

export default Loader;