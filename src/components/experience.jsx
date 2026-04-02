import ExperienceCard from "./common/experience-card";
import experiences from "../assets/experience-data.js";

export default function Experience() {
  return (
    <div id="Experience" className="h-svh flex flex-row items-left justify-left p-12 bg-gray-950 text-white  mb-50">
      <div className="text-left">
        {/* Section label */}
        <p className="text-8xl bg-gradient-to-r from-pink-500 via-violet-500 to-violet-500 bg-clip-text text-transparent font-bold mb-15">
          Experience
        </p>

        {/* Experience cards */}
        <div className="flex flex-col gap-3 px-30">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>


    </div>
  );
}