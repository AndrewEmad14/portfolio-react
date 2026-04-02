import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const IconLink = ({icon,label,href,size}) => {
  return(
    <>
      <a className='
      group 
      flex 
      items-center 
      gap-2 
      p-4 
      text-white 
      hover:bg-gradient-to-r 
      hover:from-pink-500 
      hover:to-violet-500 
      hover:bg-clip-text 
      hover:text-transparent 
      transition-all 
      duration-300' href={href}>
      <FontAwesomeIcon className='group-hover:text-pink-500' icon={icon} {...(size && {size})}/>{label}
      </a>  
    </>
  )
}

export default IconLink