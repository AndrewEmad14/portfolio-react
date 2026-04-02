import { faHouse, faUserAstronaut, faCode, faBriefcase, faRocket, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import IconLink from "./common/icon-link"
const links = [
  { "icon": faHouse, "label": "Home", "href": "#" },
  { "icon": faUserAstronaut, "label": "About", "href": "#About" },
  { "icon": faCode, "label": "Skills", "href": "#Skills" },
  { "icon": faBriefcase, "label": "Experience", "href": "#Experience" },
  { "icon": faRocket, "label": "Projects", "href": "#Projects" },
  { "icon": faEnvelope, "label": "Contact", "href": "#Contact" },
]

const NavBar = () => {

  const navbuttonList = links.map(link =>
    <IconLink key={link.href} icon={link.icon} label={link.label} href={link.href} />
  )
  return (
    <>
      <nav className="flex justify-center gap-10 bg-slate-900 text-white ">
        {navbuttonList}
      </nav>
    </>
  )

}

export default NavBar