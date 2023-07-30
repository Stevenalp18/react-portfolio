import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

/// font-family: 'Oswald', sans-serif;
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const hamburger = useRef();
  const closeX = useRef();
  const navLinks = useRef();

  const menuHandler = () => {
    setToggleMenu(!toggleMenu);

    hamburger.current.classList.toggle("hidden");
    closeX.current.classList.toggle("hidden");
    navLinks.current.classList.toggle("hidden");
  };

  return (
    <div className="text-white font-['Agdasima'] w-full">
      <div className="flex justify-between text-4xl m-auto px-5 py-3">
        {/* Container */}
        <div className="font-bold">
          <NavLink to="/" className="hover:text-teal-500">
            Steven Perez
          </NavLink>
        </div>
        <div className="md:hidden">
          <span ref={hamburger} className="z-50">
            <i
              className="fa-solid fa-bars cursor-pointer fa-sm"
              onClick={menuHandler}
            />
          </span>
          <span className="hidden" ref={closeX}>
            <i
              className="fa-solid fa-x fa-sm cursor-pointer"
              onClick={menuHandler}
            />
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li>
              <NavLink className="hover:text-emerald-500" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-blue-500" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-red-500" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-orange-500" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Shows up when toggled */}
      <div
        ref={navLinks}
        className="bg-black md:hidden hidden list-none text-2xl font-['Oswald'] absolute w-full left-0 text-center m-auto z-50"
      >
        <li className="hover:bg-slate-100 hover:text-black">
          <NavLink className="block w-full py-4" to="/">
            Home
          </NavLink>
        </li>
        <li className="hover:bg-slate-100 hover:text-black">
          <NavLink className="block w-full py-4" to="/about">
            About
          </NavLink>
        </li>
        <li className="hover:bg-slate-100 hover:text-black">
          <NavLink className="block w-full py-4" to="/projects">
            Projects
          </NavLink>
        </li>
        <li className="hover:bg-slate-100 hover:text-black">
          <NavLink className="block w-full py-4" to="/contact">
            Contact
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
