import HorizontalNav from '../components/nav/horizontal-nav';
import VerticalNav from '../components/nav/vertical-nav';
import ProjectList from '../components/projects/project-list';

function Projects() {
  return (
    <div className="bg-lime-200 grid place-items-center h-full min-h-screen font-josefin-sans text-2xl">
      <HorizontalNav colorName="lime" />
      <VerticalNav colorName="lime" />
      <div className="flex flex-col pt-8 md:pt-20 h-full min-h-screen w-11/12 md:w-180 lg:w-256 xl:w-300">
        <h1
          className="w-full text-center font-super-carnival text-transparent text-6xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#7ccf00] sm:text-shadow-[3px_3px_#7ccf00] xl:text-shadow-[5px_5px_#7ccf00]"
        >
          Projects
        </h1>
        <p className="paragraph mt-6">
          As a developer, I know how important it is to stay up to date with the latest technologies.
          So, I have created this page as a space for me to experiment, design, and build apps, games, and mockups
          while I expand my skills and stay current with modern frameworks and tools.
        </p>
        <p className="paragraph">
          Feel free to explore the projects below and see what I've been working on! 
        </p>
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
