import Project from './project';
import resumeItems from './resume-items.json';
import { formatDateFromString } from '../../utils/parse-dates.js';

function TimeLine() {
  return (
    <div className="font-josefin-sans text-gray-800 text-xl md:ml-12 md:mb-24 md:pl-20 md:border-l-5 md:border-[#333]">
      {resumeItems.map(({ id, dates, organization, projects }) => (
        <div key={id}>
          <h2 className="w-full mt-8 text-center
            font-super-carnival text-transparent text-3xl sm:text-5xl
            text-stroke-color-[#333] text-stroke-width-[2px]
            text-shadow-[2px_2px_#6acbf8] sm:text-shadow-[3px_3px_#6acbf8]"
          >
            {organization}
          </h2>
          <h3 className="font-josefin-sans-bold text-center text-3xl mb-6">
            {formatDateFromString(dates.start, 'long')} - {formatDateFromString(dates.end, 'long')}
          </h3>
          {projects.map((project) => (
            <div key={project.id} className="relative mb-12 border-2 border-[#333] bg-sky-100 rounded-2xl p-10">
              <span className="hidden md:block absolute left-[-98px] top-20 w-8 h-8 bg-sky-400 border-4 border-[#333] rounded-full shadow-md" />
              <Project project={project} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
