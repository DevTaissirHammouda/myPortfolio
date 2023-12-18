import Type from "./Type";
import "../../../assets/css/globals.css"; 
const LeftSide = () => {
    return(
        
        <div   className=" lg:ml-[150px] text-center md:text-left flex justify-center items-center ">
            <div className="absolute w-[300px] ml-[150px] inset-0 gradient-02  "/>
           <div className="ml-0 mb-[150px] md:my-[300px] md:ml-[150px]">
            <h1 className="  text-white  uppercase antialiased	italic lg:text-[30px] md:text-[25px] text-[15px]">Hello, I'm </h1>
        <div className="text-green-500 uppercase antialiased font-bold	lg:w-[600px] md:w-[400px] w-[300px]  italic lg:text-[40px] md:text-[30px] text-[20px]">
      <Type />
    </div>

       

<div className="my-[20px] text-white">You only live once, but if you do it right, once is enough
</div>
<a href="#" className="">
    <button className="bg-green-500 text-white rounded-md p-[3px]">Contact Me</button>
</a>
</div>
</div>
         


)
}
export default LeftSide;