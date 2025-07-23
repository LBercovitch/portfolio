import Project from './project';
import projectIndex from './project-index.json';


function ProjectList() {
  return (
    <div className="flex flex-wrap justify-center gap-10 font-josefin-sans text-gray-800 text-xl mt-8 mb-20">
      {projectIndex.map(({ name, id, description, route, date, image, imageAlt }) => (
        <Project key={id} name={name} id={id} description={description} route={route} date={date} image={image} imageAlt={imageAlt} />
      ))}
    </div>
  );
}

export default ProjectList;
