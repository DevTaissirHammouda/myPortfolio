
import Section from '../section/Section'
  
 const  Contact =()=> {
   
    return (<div id="contact" className="bg-slate-900 relative overflow-hidden  z-[0]">
        <div className="absolute w-[300px] inset-0 md:ml-[400px]  gradient-04 z-[-2]"/>
       

<Section title="Contact" >


<div className="z-9">
      <div className="mx-auto max-w-2xl text-center ">
        <p className="mt-10 text-[25px] leading-8 text-purple-800">
          I'm Available Contact Me
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left  text-white">
         
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md mb-[300px] bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form></div>
     </Section> 
     </div>
     
  



    
    )
  }
  export default Contact