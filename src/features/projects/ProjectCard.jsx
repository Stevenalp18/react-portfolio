import { projectsData } from "../../data/PROJECTS";

const ProjectsCard = () => {
  const projects = projectsData.map(({ project }) => {
    const {
      title,
      descritpion,
      // image { url, alt, width },
      github,
      link,
      idx,
    } = project;
    return <div id={idx}>{title}</div>;
  });
  // [featured, title, description, image = { url, alt, width }, github, link] =
  //   projectsData;

  // const projects = projectsData.map((project) => {
  //   return <div>{featured}</div>;
  // });
  return (
    <div className="bg-emerald-700 p-10 rounded-xl md:w-[30vw]">
      {/* <div className="text-lg text-orange-400">Featured Project</div>
      <div className="text-2xl">{title}</div>
      <div className="h-auto flex justify-center">
        <img width={width} src={url} alt={alt} />
      </div>
      <div className="text-lg">{description}</div> */}
      {projects}
    </div>
  );
};

export default ProjectsCard;
