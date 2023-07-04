import { NavLink } from "react-router-dom";

const DownToAbout = () => {
  return (
    <div className="absolute left-[48%] right-[48%] bottom-5 md:bottom-20">
      <NavLink to="/about">
        <div className="text-center">
          <i class="fa-solid fa-circle-arrow-down fa-2xl animate-pulse" />
        </div>
      </NavLink>
    </div>
  );
};

export default DownToAbout;
