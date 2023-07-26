import FeaturedProjectsList from "../features/projects/FeaturedProjectsList";
import ProjectsList from "../features/projects/ProjectsList";

const Projects = () => {
  return (
    <div className="md:px-10 px-4 font-['Agdasima'] text-white m-auto ">
      <div className="text-center mt-10 flex flex-col justify-center">
        <h2 className="text-5xl border-b-2 border-blue-700 m-auto py-2 mb-4">
          Projects
        </h2>
        <p className="text-2xl">
          Check out what I have worked on in the past, below!
        </p>
      </div>
      {/*  DELETE BELOW AFTER MAKING COMPONENTS */}
      <div className="flex md:flex-row flex-col flex-wrap gap-8 w-full text-center my-10 justify-center">
        <FeaturedProjectsList />
      </div>
      <div className="text-center m-auto">
        <h2 className="text-3xl">Other Projects</h2>
        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
