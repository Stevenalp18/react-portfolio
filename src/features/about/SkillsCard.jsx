import { skillsData } from "../../data/SKILLS";

const SkillsCard = () => {
  const skillsList = skillsData.map(({ skill }, idx) => {
    return (
      <li
        key={idx}
        className="rounded-xl text-xl bg-orange-600 animate-pulse px-4 py-2"
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
