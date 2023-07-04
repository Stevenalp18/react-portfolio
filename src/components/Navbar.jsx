import { NavLink } from "react-router-dom";
import { useState } from "react";

/// font-family: 'Oswald', sans-serif;
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    const hamburger = document.querySelector("#hamburger");
    const closeX = document.querySelector("#close-x");
    const navLinks = document.querySelector("#nav-links-toggle");

    setToggleMenu(!toggleMenu);

    hamburger.classList.toggle("hidden");
    closeX.classList.toggle("hidden");
    navLinks.classList.toggle("hidden");
  };

  return (
    <div className="text-white font-['Agdasima'] w-full">
      <div className="flex justify-between text-4xl m-auto px-5 py-3">
        {/* Container */}
        <div className="font-bold">
          <NavLink to="/">Steven Perez</NavLink>
        </div>
        <div className="md:hidden">
          <span id="hamburger" className="z-50">
            <i
              className="fa-solid fa-bars cursor-pointer fa-sm"
              onClick={menuHandler}
            />
          </span>
          <span className="hidden" id="close-x">
            <i
              className="fa-solid fa-x fa-sm cursor-pointer"
              onClick={menuHandler}
            />
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li>
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Shows up when toggled */}
      <div
        id="nav-links-toggle"
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
