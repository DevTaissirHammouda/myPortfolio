import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
 
    <Typewriter className=""
      options={{
        strings: [
       "Taissir Hammouda" , "  Software Developer"," Full Stack Developer",
          
          
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;