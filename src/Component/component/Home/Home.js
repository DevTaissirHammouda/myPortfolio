import { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import bgImg from "../../../assets/img/herobg.png" 
import {motion} from "framer-motion"
import { slideIn } from "../../../utils/motion";
const Home = () => {
    const [isSmall,setIsSmall] =useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
          setIsSmall(window.innerWidth < 768);
        };
    
        checkScreenSize();
    
        window.addEventListener('resize', checkScreenSize);
    
        return () => {
          window.removeEventListener('resize', checkScreenSize);
        };
      }, []);
    return(<div 
       id="#" className="lg:w-100%  md:w-50%  w-25% h-full " style={{ backgroundImage: `url(${bgImg})` }}
    >
      {isSmall?<div  className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 relative " >
    <RightSide/><LeftSide/></div>
    :  
    <div  className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  relative " >
 <LeftSide/>
        <RightSide/></div>
    }


        </div>
)
}
export default Home;