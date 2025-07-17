import Project from './project';
import resumeItems from './resume-items.json';
import { formatDateFromString } from '../../utils/parse-dates.js';

function TimeLine() {
  return (
    <div className="font-josefin-sans text-gray-800 text-xl md:mb-24 md:pl-20 md:border-l-5 md:border-[#333]">
      {resumeItems.map(({ id, dates, organization, projects }) => (
        <div key={id}>
          <h2 className="w-full text-center font-josefin-sans-bold text-3xl md:text-5xl">
            {organization}
          </h2>
          <h3 className="font-josefin-sans-bold text-center text-3xl mb-6">
            {formatDateFromString(dates.start, 'long')} - {formatDateFromString(dates.end, 'long')}
          </h3>
          {projects.map((project) => (
            <div key={project.id} className="relative mb-16 border-2 border-[#333] bg-sky-100 rounded-2xl p-10">
              <span className="hidden md:block absolute left-[-98px] top-20 w-8 h-8 bg-[#6acbf8] border-4 border-[#333] rounded-full shadow-md" />
              <span className="hidden md:block absolute left-[-70px] top-24 h-0.5 w-[68px] border-2 border-dashed border-t-[#333]" />
              <Project project={project} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
