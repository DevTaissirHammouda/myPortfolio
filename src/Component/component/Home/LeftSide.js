import Type from "./Type";
import "../../../assets/css/globals.css"; 
const LeftSide = () => {
    return(
        
        <div   className=" text-left flex justify-center items-center ">
            <div className="absolute w-[300px] inset-0 gradient-02 overflow-hidden "/>
           <div className="z-[10]">
            <h1 className="  text-white text-[30px] uppercase antialiased	 italic lg:text-[30px] md:text-[25px] text-[15px]">Hello, I'm </h1>
        <div className="text-green-500 uppercase antialiased font-bold	lg:w-[600px] md:w-[400px] w-[300px]  italic lg:text-[40px] md:text-[30px] text-[20px]">
      <Type />
    </div>

       

<div>As an aspiring web developer, I am deeply
passionate about utilizing my expertise in
web development to deliver innovative
solutions that solve real-world problems.
My goal is to leverage my technical skills
and commitment to staying current with
emerging technologies and trends to
contribute to the success of projects and
organizations. I aspire to collaborate with
cross-functional teams, continuously
improve my programming abilities.
</div>
<a href="#" className="">
    <button className="bg-slate-500 rounded-md p-[3px]">Contact Me</button>
</a>
</div>
</div>
         


)
}
export default LeftSide;