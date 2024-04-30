
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import React from 'react'
import Heading from './heroheading.jsx';

const Hero = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider_height = window.screen.height-200
    console.log(`h-[300px] lg:h-[350px] md:h-[350px] sm:h-[350px] xl:h-[700px] relative z-0`)

return (
<div className='relative flex flex-col justify-center items-center '>
{/* 1st Component */}

    <Heading />

{/* 2nd Component */}
<AutoplaySlider 
organicArrows={false}
play={true}
mobileTouch={true}
cancelOnInteraction={false} // should stop playing on user interaction
interval={2000}
bullets={false}
animation="cubeAnimation" 

className={`h-[300px] lg:h-[350px] md:h-[350px] sm:h-[350px] xl:h-[700px] relative z-0`} >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
  </AutoplaySlider>
 </div>
  )
}

export default Hero
