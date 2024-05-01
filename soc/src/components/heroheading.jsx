import React from 'react';
import cs from '../assets/latestlogo.png'
import bg from '../assets/background.svg'
import '../index.css'
import HoverCard from "@darenft/react-3d-hover-card";

import "@darenft/react-3d-hover-card/dist/style.css";

import { motion,AnimatePresence } from 'framer-motion';


const Heading = () => {
  return (
    <div className='absolute flex inset-0 z-10 md:h-full flex-col p-4 justify-center items-center text-white  md:inset-0 backdrop-blur-md md:backdrop-blur-lg m'>
      {/* Apply the frosted background effect with rounded corners and padding using CSS */}

      {/* <h1 className='md:text-5xl   text-2xl p-4 h-fit sm:h-[350px] flex items-center justify-center flex-col  md:mt-0 border-gray-200 text-center font-bold relative z-10 '>
      International Conference <br /> on Wireless Communications <br />
Signal Processing and Networking
<br />
<span className='text-sm sm:text-lg md:text-xl md:p-4 p-1 opacity-75'>
(Technically Co-Sponsored by the IEEE)
</span>

      <div className='md:rounded-xl rounded-md md:mt-4 mt-1  bg-gradient-to-r from-[#0d6efd] to-[#48b6ff] text-white px-4 text-sm  py-2 md:text-lg '>
      20-22 February 2025
      </div>
      </h1> */}

<section class="">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Most <br /><span className='gradient-text-1'>Beginner Friendly </span> <br /> Open Source Event</h1>
            <p class="max-w-2xl mb-6  text-white opacity-75 font-medium lg:mb-8 md:text-lg lg:text-xl ">From being clueless to becoming timeless <br /> Become busy with open source</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Register
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="text-white inline-flex items-center transition-colors ease-in-out justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 hover:text-black">
                Know More
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
    <motion.div
        initial={{ x: -10, y: -5, rotate: 3, scale: 0.95 }} // Initial position and style
        animate={{ x: 10, y: 5, rotate: -3, scale: 1 }} // Animation style
        transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: 'reverse', // Reverse the animation on each repeat
            duration: 5, // Duration of each animation cycle
            ease: 'linear' // Linear easing for constant motion
        }}
    >
      <HoverCard scaleFactor={1.4}>
        <img src={bg} alt="mockup" className=''/>
        </HoverCard>
    </motion.div>
</div>


            
    </div>
</section>

    </div>
  );
};

export default Heading;