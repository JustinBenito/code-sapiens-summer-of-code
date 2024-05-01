import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import waves from 'vanta/src/vanta.waves';

import Heading from './components/heroheading'
import Hero from './components/hero'
import About from './components/about';
import Community from './components/community';
import { Meteors } from './components/meteors';
import What from './components/foryou';
import Schedule from './components/timeline';
import Footer from './components/footer';
import Contact from './components/contact';


function App() {

  useEffect(() => {
    waves({
      el: "#bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x883700,
      backgroundColor: 0x6ebb,
      points: 20.00,
      minHeight: 600.00,
      maxDistance: 20.00
    });
  }, []);

  return (
    <div >
    <Nav />
    <Hero />
    <About />
    <Community />
    <What />
    <Schedule />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
