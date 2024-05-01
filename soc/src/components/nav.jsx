import React, { useState } from 'react';
import logo from '../assets/codesapiens.png'
import cs from '../assets/latestlogo.png'
import Hero from '../components/hero'

// import Scope from '../components/scope'
// import Speakers from '../components/speakers'
// import Sponsors from '../components/sponsors'
// import Footer from '../components/footer'
// import About from './about';
// import Committe from './committe';
// import Schedule from './timeline';
// import CFP from './cfp';
// import Contact from './contact';
const Nav = () => {

   

  const [isModalOpen, setIsModalOpen] = useState(false);

    const [visible, setVisible]=useState('home')


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSchedule = () => {
    window.open("https://drive.google.com/file/d/1-GbMdBgcVwIVPU-dUqHPI7nZLZuhpOzl/view?usp=sharing", '_blank')
  }

  const onRegister = () => {
    window.open("https://www.wispnet2024.org/home.html", '_blank')
  }


  return (
    <div className='border-b-2 border-gray-400 border-opacity-80 flex flex-col mx-auto justify-center w-full h-full border-dashed m-0 p-0'>
      <nav className="bg-black w-full dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row  items-center justify-between ">
        <a href="https://www.ssn.edu.in/" className="flex gap-1 items-center">
  <img
    src={logo}
    className="md:w-12 w-8 filter invert"
    alt="Code Sapiens logo"
  />
  <h1 className="text-white text-2xl font-tech font-medium">
    <span className="text-white">Code Sapiens</span>
  </h1>
</a>

          <div className="flex-col flex text-center ">
            
               <nav className=" text-white">
    <div className="max-w-screen-xl px-4 py-4 mx-auto text-[8px]">
        <ul className="flex flex-row justify-between items-center w-full font-normal text-[8px] ">
            <li className=' text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('home')}} href="#" className={`text-white ${visible=='home' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Home</a>
            </li>
        
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('about')}} href="#" className={`text-white ${visible=='about' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>About</a>
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('timeline')}} href="#"  className={`text-white ${visible=='timeline' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Timeline</a>
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                {/* <a onClick={()=>{setVisible('project')}} href="#" className={` text-white ${visible=='project' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Projects</a> */}
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                {/* <a onClick={()=>{setVisible('sponsors')}} href="#" className={` text-white ${visible=='sponsors' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Sponsors</a> */}
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('partners')}} href="#" className={` text-white dark:text-white ${visible=='partners' ? 'gradient-text' : 'text-white'} hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Partners</a>
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                {/* <a onClick={()=>{setVisible('team')}} href="#" className={` text-white ${visible=='team' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Team</a> */}
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('contact')}} href="#" className={` text-white ${visible=='contact' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Contact</a>
            </li>
            <li className='ml-4 text-[6px] md:text-[18px]  text-center'>
                <a onClick={()=>{setVisible('register')}} href="#" className={` text-white ${visible=='register' ? 'gradient-text' : 'text-white'} dark:text-white hover:text-[#ff6600] font-medium capitalize transition ease-in-out`}>Register</a>
            </li>
        </ul>
    </div>
</nav>
        </div>  
        </div>
      </nav>

 

    

    {/* { visible=='home' && <>
    <Hero />
    <Scope />
     <Speakers />
     <Sponsors />
     </> }

     { visible=='about' && <>
    <About />
     </> }

     { visible=='committee' && <>
    <Committe />
     </> }

     { visible=='timeline' && <>
    <Schedule />
     </> }

     { visible=='cfp' && <>
    <CFP />
     </> }

     { visible=='contact' && <>
    <Contact />
     </> }

     
     
     <Footer /> */}
    </div>
  );
};

export default  Nav;