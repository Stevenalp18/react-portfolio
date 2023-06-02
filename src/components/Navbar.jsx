import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className="text-white">
      <ul className="flex py-4 px-4">
        <div className="w-1/4">Steven Perez</div>
        <div className="flex gap-8 px-12 md:gap-16 justify-end w-full">
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
