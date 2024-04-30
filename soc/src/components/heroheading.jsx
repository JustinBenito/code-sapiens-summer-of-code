import React from 'react';

const Heading = () => {
  return (
    <div className='absolute flex inset-0 z-10 md:h-full flex-col p-4 border-[#e9f5ff2d]  md:border-2 justify-center items-center text-white  md:inset-0 backdrop-blur-md md:backdrop-blur-lg m'>
      {/* Apply the frosted background effect with rounded corners and padding using CSS */}

      <h1 className='md:text-5xl   text-2xl p-4 h-fit sm:h-[350px] flex items-center justify-center flex-col  md:mt-0 border-gray-200 text-center font-bold relative z-10 '>
      International Conference <br /> on Wireless Communications <br />
Signal Processing and Networking
<br />
<span className='text-sm sm:text-lg md:text-xl md:p-4 p-1 opacity-75'>
(Technically Co-Sponsored by the IEEE)
</span>

      <div className='md:rounded-xl rounded-md md:mt-4 mt-1  bg-gradient-to-r from-[#0d6efd] to-[#48b6ff] text-white px-4 text-sm  py-2 md:text-lg '>
      20-22 February 2025
      </div>
      </h1>

    </div>
  );
};

export default Heading;