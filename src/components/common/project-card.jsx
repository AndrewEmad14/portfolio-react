import SkillCard from "./skill-card";

const ProjectCard = ({ project }) => {
  const { title, subtitle, image, description, tags, links } = project;

  return (
    <div className="rounded-xl bg-gray-900 border border-white-200 overflow-hidden h-full flex flex-col">

      {image && (
        <div className="w-full h-44 overflow-hidden bg-gray-80 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="px-6 py-5">
        <div className="mb-2.5">
          <p className="text-base font-medium text-violet-400 m-0">{title}</p>
          <p className="text-xs text-gray-400 mt-0.5 mb-0">{subtitle}</p>
        </div>

        {description && (
          <p className="text-[15px] text-gray-300 leading-relaxed mb-3">
            {description}
          </p>
        )}

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <SkillCard
                key={tag}
                skill={tag}
                textSize="text-sm"
                textColor="text-violet-400"
                border="border border-violet-200"
              />
            ))}
          </div>
        )}

        {(links?.github || links?.live) && (
          <div className="flex gap-3 pt-3 border-t border-white/10">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-400 hover:text-violet-400 transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-400 hover:text-violet-400 transition-colors"
              >
                Live ↗
              </a>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;