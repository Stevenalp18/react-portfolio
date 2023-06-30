// font-family: 'Agdasima', sans-serif;

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col m-auto md:mt-6 pt-16 px-8">
      {/* Container */}
      <div className="md:self-center md:text-3xl text-xl font-['Agdasima'] m-auto animate__animated animate__fadeInLeft">
        {/* Text */}Hi, I am <br />
        <span className="md:text-8xl text-6xl">Steven Perez.</span>
        <br />I like to build web apps professionally and for fun.
      </div>

      <div className="max-w-2xl md:w-1/2 md:self-center animate__animated animate__fadeInLeft">
        {/* Image */}
        <img src="https://www.pngmart.com/files/22/Programmer-PNG-Photos.png" />
      </div>
    </div>
  );
};

export default Hero;
