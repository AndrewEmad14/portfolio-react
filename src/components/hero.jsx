import Button from "./common/button"
const Hero = () => {
  return (
    <div className="h-svh flex flex-col items-center justify-center h-screen bg-gray-950 text-white text-left">
      <div className="text-left">
        <h2 className="text-8xl font-bold ">
          Hi, my name is <span className="text-8xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Andrew</span>
        </h2>
        <h2 className="text-8xl font-bold" >
          I am a Software Engineer
        </h2>
      </div>
      <span className="mt-12"> <Button href="/Andrew_Emad.pdf" download>Download resume</Button></span>
    </div>
  
  )
}
export default Hero