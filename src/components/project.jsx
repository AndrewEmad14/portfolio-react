import projectsData from "../assets/projects-data";
import ProjectCard from "./common/project-card";

const Project = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <span id="Projects" className="text-8xl bg-gradient-to-r from-pink-500 via-violet-500 to-violet-500 bg-clip-text text-transparent p-12 font-bold mb-20">
          Projects
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-12 items-start">

      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </div>
  );
};

export default Project;