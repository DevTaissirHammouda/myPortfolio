import Type from "./Type";
import taissir from "../../../assets/img/taissir.jpg"
import "./rightSide.css"

const RightSide = () => {
    return(
        <div className="lg:mr-[150px] flex justify-center items-center my-[100px] ml-0 md:ml-[150px] ">
<div  className="shape lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] w-[200px] flex justify-center items-center " >
    
<img className=" lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-full z-[10]" src={taissir} alt="ttt" />

</div></div>)
}
export default RightSide;