import { Link } from 'react-router-dom';
import { useState } from "react";

function HorizontalDropDown({name, expands, bgColorCSS, bgHoverColorCSS, bgDarkCSS}) {
  const [open, setOpen] = useState(false);

  const down = (
    <div className="flex items-center justify-center pt-4 ml-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );

  const up = (
    <div className="flex items-center justify-center pt-4 ml-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
  );

  return (
    <div className="relative">
      <button
        className={`h-full flex items-center font-josefin-sans text-gray-800 ${bgHoverColorCSS}
          text-center text-4xl px-6 pr-3 xl:text-5xl xl:px-8 xl:pr-4 cursor-pointer ${open ? bgDarkCSS : ""}`}
        onClick={() => setOpen(!open)}
      >
        {name} {open ? up : down}
      </button>
      <div
        className={`${open ? "flex flex-col" : "hidden"} absolute left-1/2 translate-x-[-50%] top-full mt-[3px]
          rounded-b-xl border-6 border-t-0 border-[#333] cursor-pointer ${bgColorCSS} z-10`
        }>
        {expands.map((item) => {
          return (
            item.external ?
              <a
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className={`flex flex-nowrap whitespace-nowrap items-center font-josefin-sans text-gray-800 ${bgHoverColorCSS}
                  text-2xl px-6 py-3 xl:text-3xl xl:px-8 xl:py-4 border-t-1 border-[#333] last:rounded-b-lg`}
              >
                {item.name} <span className="text-lg text-right grow ml-4">(external link)</span>
              </a> :
              <Link
                key={item.id}
                to={item.route}
                className={`flex flex-nowrap whitespace-nowrap items-center font-josefin-sans text-gray-800 ${bgHoverColorCSS}
                  text-center text-2xl px-6 py-3 xl:text-3xl xl:px-8 xl:py-4 border-t-1 border-[#333] last:rounded-b-lg`}
              >
                {item.name}
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalDropDown;
