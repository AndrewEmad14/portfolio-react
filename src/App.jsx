import { useState } from 'react'

import './App.css'
import NavBar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import ContactUs from './components/contact'
import Skills from './components/skills'
import Experience from './components/experience'
import Project from './components/project'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
      <Project/>
      <ContactUs/>
    </>
  )
}

export default App
