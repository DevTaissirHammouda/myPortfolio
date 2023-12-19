
import Section from '../section/Section'
import {motion} from "framer-motion"
import {zoomIn,navVariants} from "../../../../utils/motion";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || !form.current['from_name'] || !form.current['from_email'] || !form.current['message']) {
      toast.error('Form structure is incorrect. Please check your code.');
      return;
    }

    const nameInput = form.current['from_name'];
    const emailInput = form.current['from_email'];
    const messageInput = form.current['message'];

    if (!nameInput || !emailInput || !messageInput || !nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      // Update the condition for the email
      if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        toast.error('Invalid email address. Please provide a valid email.');
        return;
      }

      const emailData = {
        from_name: nameInput.value.trim(),
        from_email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

      // Use emailjs.send to send the email
      await emailjs.send('service_637rszf', 'template_89ewlih', emailData, '3KpYiCNl0ARsQalbA');

      // Clear form inputs on success
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';

      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error sending message. Please try again.');
    }
  };
  
    return (   <div id="contact" className="bg-slate-900 relative overflow-hidden z-[0]">
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="absolute w-[300px] inset-0 md:ml-[400px] gradient-04 z-[-2]"
    />

    <Section title="Contact">
      <motion.div variants={zoomIn(0.5, 1)} initial="hidden" whileInView="show" className="mx-5 md:mx-0 z-9">
        <div className="mx-auto max-w-2xl text-center ">
          <p className="mt-10 text-[25px] leading-8 text-purple-800">I'm Available Contact Me</p>
        </div>
        <form ref={form} className="mx-auto mt-16 max-w-xl sm:mt-20 ">
          <motion.div
            variants={zoomIn(0.5, 1)}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left text-white"
          >
        <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6">
              Name
            </label>
            <div className="mt-2.5">
              <input 
                type="text"
                name="from_name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6">
              Email
            </label>
            <div className="mt-2.5">
              <input 
                type="email"
                name="from_email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
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
                defaultValue={''} required
              />
            </div>
          </div>
          
        </motion.div>
        <div className="mt-10">
          <button  onClick={sendEmail}
            type="submit"
            className="block w-full rounded-md mb-[300px] bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            send
          </button>
        </div>
      </form></motion.div>
     </Section> 
     <ToastContainer className="mt-[100px]" />
     </div>
     
  



    
    )
  }
  export default Contact