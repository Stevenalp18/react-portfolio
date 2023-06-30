import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <NavLink to="/contact">
      <button className="border-2 border-blue-800 px-8 xl:px-12 text-2xl py-2 md:py-3 md:text-3xl font-['Agdasima'] rounded text-slate-200">
        Get in touch
      </button>
    </NavLink>
  );
};

export default ContactBtn;
