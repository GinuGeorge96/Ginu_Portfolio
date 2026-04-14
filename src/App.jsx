import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import StarBackground from './components/StarBackground'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import SkillsGalaxy   from './components/SkillsGalaxy'
import Experience     from './components/Experience'
import Projects       from './components/Projects'
import Education      from './components/Education'
import Hobbies        from './components/Hobbies'
import Contact        from './components/Contact'
import CursorComet   from './components/CursorComet'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: 'ease-out-cubic', offset: 60 })
  }, [])

  return (
    <>
      <CursorComet />
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsGalaxy />
        <Experience />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>
    </>
  )
}
