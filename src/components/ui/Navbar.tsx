// src/components/Navbar.jsx
import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      {/* Left side: Product name */}
      <div className="text-xl font-bold text-blue-600">MyProduct</div>

      {/* Right side: Navigation links */}
      <div className="space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {/* <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" /> */}
            Register
          </button>
        </span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
