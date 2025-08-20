import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
  <nav className="w-full bg-rose-500 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      {/* Logo / Title */}
      <h1 className="text-3xl font-serif italic text-white tracking-wider select-none cursor-default drop-shadow-sm">
        Le’Goh Studio
      </h1>

      {/* Navigation Links */}
      <div className="flex space-x-10">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Programs", path: "/programs" },
          { name: "Events", path: "/events" },
        ].map(({ name, path }) => {
          const isActive = location.pathname === path;
          return (
            <span key={name} className="relative group">
              <Link
                to={path}
                className={`
                  text-lg font-medium tracking-wide
                  ${isActive ? "text-white" : "text-red-100"}
                  hover:text-white
                  transition-all duration-300 ease-in-out
                `}
              >
                {name}
              </Link>
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5
                  bg-white
                  transition-all duration-300 ease-in-out
                  ${isActive ? "w-full" : "w-0"}
                  group-hover:w-full
                `}
              />
            </span>
          );
        })}
      </div>
    </nav>
  );
}
