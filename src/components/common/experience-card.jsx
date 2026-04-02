import Experience from "../experience";
import SkillCard from "./skill-card";


const ExperienceCard = ({ experience })=> {
  const { title, role, icon, period, current, description, bullets, tags } = experience;

  return (
    <div className={` rounded-xl px-6 py-5 ${current ? "border-2 border-pink-500" : "border border-white-200"}`}>

      <div className="flex items-start justify-between flex-wrap gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
        
          <div>
            <p className="text-base font-medium text-violet-400 m-0">{title}</p>
            <p className="text-xs text-grey-400 mt-0.5 mb-0">{role}</p>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-end gap-2">
          {current && (
            <span className="text-[15px]  text-pink-600 px-2.5 py-0.5 rounded-full">
              Current
            </span>
          )}
          <span className="text-[15px] text-gray-400 whitespace-nowrap">{period}</span>
        </div>
      </div>

      {description && (
        <p className="text-[15px] text-gray-300 leading-relaxed mb-3">{description}</p>
      )}

      {bullets.length > 0 && (
        <ul className="list-disc pl-4 flex flex-col gap-1 mb-3">
          {bullets.map((b, i) => (
            <li key={i} className="text-[13px] text-gray-300 leading-snug">{b}</li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <SkillCard key={tag} skill={tag} textSize="text-sm" textColor="text-violet-400" border="border border-violet-200"/>
          ))}
        </div>
      )}

    </div>
  );
}
export default ExperienceCard;