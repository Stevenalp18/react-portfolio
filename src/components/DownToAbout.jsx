import { NavLink } from "react-router-dom";

const DownToAbout = () => {
  return (
    <div className="md:absolute md:left-[48%] md:right-[48%] md:bottom-5 md:bottom-20 mt-[10vw]">
      <NavLink to="/about">
        <div className="text-center">
          <i className="fa-solid fa-circle-arrow-down fa-2xl animate-pulse" />
        </div>
      </NavLink>
    </div>
  );
};

export default DownToAbout;
