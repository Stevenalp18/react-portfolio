import ContactBtn from "./ContactBtn";

const Hero = () => {
  return (
    <div className="text-white mt-6">
      <div className="flex flex-col md:flex-row lg:mt-8 lg:px-48 px-1 justify-center animate__animated animate__fadeInLeft">
        <div className="font-['Agdasima'] lg:px-10 md:text-3xl text-2xl m-auto md:w-1/2 px-10 md:px-12">
          Hi, I am <br />
          <span className="md:text-8xl text-4xl text-teal-600">
            Steven Perez.
          </span>
          <br />I like to build web apps
          <span className="text-red-400"> professionally</span> and for
          <span className="text-orange-400"> fun</span>.
        </div>
        <div className="md:w-1/2 w-full max-h-80">
          <img
            className="m-auto"
            src="assets/codeGuy.png"
            width="550px"
            alt="Guy Coding On Computer"
          />
        </div>
      </div>
      <div className="w-full lg:px-48 px-10 lg-my-auto md:mt-10 mt-10">
        <div className="lg:px-10 px-4">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
