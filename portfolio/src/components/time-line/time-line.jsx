import Experience from './experience.jsx';
import resumeItems from './resume-items.json';
import { formatDateFromString } from '../../utils/parse-dates.js';

function TimeLine() {
  return (
    <div className="font-josefin-sans text-gray-800 text-xl">
      {resumeItems.map(({ id, dates, organization, experiences }) => (
        <div key={id}>
          <h2 className="w-full text-center font-josefin-sans-bold text-3xl md:text-5xl">
            {organization}
          </h2>
          <h3 className="font-josefin-sans-bold text-center text-3xl mb-6">
            {formatDateFromString(dates.start, 'long')} - {formatDateFromString(dates.end, 'long')}
          </h3>
          {experiences.map((experience) => (
            <div key={experience.id} className="relative mb-16 border-2 border-[#333] bg-sky-100 rounded-2xl p-10">
              <Experience experience={experience} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
