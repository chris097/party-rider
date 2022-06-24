import React from 'react';
// import bannerImg from "../../public/images/party1.jpg";
import bannerVid from "../../public/images/partyVid.mp4";
import { ImTwitter} from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { SiHackclub } from "react-icons/si";
import "../../App.css"

const Home = () => {
    
  return (
      <div>
        <div className='banner-overlay' />
          {/* <img className="banner" src={bannerImg} alt="landing_page_image" />  */}
          <video width="100%" height="100%" className="banner" loop muted autoPlay>
              <source src={bannerVid} type="video/mp4" />
          </video>
        <div className="banner-container">
              <div className='banner-content'>
                  {/* <div className='fixed top-5 left-8'>logo</div> */}
                  <div className='fixed top-5 right-8 cursor-pointer'>
                      <FiMenu className='text-3xl' />
                  </div>
                <div>
                    <h1 className="text-2xl md:text-5xl">Welcome To</h1>
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl my-3">Party Rider Club</h1>
                    <h3 className="md:text-xl text-xs">Find private parties happening near you fast</h3>
                </div>
                  <div className='bg-primaryColor w-52 md:w-2/5 px-2 my-6 rounded-full h-14 m-auto flex items-center justify-center text-xl md:text-2xl'>
                      <span className='text-xl md:text-3xl mr-2'>340,200</span>
                      Members
                  </div>
                  <div className="border rounded-full h-10 md:h-16 flex mt-8">
                      <input className="w-full bg-transparent px-5 outline-none focus:border-white placeholder:text-white" type="text" placeholder='Enter email address' />
                      <button className="w-40 border-l text-white rounded-tr-full rounded-br-full md:text-lg text-sm hover:bg-slate-400 bg-red-400 px-4 whitespace-nowrap">Join WaitList</button>
                  </div>
                  <div className='mt-12 mb-6'>Visit Our Social Media</div>
                  <div className='flex justify-center space-x-10'>
                      <a href='https://twitter.com/partyriderapp'>
                          <ImTwitter className='text-3xl cursor-pointer' />
                      </a>
                      <a href='https://chat.whatsapp.com/G4o3NX4gcjD860lafiLcaz'>
                          <IoLogoWhatsapp className='text-3xl cursor-pointer' />
                      </a>
                      <a href='https://www.instagram.com/partyriderapp/'>
                          <AiFillInstagram className='text-3xl cursor-pointer' />
                      </a>
                      <a href='https://www.clubhouse.com/club/partyrider?utm_medium=ch_club&utm_campaign=FnmhCX5PzhF8bu3jE0Hc2g-245513'>
                          <SiHackclub className='text-3xl cursor-pointer' />
                      </a>
                  </div>
            </div>  
        </div>
    </div>
  )
}

export default Home