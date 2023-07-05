import { skillsData } from "../../data/SKILLS";

const SkillsCard = () => {
  const skillsList = skillsData.map(({ skill }, idx) => {
    return (
      <li
        key={idx}
        className="rounded-xl text-2xl bg-orange-600 animate-pulse px-5 py-2"
      >
        {skill}
      </li>
    );
  });
  return (
    <>
      <ul className="flex gap-4 flex-wrap text-black">{skillsList}</ul>
    </>
  );
};

export default SkillsCard;
