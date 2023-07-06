// React Hooks
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClickMenu = () => {
    setIsToggled((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsToggled(false);
  };

  return (
    <>
      {/* background */}
      <div className="">
        <nav className="w-11/12 lg:w-10/12 m-auto py-3 lg:py-3 flex-col lg:flex-row lg:flex items-center justify-between">
          {/* logo and menu */}
          <div className="flex items-center justify-between w-full lg:w-fit">
            {/* logo */}
            <div className="">
              <a href="">
                <h1 className="font-kadwa font-bold text-lg text-white ">
                  sunnyside
                </h1>
              </a>
            </div>
            {/* menu */}
            <button onClick={handleClickMenu} className="lg:hidden">
              {isToggled ? (
                <FaTimes className="text-white text-2xl hover:text-black" />
              ) : (
                <FaBars className="text-white text-2xl hover:text-black" />
              )}
            </button>
          </div>

          {/* Links */}
          <ul
            className={`lg:flex lg:items-center text-sm text-black ${
              isToggled ? "show " : "hidden"
            } absolute lg:static left-0 bg-white bg-opacity-100 lg:bg-transparent lg:w-fit mt-3 lg:mt-0 px-6 w-full md:px-10 text-center text-gray-500 lg:text-white font-kadwa`}
          >
            <li className="ml-0 lg:ml-6 mt-4 lg:mt-0 py-4 tracking-wide hover:text-yellow-600">
              <a
                href="/"
                onClick={handleCloseMenu}
                className="hover:text-black"
              >
                About
              </a>
            </li>
            <li className="ml-0 lg:ml-6 py-4 tracking-wide hover:text-yellow-600">
              <a
                href="/about"
                onClick={handleCloseMenu}
                className="hover:text-black"
              >
                Services
              </a>
            </li>
            <li className="ml-0 lg:ml-6 py-4 tracking-wide hover:text-yellow-600">
              <a
                href="/parish-councils"
                onClick={handleCloseMenu}
                className="hover:text-black"
              >
                Projects
              </a>
            </li>

            <li className="ml-0 lg:ml-6 py-4 mb-6 lg:mb-0 tracking-wide hover:text-yellow-600">
              <a
                href="/contact"
                onClick={handleCloseMenu}
                className="text-black font-bold px-5 py-2 lg:bg-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
