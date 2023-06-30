import { NavLink } from "react-router-dom";

const HomePageNavArrows = () => {
  return (
    <>
      <div className="flex w-full p-10 absolute bottom-0 ">
        <div className="w-full text-center">
          <NavLink to="/about" className={"justify-center"}>
            <i className="fa-solid fa-circle-arrow-down fa-2xl animate__animated animate__flash" />
          </NavLink>
        </div>
      </div>
      <div className="flex absolute top-0 right-0 bottom-0">
        <div className="flex">
          <NavLink to="/projects" className={"self-center"}>
            <i className="fa-solid fa-circle-arrow-right fa-2xl animate__animated animate__flash" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePageNavArrows;
