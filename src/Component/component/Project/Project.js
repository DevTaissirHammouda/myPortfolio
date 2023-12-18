import Section from "../About/section/Section";
import Card from "./Card/Card";
  
 const  Project =()=> {
    return (<div id="Project" className="bg-slate-900 relative">
      <div className="absu inset-0 w-[500px]  gradient-03 "/>
    <Section title="Project">
      
      

        
        <Card/>
        <a href="https://github.com/DevTaissirHammouda?tab=repositories" target="_blank" className="">
    <button className="bg-green-500 rounded-md text-white p-[5px] my-28">See More</button>
</a>
       
</Section>
        </div>

    
    )
  }
  export default Project