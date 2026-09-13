import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl text-gray-700 md:hidden">
            {" "}
            <FaBars />{" "}
          </a>

          <a href="#" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Dev Stack Logo"
              className="h-136.2 w-32 object-contain"
            />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            <li>
              <a
                href="#"
                className="text-sm font-medium text-pink-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="px-2 py-2 text-xs font-medium text-gray-600 transition hover:text-gray-900 sm:px-3 sm:text-sm">
              Sign In
            </button>

            <button className="brand-gradient-bg rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-4 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
