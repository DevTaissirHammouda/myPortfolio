
import fb from "../../../assets/icons/facebook.png"
import lk from "../../../assets/icons/linkedin.png"
import git from "../../../assets/icons/github.png"
export default function Footer() {
    return (
      <div className="bg-slate-900 py-24 sm:py-32 border-3 border-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            You can find me here
          </h2>
          <div className=" mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
       
             <a href="https://www.facebook.com/taissir.hammouda.7"> <img className="w-[100px]" src={fb} /> </a>
             <a href="https://github.com/DevTaissirHammouda"> <img className="w-[100px]" src={git} /> </a>
             <a href="https://www.linkedin.com/in/hammouda-taissir-1029a2201/"><img className="w-[100px]" src={lk} /> </a>
              <div className="text-white mb-28 md:mb-0">taissir7ammouda@gmail.com</div>
              <div className="text-white">+21692975377</div>
          </div>
        </div>
      </div>
    )
  }
  