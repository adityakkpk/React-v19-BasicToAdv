import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Header = () => {

  return (
    <header className="bg-gray-800 shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="hidden md:flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="mx-2 text-xl font-semibold text-white">
                TanStack Query
              </span>
            </Link>
          </div>

          {/* Mobile menu button
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div> */}

          {/* Desktop navigation */}
          <nav className="flex space-x-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/trad">FetchOld</NavLink>
            <NavLink href="/rq">FetchRQ</NavLink>
            <NavLink href="/infinite">InfiniteScroll</NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile menu
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-gray-800">
                    Insulation Experts
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/trad">FetchOld</NavLink>
                  <NavLink href="/rq">FetchRQ</NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link
                to="tel:+15551234567"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
