import Type from "./Type";
import "../../../assets/css/globals.css"; 
import {motion} from "framer-motion"
import {textVariant2 ,navVariants,fadeIn} from "../../../utils/motion";
const LeftSide = () => {
    return(
        
        <div className=" lg:ml-[150px] text-center md:text-left flex justify-center items-center overflow-hidden ">
            <motion.div variants={navVariants}  initial="hidden"
        whileInView="show" className="absolute w-[300px] ml-[150px] inset-0 gradient-02  "/>
           <motion.div  initial="hidden"
         whileInView="show"
        variants={fadeIn('right', 'tween', 0.5, 1)} className="ml-0 mb-[150px] md:my-[300px] md:ml-[150px]">
            <motion.h1   className="  text-white  uppercase antialiased	italic lg:text-[30px] md:text-[25px] text-[15px]">Hello, I'm </motion.h1>
        <div className="text-green-500 uppercase antialiased font-bold	lg:w-[600px] md:w-[400px] w-[300px]  italic lg:text-[40px] md:text-[30px] text-[20px]">
      <Type />
    </div>

       

<motion.div variants={textVariant2} initial="hidden" whileInView="show" className="my-[20px] text-white">You only live once, but if you do it right, once is enough
</motion.div>
<a target="_blank" href="https://drive.google.com/file/d/1yz2xFWR09FmlnMv1D-9-ePASUGIWmE0w/view?usp=drive_link" className="">
    <button className="bg-green-500 text-white rounded-md p-[3px]">Resumer</button>
</a>
</motion.div>
</div>
         


)
}
export default LeftSide;