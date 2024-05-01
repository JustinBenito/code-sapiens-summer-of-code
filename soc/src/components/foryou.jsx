import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Meteors } from "./meteors";
import gift from '../assets/gift.png';
import intern from '../assets/intern.png'
import certi from '../assets/certi.png'
import HoverCard from "@darenft/react-3d-hover-card";

import "@darenft/react-3d-hover-card/dist/style.css";

const What = () => {
  const data = [
    {
      "title": "Easy Internships",
      "desc": "Based on performance, get paid Internship opportunities in companies",
      "img": intern
    },
    {
      "title": "Free Goodies",
      "desc": "Free T shirts, badges, stickers and more swags!!",
      "img": gift
    },
    
    {
      "title": "Get Valid Certificates",
      "desc": "Based on performance, get paid Internship opportunities in companies",
      "img": certi
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Change threshold as needed
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <div ref={ref}>
      <div className='mb-32 max-w-6xl mx-auto text-center flex items-center justify-center flex-col p-4 mt-32'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 font-bold text-6xl'>What's in for you?</h1>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`max-w-5xl mx-auto px-8 `}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
               <HoverCard scaleFactor={1.2}>
              <div className="mt-16">
                <div className="w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl border bg-zinc-900 border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>
                    <h1 className="font-bold text-left text-3xl text-white mb-4 relative z-50">
                      {item.title}
                    </h1>
                    <p className="font-normal text-md text-left text-orange-200 mb-4 relative z-50">
                      {item.desc}
                    </p>
                    <img src={item.img} alt={item.title} className="w-128" />
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
              </HoverCard >
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default What;
