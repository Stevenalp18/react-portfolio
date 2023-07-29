import ContactBtn from "./ContactBtn";
import SkillsCard from "../features/about/SkillsCard";

const About = () => {
  return (
    <div className="md:p-10 p-5 text-white text-center font-['Agdasima']">
      <div className="flex flex-col justify-center">
        <div className="text-5xl pb-2 border-b-2 m-auto border-blue-700">
          About Me.
        </div>
        <div className="text-2xl my-3">
          Learn about what I do and what Skills I have below.
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center gap-8 lg:mx-20 mt-4 md:mt-10">
        <div className="border-l-2 border-b-2 px-2 border-blue-700 lg:w-1/2">
          <div className="text-4xl px-4 text-left text-orange-700">
            Get to know me.
          </div>
          <div className="p-4 text-left text-2xl">
            Hi, my name is Steven Perez. I am a self taught web developer. I
            have created several web applications professionally and for fun for
            some time now. I love using different web technologies and love to
            learn new concepts about web app development. I specialize more in
            the Front End aspect of a website but also have some knowledge with
            some backend tecnhologies. I like to create from scratch and let my
            mind wander free with what creativity brings to fruition.
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="text-3xl text-left">Skills.</div>
          <SkillsCard />
        </div>
      </div>
      <div className="my-12 text-center w-full">
        <ContactBtn />
      </div>
    </div>
  );
};

export default About;
