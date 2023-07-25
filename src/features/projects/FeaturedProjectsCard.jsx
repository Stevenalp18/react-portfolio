import { FEATUREDPROJECTSCOLORS } from "../../data/PROJECTS";

const FeaturedProjectsCard = ({ projects }) => {
  const {
    title,
    description,
    image: { width, url, alt },
  } = projects;

  const featuredColor = () => {
    const randomInt = Math.floor(Math.random() * FEATUREDPROJECTSCOLORS.length);
    return FEATUREDPROJECTSCOLORS[randomInt].color;
  };

  return (
    <>
      <div className={`${featuredColor()} p-10 rounded-xl md:w-[30vw] w-full`}>
        <div className="text-xl text-orange-400">Featured Project</div>
        <div className="text-3xl lg:text-4xl">{title}</div>
        <div className="h-auto flex justify-center">
          <img width={width} src={url} alt={alt} className="lg:-my-20 " />
        </div>
        <div className="text-xl">{description}</div>
      </div>
    </>
  );
};

export default FeaturedProjectsCard;
