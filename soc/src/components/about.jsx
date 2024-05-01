import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal";
 

const About = () => {
  return (
    <div className='max-w-6xl mt-32 w-full mx-auto text-center flex items-center justify-center flex-col p-4 '>
  <TextRevealCard
    text=" Summer of Code bridges passionate individuals with open-source communities. Students gain invaluable real-world experience, companies discover emerging talent, and extended project timelines foster a journey of learning and collaboration that goes beyond traditional hackathons Summer of Code bridges passionate individuals with open-source communities. Students gain invaluable real-world experience, companies discover emerging talent, and extended project timelines foster a journey of learning and collaboration that goes beyond traditional hackathons "
          className="text-lg w-full text-center "
  >
    <TextRevealCardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-center  font-bold text-5xl">
      What is CSSOC ? 
    </TextRevealCardTitle>
    <TextRevealCardDescription className="text-center hidden md:block">
    </TextRevealCardDescription>
  </TextRevealCard>
</div>

  )
}

export default About