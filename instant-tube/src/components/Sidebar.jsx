import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-60 h-full p-4 bg-white shadow-lg border-r border-gray-200">
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
          >
            Home
          </Link>
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
          Shorts
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
          Videos
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
          Live
        </li>
      </ul>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase px-3 mb-2">
          Subscriptions
        </h2>
        <ul className="space-y-1">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Music
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Sports
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Gaming
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Movies
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase px-3 mb-2">
          Watch Later
        </h2>
        <ul className="space-y-1">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Music
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Sports
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Gaming
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
            Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
