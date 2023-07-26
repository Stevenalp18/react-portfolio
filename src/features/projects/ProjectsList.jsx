import { PROJECTSDATA } from "../../data/PROJECTS";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
  const featuredCards = PROJECTSDATA.map((project) => {
    return <ProjectsCard projects={project} key={project.id} />;
  });

  return (
    <div className="flex md:flex-row flex-col flex-wrap gap-8 lg:w-2/3 text-center mt-8 mb-20 mx-auto justify-center">
      {featuredCards}
    </div>
  );
};

export default ProjectsList;
