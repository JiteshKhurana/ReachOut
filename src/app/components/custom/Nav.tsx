"use client";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="l-0 r-0 z-50 sticky top-0 md:top-4 m-auto md:mt-4 flex max-md:w-full w-[80%] justify-between items-center md:rounded-lg border border-[#343434] bg-[#0a0a0a] bg-opacity-50 max-md:px-4  px-10 py-3 text-xl backdrop-blur-lg backdrop-filter">
        <Link to="masktop" smooth={true} className="text-2xl cursor-pointer">
          ReachOut
        </Link>
        <div className="flex gap-4 max-lg:text-sm text-base items-center">
          <Link
            to="features"
            smooth={true}
            className="cursor-pointer text-white hover:text-[#d1d1d1] "
          >
            Features
          </Link>
          <Link
            to="aboutus"
            smooth={true}
            className="cursor-pointer text-white hover:text-[#d1d1d1] "
          >
            About us
          </Link>

          <span className="cursor-pointer lg:text-xl text-white hover:text-[#d1d1d1]">
            <a href="https://git.new/makaanmates" target="_blank">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
