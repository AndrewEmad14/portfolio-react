import SkillCard from "./common/skill-card";
const technical = [
    "Node.js", "SQL", "Bash", "Angular", "SwiftUI", "REST API",
    "Django", "Java", "UIKit", "MongoDB", "Docker", "Design Patterns",
    "Version Control", "Red Hat Sys Admin",
  ];

const soft = [
    "Teamwork", "Communication", "Problem Solving",
    "Adaptability", "Time Management", "Discipline",
  ];

const Skills = () => {
let technicalColor = "bg-gradient-to-r from-violet-500 to-purple-700 shadow-[0_0_5px_rgba(139,92,246,0.8)] hover:shadow-[0_0_25px_rgba(139,92,246,1)]";

let softColor = "bg-gradient-to-r from-pink-400 to-rose-500 shadow-[0_0_5px_rgba(244,114,182,0.8)] hover:shadow-[0_0_25px_rgba(244,114,182,1)]";

  let technicalSkills = technical.map((skill) => <SkillCard key={skill} skill={skill} bgColor={technicalColor}/>);
  let softSkills = soft.map((skill) => <SkillCard key={skill} skill={skill} bgColor={softColor} />);
  return (
    <div id="Skills" className="h-svh flex flex-row items-left justify-left p-12 bg-gray-950 text-white text-left mb-50">
      <div className="text-left">
        <span className="text-8xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold">
          Skills
        </span>
        <h3 className="text-2xl text-slate-300 leading-relaxed text-justify mt-4 p-20">
          Technical Skills
        </h3>
        <div className="flex flex-row flex-wrap gap-4 px-20">
          {technicalSkills}
        </div>
        <h3 className="text-2xl text-slate-300 leading-relaxed text-justify mt-4 p-20">
          Soft Skills
        </h3>
        <div className="flex flex-row flex-wrap gap-4 px-20">
          {softSkills}
        </div>
      </div>
    </div>
  )
}
export default Skills;