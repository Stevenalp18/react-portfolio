import { PROJECTSDATA } from "../../data/PROJECTS";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

const ProjectsList = () => {
  const featuredCards = PROJECTSDATA.map((project) => {
    return <FeaturedProjectsCard projects={project} key={project.id} />;
  });

  return (
    <div className="flex md:flex-row flex-col flex-wrap gap-8 w-full text-center my-10 justify-center">
      {featuredCards}
    </div>
  );
};

export default ProjectsList;
