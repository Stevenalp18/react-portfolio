import { NavLink } from "react-router-dom";

const DownToAbout = () => {
  return (
    <div className="absolute md:left-[48vw] md:right-[48vw] md:bottom-5 bottom-[5vw] left-[48vw] right-[48vw]">
      <NavLink to="/projects">
        <div className="text-center">
          <i className="fa-solid fa-circle-arrow-down fa-2xl animate-pulse" />
        </div>
      </NavLink>
    </div>
  );
};

export default DownToAbout;
