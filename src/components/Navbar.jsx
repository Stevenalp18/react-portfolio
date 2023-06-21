import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className="text-white">
      <ul className="flex py-6 px-8 text-xl justify-between">
        <div className="md:w-1/4">Steven Perez</div>
        <div className="md:hidden flex justify-end"> Hi there </div>
        <div className="flex gap-8 px-12 md:gap-16 justify-end w-full hidden md:flex">
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/Projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/Contact">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </navbar>
  );
};

export default Navbar;
