import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav className="w-full bg-rose-500 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      {/* Logo / Title */}
      <h1 className="text-2xl sm:text-3xl font-serif italic text-white tracking-wider select-none cursor-default drop-shadow-sm">
        Le’Goh Studio
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10">
        {links.map(({ name, path }) => {
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-rose-500 shadow-lg md:hidden flex flex-col items-center py-4 space-y-4">
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`
                  text-lg font-medium tracking-wide
                  ${isActive ? "text-white" : "text-red-100"}
                  hover:text-white
                  transition-all duration-300 ease-in-out
                `}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
