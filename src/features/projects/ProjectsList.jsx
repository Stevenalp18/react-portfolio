import { PROJECTSDATA } from "../../data/PROJECTS";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
  const featuredCards = PROJECTSDATA.map((project) => {
    return <ProjectsCard projects={project} key={project.id} />;
  });

  return (
    <div className="flex md:flex-row flex-col flex-wrap gap-8 w-full text-center my-4 justify-center">
      {featuredCards}
    </div>
  );
};

export default ProjectsList;
