
import fb from "../../../assets/icons/facebook.png"
import lk from "../../../assets/icons/linkedin.png"
import git from "../../../assets/icons/github.png"
export default function Footer() {
    return (
      <div className="bg-slate-900 py-24 sm:py-32 border-3 flex items-center justify-center relative border-gray-50 overflow-hidden">
        <div className=" mx-10 md:mx-0">
          <h2 className="text-center text-lg font-semibold leading-8 text-slate-400">
            You can find me here
          </h2>
          <div className="  mt-10 grid grid-cols-3   ">
       
             <a href="https://www.facebook.com/taissir.hammouda.7"> <img className="w-[100px]" src={fb} /> </a>
             <a href="https://github.com/DevTaissirHammouda"> <img className="w-[100px]" src={git} /> </a>
             <a href="https://www.linkedin.com/in/hammouda-taissir-1029a2201/"><img className="w-[100px]" src={lk} /> </a>
              
             
          </div>
          <div className="text-center text-slate-400 mt-10  ">taissir7ammouda@gmail.com</div>
           <div className="absolute  bottom-5 right-5 text-slate-400 ">+21692975377</div>
        </div>
      </div>
    )
  }
  