// font-family: 'Agdasima', sans-serif;
import ContactBtn from "./ContactBtn";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/codeGuy.png";

const Hero = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex flex-col md:flex-row lg:mt-8 lg:px-48 px-10 justify-center animate__animated animate__fadeInLeft">
        <div className="font-['Agdasima'] lg:px-10 md:text-3xl text-2xl m-auto md:w-1/2 px-6">
          Hi, I am <br />
          <span className="md:text-8xl text-4xl">Steven Perez.</span>
          <br />I like to build web apps professionally and for fun.
        </div>
        <div
          className={`md:w-1/2 w-full h-80 bg-center bg-contain bg-no-repeat bg-[url('src/assets/codeGuy.png')]`}
        ></div>
      </div>
      <div className="w-full lg:px-48 px-10 lg-my-auto md:mt-10 -mt-10">
        <div className="lg:px-10 px-4">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
