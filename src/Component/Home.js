import { useEffect, useState } from "react";
import LeftSide from "./component/Home/LeftSide";
import RightSide from "./component/Home/RightSide";

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
    return(<div>
{isSmall?<div  className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-slate-800 relative " >
    <RightSide/><LeftSide/></div>
    :  
    <div  className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-slate-800 relative " >
 <LeftSide/>
        <RightSide/></div>
    }
        </div>
)
}
export default Home;