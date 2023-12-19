import Type from "./Type";
import "../../../assets/css/globals.css"; 
import {motion} from "framer-motion"
import {textVariant2 ,navVariants,fadeIn} from "../../../utils/motion";
const LeftSide = () => {
    return(
        
        <div className=" lg:ml-[100px] text-left  flex justify-center items-center overflow-hidden ">
            <motion.div variants={navVariants}  initial="hidden"
        whileInView="show" className="absolute w-[300px] ml-[100px] inset-0 gradient-02  "/>
           <motion.div  initial="hidden"
         whileInView="show"
        variants={fadeIn('right', 'tween', 0.5, 1)} className="overflow-hidden mx-5  mb-[150px] md:my-[300px] md:ml-[50px]">
            <motion.h1   className="  text-white  uppercase antialiased	italic lg:text-[30px] md:text-[25px] text-[15px]">Hello, I'm </motion.h1>
        <div className="text-[#3559E0] uppercase antialiased font-bold	lg:w-[600px] md:w-[400px]  italic lg:text-[25px] md:text-[20px] text-[20px] ">
      <Type className="" />
    </div>

       

<motion.div variants={textVariant2} initial="hidden" whileInView="show" className="my-[20px] w-[80%]   text-white">You only live once, but if you do it right, once is enough
</motion.div>
<a target="_blank" href="https://drive.google.com/file/d/1yz2xFWR09FmlnMv1D-9-ePASUGIWmE0w/view?usp=drive_link" className="">
    <button  className="bg-[#3559E0] text-white rounded-md p-[3px]">Resume</button>
</a>
</motion.div>
</div>
         


)
}
export default LeftSide;