import { formatDateFromString } from '../../utils/parse-dates.js';

function Experience({ experience }) {
  const {
    id,
    projDates = {},
    position,
    experienceName,
    description,
    bulletPoints = [],
    tech = [],
    link
  } = experience;

  return (
    <div>
      <h4 className="font-josefin-sans-semibold text-2xl md:text-3xl">
        {position} - {experienceName}
      </h4>
      <h5 className="font-josefin-sans-semibold text-xl md:text-2xl mb-2">
        {formatDateFromString(projDates.start, 'short')} - {formatDateFromString(projDates.end, 'short')}
      </h5>
      <p className="mt-4">
        {description}
      </p>
      <ul className="list-disc list-inside mt-4">
        {bulletPoints.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}
      </ul>
      <div className="flex flex-wrap gap-2 mt-8">
        {tech.map((item, index) => {
          return <span className="text-base border border-[#999] px-2 py-1 rounded-full" key={index}>{item}</span>;
        })}
      </div>
      {link && (
        <a href={link} className="block mx-auto bg-sky-200 rounded-full border-gray-800
          text-center w-5/6 max-w-80 min-w-fit shadow-[7px_7px_#6acbf8] hover:bg-sky-600
          hover:text-sky-50 font-josefin-sans-semibold text-3xl px-5 py-2 mt-8 border-2"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default Experience;
