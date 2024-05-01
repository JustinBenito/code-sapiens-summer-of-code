import React, { useEffect } from "react";

export const Meteors = ({
  number,
  className,
}) => {
  const meteors = new Array(number || 20).fill(true);

  // Define keyframes for the meteor animation
  const meteorKeyframes = `
    @keyframes meteor {
      0% { transform: rotate(215deg) translateX(0); opacity: 1; }
      70% { opacity: 1; }
      100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
    }
  `;

  // Dynamically create a style tag to include keyframes
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = meteorKeyframes;
    document.head.appendChild(styleTag);
    
    // Cleanup function
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Empty dependency array indicates this effect runs only once

  return (
    <>
      {meteors.map((el, idx) => {
        const leftPosition = Math.floor(Math.random() * (400 - -400) + -400);
        const size = 1 + 'px';
        const animationDuration = Math.floor(Math.random() * (10 - 2) + 2) + 's';

        const meteorStyle = {
          position: 'absolute',
          top: 0,
          width: size,
          height: size,
          left: `calc(-50% + ${leftPosition}px)`,
          borderRadius: '9999px',
          backgroundColor: '#ff6600',
          boxShadow: '0 0 0 1px #FF7C3A10',
          animation: 'meteor linear infinite',
          animationDuration: animationDuration,
        };

        return (
          <span
            key={"meteor" + idx}
            className={
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#ff9d57] before:to-transparent" +
              (className ? " " + className : "")
            }
            style={meteorStyle}
          ></span>
        );
      })}
    </>
  );
};
