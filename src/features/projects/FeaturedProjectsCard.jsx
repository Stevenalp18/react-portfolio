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

  if (projects.featured) {
    return (
      <>
        <div
          className={`${featuredColor()} p-10 rounded-xl sm:w-[32w] md:w-96 w-full`}
        >
          <div className="text-xl text-orange-400">Featured Project</div>
          <div className="text-3xl lg:text-4xl">{title}</div>
          <div className="h-auto flex justify-center">
            <img
              width={width}
              src={url}
              alt={alt}
              className="lg:-my-16 xl:-my-20 -my-4"
            />
          </div>
          <div className="text-xl">{description}</div>
        </div>
      </>
    );
  }
};

export default FeaturedProjectsCard;
