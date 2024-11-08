import { useRef } from 'react';
import Topbar from './Topbar'
import HOME from './HOME'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <div className='overf;ow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
        rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <Topbar onNavigate={handleScroll} />
        <section ref={homeRef}><HOME /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={contactRef}><Contact /></section>
      </div>
    </div>
  )
}

export default App