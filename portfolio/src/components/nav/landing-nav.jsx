import { Link } from 'react-router-dom'
import navItems from './nav-items.json';

function LandingNav() {
  return (
    <nav className="flex flex-col items-center md:flex-row gap-9 xl:gap-12 mt-10 xl:mt-14 w-5/6 md:w-auto">
      {navItems.map(({ id, name, route }) => (
        <Link
          key={id}
          to={route}
          className="
            font-josefin-sans text-gray-800 bg-slate-200 rounded-full border-gray-800
            text-center w-5/6 max-w-80 min-w-fit md:w-fit shadow-[7px_7px_#ff7390] hover:bg-rose-300
            text-3xl px-6 py-3 border-3 xl:text-5xl xl:px-8 xl:py-4 xl:border-4"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default LandingNav;
