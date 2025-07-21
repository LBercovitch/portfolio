import { useState } from 'react';
import { Link } from 'react-router-dom'

import navItems from './nav-items.json';
import colorMap from './color-map.json';
import MenuButton from './menu-button';

function VerticalNav({ colorName }) {
  const [menuActive, setMenuActive] = useState(false);
  const bgColorCSS = colorMap[colorName].bg;
  const bgHoverColorCSS = colorMap[colorName].bgHover;
  const bgVertMenuColorCSS = colorMap[colorName].bgVertMenu;

  return (
    <nav
      className={`md:hidden flex justify-between items-center sticky top-0 z-10
        w-full h-24 ${bgColorCSS} border-b-3 border-gray-800`}
    >
      {/* Page Logo */}
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

      {/* Annimated menu button */}
      <div className={`flex h-full ${bgHoverColorCSS}`}>
        <MenuButton active={menuActive} setActive={setMenuActive} />
      </div>

      {/* Menu Items */}
      {menuActive && <div 
        className={`fixed left-0 top-24 z-10 flex flex-col items-center w-full h-full ${bgVertMenuColorCSS}`}
      >
        {navItems.map(({ id, name, route }) => (
          <Link
            key={id}
            to={route}
            className={`flex items-center justify-center text-center font-josefin-sans text-gray-800
              w-full text-5xl py-6 ${bgHoverColorCSS}`}
          >
            {name}
          </Link>
        ))}
      </div>}
    </nav>
  );
}

export default VerticalNav;
