import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all text-white
     ${
       isActive
         ? "border text-green-900"
         : "text-gray-700 hover:bg-gray-100 hover:text-black"
     }`;

  return (
    <header className="w-full bg-green-900 shadow-md fixed top-0 z-99">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between border items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-white">My-Library</h1>

        {/* Navigation */}
        <nav className="flex gap-3">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/browse" className={navLinkClass}>
            Browse Books
          </NavLink>

          <NavLink to="/add" className={navLinkClass}>
            Add Books
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
