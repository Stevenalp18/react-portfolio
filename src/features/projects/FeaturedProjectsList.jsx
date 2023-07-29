import { PROJECTSDATA } from "../../data/PROJECTS";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

const FeaturedProjectsList = () => {
  const featuredCards = PROJECTSDATA.map((project, i) => {
    if (i < 3) {
      return <FeaturedProjectsCard projects={project} key={project.id} />;
    }
  });

  return (
    <div className="flex md:flex-row flex-col flex-wrap gap-8 w-full text-center my-4 justify-center">
      {featuredCards}
    </div>
  );
};

export default FeaturedProjectsList;
