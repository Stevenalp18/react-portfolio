import { NavLink } from "react-router-dom";

const RightToProject = () => {
  return (
    <div className="absolute top-[49%] bottom-[49%] md:right-6 right-4">
      <NavLink to="/about">
        <div className="text-center">
          <i className="fa-solid fa-circle-arrow-right fa-2xl animate-pulse" />
        </div>
      </NavLink>
    </div>
  );
};

export default RightToProject;
