import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import IconLink from './common/icon-link'
import Button from './common/button'
const links = [
  { "icon": faGithub, "label": "", "href": "https://github.com/AndrewEmad14" ,"size":"2xl"},
  { "icon": faLinkedin, "label": "", "href": "https://www.linkedin.com/in/andrew-emad14/","size":"2xl" },
  { "icon": faTwitter, "label": "", "href": "https://twitter.com","size":"2xl" },
  ,
]
 const ContactUs=()=>{
  const contactInfoLIst = links.map(link =>
    <IconLink key={link.href} {...link} />
  )
  return (
    <section id="Contact" className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 text-white">
      <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3 font-medium">
        Say Hello
      </p>
      <h1 className="text-8xl mb-10 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        Contact me
      </h1>

      {/* Subtitle */}
      <p className="text-white text-lg mb-10">
        I'd love to keep in touch.
      </p>

      {/*  Button */}
      <div className='mb-10'>
              <Button href="#mailto:you@email.com">Send a message</Button>

      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-15 w-full max-w-xs">
        <div className="flex-1 h-px bg-stone-200" />
        <span className="text-white text-xs tracking-widest uppercase">or find me on</span>
        <div className="flex-1 h-px bg-stone-200" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        {contactInfoLIst}
      </div>
    </section>
  );
}

export default ContactUs