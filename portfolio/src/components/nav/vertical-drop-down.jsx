import { Link } from 'react-router-dom';
import { useState } from "react";

function VerticalDropDown({name, expands, bgColorCSS, bgHoverColorCSS, bgDarkCSS}) {
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
    <div className="w-full">
      <button
        className={`flex items-center justify-center text-center font-josefin-sans text-gray-800
          w-full text-5xl py-6 ${bgHoverColorCSS} ${open ? bgDarkCSS : ""}`}
        onClick={() => setOpen(!open)}
      >
        {name} {open ? up : down}
      </button>
      <div
        className={`${open ? "flex flex-col" : "hidden"} cursor-pointer ${bgColorCSS}`
        }>
        {expands.map((item) => {
          return (
            item.external ?
              <a
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className={`flex items-center justify-center text-center font-josefin-sans text-gray-800
                  w-full text-3xl py-6 px-4 ${bgHoverColorCSS} border-t border-[#333] last:border-b`}
              >
                {item.name} <span className="text-lg ml-4 self-end">(external link)</span>
              </a> :
              <Link
                key={item.id}
                to={item.route}
                className={`flex items-center justify-center text-center font-josefin-sans text-gray-800
                  w-full text-3xl py-6 px-4 ${bgHoverColorCSS} border-t border-[#333] last:border-b`}
              >
                {item.name}
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalDropDown;
