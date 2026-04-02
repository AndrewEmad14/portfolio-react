const About = () => {
  return (
    <div id="About" className="h-svh flex flex-row items-left justify-left p-12 bg-gray-950 text-white text-left ">
      <div className="text-left">
        <span className="text-8xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold">
          About
        </span>
        <p className="text-lg text-slate-300 leading-relaxed text-justify mt-4 p-20">
          Software Engineer with a strong foundation in iOS development and full-stack web development. I've built and shipped real-world applications ranging from multiplayer card games and e-commerce platforms to sports trackers spanning Swift, Angular, Node.js, Django, and Python.
          Currently expanding my expertise through ITI's Open Source track, diving deep into Linux system administration, Docker, Nginx, and modern web frameworks. I'm passionate about clean architecture, design patterns, and writing scalable, maintainable code.
          I hold an ISTQB Foundation Level certification and an Apple Swift Certified User credential, and I'm always looking to grow through challenging projects and collaborative teams.
        </p>

      </div>
              <img src="/pfp.jpg" className="rounded-full  w-100 h-100 object-cover" />

    </div>
  )
}
export default About;