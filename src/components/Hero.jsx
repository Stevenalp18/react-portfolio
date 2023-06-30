// font-family: 'Agdasima', sans-serif;
import ContactHomeBtn from "./ContactHomeBtn";
const Hero = () => {
  return (
    <div className="grid grid-cols-12 text-black">
      <div className="text-white px-10 py-6 md:p-10 md:col-span-5 col-span-10 flex align-bottom">
        <div className="md:text-3xl text-2xl font-['Agdasima'] animate__animated animate__fadeInLeft m-auto">
          Hi, I am <br />
          <span className="md:text-8xl text-6xl">Steven Perez.</span>
          <br />I like to build web apps professionally and for fun.
        </div>
      </div>
      <div className="md:p-10 col-span-10 md:col-span-6">
        <div className="animate__animated animate__fadeInLeft flex align-middle">
          <img src="https://www.pngmart.com/files/22/Programmer-PNG-Photos.png" />
        </div>
      </div>
      <div className="p-2 col-span-1 row-span-2 flex md:m-auto">
        <div className="text-center">
          <i class="fa-solid fa-circle-arrow-right fa-2xl text-white" />
        </div>
      </div>
      <div className="px-10 py:6 xl:col-start-1 xl:col-end-4 xl:m-auto col-span-10 md:col-span-11">
        <button className="border-2 border-white px-8 xl:px-12 text-2xl py-2 font-['Agdasima'] rounded text-white">
          Get in touch
        </button>
      </div>
      <div className="col-span-12 m-auto mt-14 md:mt-60 lg:mt-50 xl:mt-36 md:col-span-12">
        <div className="p-4 text-center">
          <i class="fa-solid fa-circle-arrow-down fa-2xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="grid grid-rows-2 grid-cols-1 bg-red-500 ">
      <div className="md:grid md:grid-rows-1 md:grid-cols-2 p-4 border-2 border-white">
        <div className="text-2xl font-['Agdasima'] animate__animated animate__fadeInLeft m-auto border-2 border-white">
          Hi, I am <br />
          <span className="md:text-8xl text-6xl">Steven Perez.</span>
          <br />I like to build web apps professionally and for fun.
        </div>
        <div className="border-2 border-white animate__animated animate__fadeInLeft">
          <img src="https://www.pngmart.com/files/22/Programmer-PNG-Photos.png" />
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="border-2 border-white px-4">
          <button className="border-2 border-white px-8 py-2 text-2xl font-['Agdasima'] rounded">
            Contact Me
          </button>
        </div>
      </div>
    </div> */
}

// <div className="flex md:flex-row flex-col m-auto md:mt-6 pt-16 px-8 text-white">
//       {/* Container */}
//       <div className="md:self-center md:text-3xl text-xl font-['Agdasima'] m-auto animate__animated animate__fadeInLeft">
//         {/* Text */}Hi, I am <br />
//         <span className="md:text-8xl text-6xl">Steven Perez.</span>
//         <br />I like to build web apps professionally and for fun.
//       </div>

//       <div className="max-w-2xl md:w-1/2 md:self-center animate__animated animate__fadeInLeft">
//         {/* Image */}
//         <img src="https://www.pngmart.com/files/22/Programmer-PNG-Photos.png" />
//       </div>
//     </div>
