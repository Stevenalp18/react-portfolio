const ProjectsCard = ({ projects }) => {
  const {
    title,
    github,
    link,
    image: { url, alt },
  } = projects;

  return (
    <>
      <div className="bg-black border-violet-400 border-2 p-10 rounded-xl w-full sm:w-80 text-white ">
        <div className="text-3xl lg:text-xl">{title}</div>
        <div className="h-auto flex justify-center">
          <img width={200} src={url} alt={alt} className="-my-10" />
        </div>
        <div className="flex gap-2 justify-center text-xl">
          <div>
            <a href={github} target="_blank">
              Github
            </a>
          </div>
          <div>
            <a href={link} target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
