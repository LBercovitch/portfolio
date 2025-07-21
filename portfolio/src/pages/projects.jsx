import HorizontalNav from '../components/nav/horizontal-nav';
import VerticalNav from '../components/nav/vertical-nav';

function Projects() {
  return (
    <div className="bg-lime-200 grid place-items-center h-full min-h-screen font-josefin-sans text-2xl">
      <HorizontalNav colorName="lime" />
      <VerticalNav colorName="lime" />
      <div className="flex flex-col pt-20 h-full min-h-screen w-11/12 md:w-180 lg:w-256 xl:w-300">
        <h1
          className="w-full text-center font-super-carnival text-transparent text-6xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#7ccf00] sm:text-shadow-[3px_3px_#7ccf00] xl:text-shadow-[5px_5px_#7ccf00]"
        >
          Projects
        </h1>
        <p className="paragraph text-center">
          Stay tuned, projects are coming soon!
        </p>
      </div>
    </div>
  );
}

export default Projects;
