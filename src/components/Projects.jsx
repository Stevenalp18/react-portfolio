import ProjectCard from "../features/projects/ProjectCard";

const Projects = () => {
  return (
    <div className="md:px-10 px-4 font-['Agdasima'] text-white m-auto border-2">
      <div className="text-center mt-10 flex flex-col justify-center">
        <h2 className="text-5xl border-b-2 border-blue-700 m-auto py-2 mb-4">
          Recent Projects
        </h2>
        <p className="text-2xl">
          Check out what I have worked on in the past, below!
        </p>
      </div>
      {/*  DELETE BELOW AFTER MAKING COMPONENTS */}
      <div className="flex md:flex-row flex-col flex-wrap gap-8 w-full text-center my-10 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* <div className="bg-emerald-700 p-10 rounded-xl md:w-[30vw]">
          <div className="text-lg text-orange-400">Featured Project</div>
          <div className="text-2xl">Portfolio Website</div>
          <div className="h-auto flex justify-center">
            <img
              width="300"
              src="assets/portfolioShot.png"
              alt="Portfolio Project ScreenShot"
            />
          </div>
          <div className="text-lg">
            I made this project using React, Tailwind, Hooks, canva for design
            and combined with flex/grid I was able to make it responsive on all
            mobile devices. I am proud of how my portfolio turned out compared
            to my other one, it's simple but nice.
          </div>
        </div> 
        <div className="bg-teal-700 p-10 rounded-xl md:w-[30vw] w-full">
          <div className="text-lg text-orange-400">Featured Project</div>
          <div className="text-2xl">Portfolio Website</div>
          <div className="h-auto flex justify-center">
            <img
              width="300"
              src="assets/portfolioShot.png"
              alt="Portfolio Project ScreenShot"
            />
          </div>
          <div className="text-lg">
            I made this project using React, Tailwind, Hooks, canva for design
            and combined with flex/grid I was able to make it responsive on all
            mobile devices. I am proud of how my portfolio turned out compared
            to my other one, it's simple but nice.
          </div>
        </div>
        <div className="bg-orange-700 p-10 rounded-xl md:w-[30vw] w-full">
          <div className="text-lg text-orange-400">Featured Project</div>
          <div className="text-2xl">Portfolio Website</div>
          <div className="h-auto flex justify-center">
            <img
              width="300"
              src="assets/portfolioShot.png"
              alt="Portfolio Project ScreenShot"
            />
          </div>
          <div className="text-lg">
            I made this project using React, Tailwind, Hooks, canva for design
            and combined with flex/grid I was able to make it responsive on all
            mobile devices. I am proud of how my portfolio turned out compared
            to my other one, it's simple but nice.
          </div>
  </div>
  */}
      </div>
      {/*  */}
      {/* Project Card Below */}
    </div>
  );
};

export default Projects;
