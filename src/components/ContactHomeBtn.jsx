import { NavLink } from "react-router-dom";

const ContactHomeBtn = () => {
  return (
    <div className="ml-12 md:ml-8 mt-4 md:mt-8 lg:mt-[-14px] xl:ml-28 2xl:ml-52 xl:mt-[-24px] animate__animated animate__fadeInLeft text-white">
      <NavLink to="/contact">
        <button className="border-2 border-white px-8 py-2 text-2xl font-['Agdasima'] rounded">
          Contact Me
        </button>
      </NavLink>
    </div>
  );
};

export default ContactHomeBtn;
