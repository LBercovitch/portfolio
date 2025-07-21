import { Link } from 'react-router-dom'
import navItems from './nav-items.json';
import colorMap from './color-map.json';

function HorizontalNav({colorName}) {
  const bgColorCSS = colorMap[colorName].bg;
  const bgHoverColorCSS = colorMap[colorName].bgHover;

  return (
    <nav className={`hidden md:flex justify-between items-center sticky top-0 z-10 w-full h-24 ${bgColorCSS} border-b-3 border-gray-800`}>
      <div className="h-full">
        <Link
          to="/"
          className={`h-full flex items-center px-4 ${bgHoverColorCSS}`}
        >
          <img
            src={`${import.meta.env.BASE_URL}/LB-logo.png`}
            className="h-18"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex h-full">
        {navItems.map(({ id, name, route }) => (
          <Link
            key={id}
            to={route}
            className={`h-full flex items-center font-josefin-sans text-gray-800 ${bgHoverColorCSS}
              text-center text-3xl px-6 py-3 xl:text-5xl xl:px-8 xl:py-4`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default HorizontalNav;
