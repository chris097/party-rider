import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bannerVid from "../../public/images/partyVid.mp4";
import FormSuccessful from '../../components/Form/FormSuccessful';
import { Link } from 'react-router-dom';
import {IoArrowBackCircle} from "react-icons/io5"


const Form = () => {
    const [messageSucceful, setMessageSucceful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")
    const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
    setIsLoading(true)
      emailjs.sendForm(
          'service_njtm33w',
          'template_kprhxgk',
          form.current,
          'AwNHYReSSkev1SzVK'
      )
          .then((result) => {
            setMessage(result.text);
            setIsLoading(false)
            setMessageSucceful(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <div>
        <div className='banner-overlay' />
          {/* <img className="banner" src={bannerImg} alt="landing_page_image" />  */}
          <video width="100%" height="100%" className="object-cover" loop muted autoPlay>
              <source src={bannerVid} type="video/mp4" />
          </video>
        <div className="banner-container">
                <div className='banner-content'>
                    <Link to="/" className='fixed top-5 left-8'>
                        <IoArrowBackCircle className='text-4xl' />
                    </Link>
                     {messageSucceful && <FormSuccessful message={message} />}
                <div className="flex pt-8 md:pt-16 pb-20 -mt-3 flex-col items-center bg-secondaryColor text-white">

          <h1 className=' text-4xl mb-5 text-red-400'>Party Rider</h1>
          <h2 className='mb-1 text-sm md:text-md'>Party with us and have fun with friends around the globe.</h2>
          <p className='text-sm md:text-md'>quickly do not forget to fill the waitlist form.</p>
          <div className='bg-transparent w-full md:w-1/2 shadow-lg text-left h-auto border-t-2 border-red-400 rounded-md mt-5'>
              <form className='px-2 md:px-8 py-10' ref={form} onSubmit={sendEmail}>
              <div>
                  <label htmlFor='number' className='text-sm md:text-lg whitespace-nowrap'>Enter Phone Number</label>
                    <div>
                        <input required  name='user_phone' className='border-none rounded-md text-black bg-gray-100 h-12 w-full mt-2 focus:border-b-gray-100 outline-none px-3' type="number" />
                    </div>
              </div>
              <div className='mt-3'>
                  <label htmlFor='number'>Enter Email Address</label>
                    <div>
                        <input name="user_email" className='border-none rounded-md bg-gray-100 h-12 text-black w-full mt-2 focus:border-b-gray-100 outline-none px-3' type="email" />
                    </div>
              </div>
                 <button            
                    className='bg-red-400 h-12 w-full rounded-md mt-6 text-white'
                    type="submit">
                    {isLoading ? "Loading..." : "Join Waitlist"}
               </button> 
          </form>
          </div>
    </div>
            </div>  
        </div>
    </div>
      
  )
}

export default Form