import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* background */}
      <div className="font-roboto">
        {/* width content */}
        <div className="flex flex-col items-center justify-center bg-teal-200 py-12 lg:py-24">
          <a
            href=""
            className="font-bold text-3xl text-teal-700 mb-10 lg:mb-14 hover:text-white lg:text-4xl"
          >
            sunnyside
          </a>
          <div className=" text-teal-700 mb-14 lg:mb-24">
            <a href="" className="mx-4 lg:mx-8 hover:text-white">
              About
            </a>
            <a href="" className="mx-4 lg:mx-8  hover:text-white">
              Services
            </a>
            <a href="" className="mx-4 lg:mx-8  hover:text-white">
              Projects
            </a>
          </div>
          <div className="flex text-teal-700 text-2xl lg:text-3xl">
            <a href="" className="mx-2 lg:mx-4 hover:text-white">
              <AiFillFacebook />
            </a>
            <a href="" className="mx-2 lg:mx-4  hover:text-white">
              <AiFillInstagram />
            </a>
            <a href="" className="mx-2 lg:mx-4  hover:text-white">
              <AiOutlineTwitter />
            </a>
            <a href="" className="mx-2 lg:mx-4  hover:text-white">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
