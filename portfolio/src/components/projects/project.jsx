import { Link } from 'react-router-dom';
import { formatDateFromString } from '../../utils/parse-dates.js';

function Project({ name, id, description, route, date, image, imageAlt, external }) {
  const content = (
    <>
      <img
        src={`${import.meta.env.BASE_URL + image}`}
        className="h-75 sm:h-80 w-80 sm:w-90 object-cover rounded-t-lg mt-3"
        alt={imageAlt}
      />
      <div className="flex flex-col h-58">
        <h3 className="px-5 pt-2 font-josefin-sans-bold text-3xl">
          {name}
        </h3>
        <div className="flex-grow px-5">
          <p className="line-clamp-5 text-md pt-2">
            {description}
          </p>
        </div>
        <div className="text-sm px-5 pb-4">
          Last Modified: {formatDateFromString(date, 'long')}
        </div>
      </div>
    </>
  );

  return external ? (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className="relative w-80 sm:w-90 border-6 border-[#333] rounded-2xl bg-lime-100 shadow-[12px_12px_#7ccf00] hover:bg-lime-300 block"
    >
      <div className="absolute z-10 font-josefin-sans-bold bg-[#333] text-lime-100 p-2 right-3 top-3 w-fit rounded-sm">External Link</div>
      {content}
    </a>
  ) : (
    <Link
      to={route}
      id={id}
      className="w-80 sm:w-90 border-6 border-[#333] rounded-2xl bg-lime-100 shadow-[12px_12px_#7ccf00] hover:bg-lime-300"
    >
      {content}
    </Link>
  );
}

export default Project;
