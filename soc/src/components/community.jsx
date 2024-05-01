import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

import Namma from "../assets/nammaflutter.jpg"
import Rec from "../assets/rec.jpeg"
import Sairam from "../assets/sairam.webp"
import Sjet from "../assets/sjet.jpeg"
import trio from "../assets/trio.jpeg"


import React, {useState} from 'react'

const Community = () => {

    const [marq, setMarq]=useState([Namma, Rec,Sairam,Sjet,trio])

  return (
    <div>
        <h1 className="mt-32 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 text-center  font-bold text-5xl">Community Partners</h1>
        <div className="mt-32 h-64">
<Marquee velocity={30} minScale={1.5} scatterRandomly={true} resetAfterTries={300}>
    {marq.map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={"clockwise"}
        velocity={10}
        radius={50}
        className="h-64"
      >
        <div className="h-32 w-32">
        <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
        <img data-tooltip-target="tooltip-default" src={id} width={200} height={200} className="hover:scale-125 transition-all ease-in-out rounded-lg"/>
        </div>
      </Motion>
    ))}
  </Marquee>
  </div>
          <div className="mb-32"></div>
    </div>
    
  )
}

export default Community