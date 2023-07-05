import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <NavLink to="/contact">
      <button className="px-8 xl:px-12 text-2xl py-2 md:py-3 md:text-3xl font-['Agdasima'] rounded text-white animate-bounce bg-blue-500/70 hover:bg-orange-400 hover:text-black">
        Get in touch
      </button>
    </NavLink>
  );
};

export default ContactBtn;
