import Section from "../About/section/Section";
import Card from "./Card/Card";
import {motion} from "framer-motion"
import { slideIn ,navVariants} from "../../../utils/motion";
 const  Project =()=> {
    return (<div id="Project" className="bg-slate-900 relative overflow-hidden">
      <motion.div variants={navVariants} initial="hidden" whileInView="show" className="absu inset-0 w-[500px]  gradient-03 "/>
    <Section title="Project">
      
      

        
        <Card/>
        <motion.a variants={navVariants} initial="hidden" whileInView="show" href="https://github.com/DevTaissirHammouda?tab=repositories" target="_blank" className="">
    <button className="bg-[#3559E0] rounded-md text-white p-[5px] my-28">See More</button>
</motion.a>
       
</Section>
        </div>

    
    )
  }
  export default Project