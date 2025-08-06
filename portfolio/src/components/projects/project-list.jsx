import Project from './project';
import projectIndex from './project-index.json';


function ProjectList() {
  return (
    <div className="flex flex-wrap justify-center gap-10 font-josefin-sans text-gray-800 text-xl mt-8 mb-20">
      {projectIndex.map(({ name, id, description, route, date, image, imageAlt, external }) => (
        <Project key={id} name={name} id={id} description={description} route={route} date={date} image={image} imageAlt={imageAlt} external={external} />
      ))}
      {/* Placeholder divs to ensure partial rows are not oddly centered */}
      <div className="relative w-80 sm:w-90 block" aria-hidden="true" />
      <div className="relative w-80 sm:w-90 block" aria-hidden="true" />
    </div>
  );
}

export default ProjectList;
