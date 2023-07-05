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
        <nav className="w-11/12 m-auto py-2">
          {/* logo and menu */}
          <div className="flex items-center justify-between">
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
          <ul className=""></ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
