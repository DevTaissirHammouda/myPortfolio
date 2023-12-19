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
<a target="_blank" href="https://doc-0c-3k-prod-02-apps-viewer.googleusercontent.com/viewer2/prod-02/pdf/pcsnpv56sm5k1t0pl6s313ns6f3223s5/nivq5rhooe6g618fpbo0fc92ficf3iat/1702948500000/3/102421982049263480705/APznzaZ5ojMRRRDI-UyPWXJI-_a4jCwmZtm95x1pvKvwi8An1Txu9n-C8i-thUD8YlfmPrq060JN13nwZY3n_SpdHMAhVDMlJaBdY_VrJ1PR_c4dZjFVFKEYM06a-Nxl9IvzGa39fHkrK56YFSLJSSBNf9LpwHGUgvW-wLlIQFN46Z0D7cR8yDrsuM9b-KBXZEwr2sK2zeliwj0SyLkl-YMNW7mddN6u83omiXb1agc1ZOgUiBb-1X-oEPPlUxQhvebdx5WLVfW-gtH8_LzKmX0z3Nf5BV8WVSmdhMkLngPAZn4kffUUgCURFcmSIkgcVTSLaLspr-5RHcbamq9BB3suKNEY722_fl1Nj_gj0ur7iKMKy86sTWx6IB09R0uztgvxtPTRoJHjnx9OUrx0jLwolpJ0_KDrW_0Jx1nrVmV0cw8BAU1CAz4=?authuser=0&nonce=kfo41r4635fcm&user=102421982049263480705&hash=g8ra38bko1o61uj2odiphjv9qvv3bs5m" className="">
    <button className="bg-green-500 text-white rounded-md p-[3px]">Resumer</button>
</a>
</motion.div>
</div>
         


)
}
export default LeftSide;