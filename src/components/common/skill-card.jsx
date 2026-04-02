import { text } from "@fortawesome/fontawesome-svg-core";

const SkillCard = ({skill,bgColor,textColor="white",textSize="text-xl",border}) => {
  return (
    
      <span className={`
      ${textSize} font-semibold tracking-wide ${textColor}
      ${bgColor}
      ${border}
      rounded-full px-4 py-1
      hover:scale-105
      transition-all duration-200 cursor-default
      inline-flex items-center gap-2
`}>{skill}</span>
    
  )
}
export default SkillCard;