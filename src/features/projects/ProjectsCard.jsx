const ProjectsCard = ({ props }) => {
  [featured, title, image, imageAlt, description, githubLink, link] = props;
  return (
    <div className="bg-red-100 p-4 grid grid-cols-12 w-96">
      <div className="bg-teal-100 p-2 col-span-12">
        <div>{featured}</div>
        <div>{title}</div>
      </div>
      <div className="bg-teal-300 p-4 col-span-12">
        <img src={`${image}`} alt={`${imageAlt}`} />
      </div>
      <div className="bg-teal-200 p-4 col-span-12">
        <div>{description}</div>
      </div>
      <div className="bg-teal-400 p-4 col-span-12">
        {githubLink} | {weblink}
      </div>
    </div>
  );
};

export default ProjectsCard;
