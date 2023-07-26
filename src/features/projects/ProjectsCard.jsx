const ProjectsCard = ({ projects }) => {
  const {
    title,
    github,
    link,
    image: { url, alt },
  } = projects;

  if (!projects.featured) {
    return (
      <>
        <div className="bg-violet-700 p-10 rounded-xl w-full sm:w-72 text-white ">
          <div className="text-3xl lg:text-xl">{title}</div>
          <div className="h-auto flex justify-center">
            <img width={200} src={url} alt={alt} className="-my-10" />
          </div>
          <div className="flex gap-2 justify-center text-xl">
            <div>
              <a
                href={github}
                target="_blank"
                className="border-b-2 border-teal-500"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href={link}
                target="_blank"
                className="border-b-2 border-emerald-500"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProjectsCard;
