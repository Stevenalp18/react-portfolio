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
            Hi there! 👋 <br />
            <br />I am Steven Perez, a front end developer 💻 and a Nucamp
            Coding Bootcamp Graduate👨‍🎓. Originally a self taught developer but
            attended a coding bootcamp (Nucamp) to hone my skills and fill the
            gaps that needed to be filled. I completed the Front End Development
            and the Full Stack Development course and have been working on
            larger projects to continue to improve my skillset. I love learning
            about new technologies and implementing them into my projects. After
            all, the more you use something, the better you get at it. Feel free
            to check out my projects by hitting the 'Projects' tab above. I am
            continuously working on new project ideas, check out my Github
            profile on the bottom right to see what I am currently working on.
            It will be the most accurate!
            <br />
            <br />
            If you want to get in touch feel free to reach out! Say Hi, either
            via LinkedIn or email. 📧 If you want to work together or have any
            opportunities, do feel free to reach out as well!
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="text-3xl text-left mb-10">Skills.</div>
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
