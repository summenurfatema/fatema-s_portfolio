import React from "react";
import phone from '../assets/phone.png.png'
import post from '../assets/post.png'
import facebook from '../assets/fb.png'
import home from '../assets/home.png.png'

const Contact = () => {
  return (
    <div>
         <div data-aos="fade-down" className='flex space-x-16 justify-center items-center '>
                {/* <img src={intro} className='h-32 w-32' alt=' '/> */}
                <h1 className='text-2xl lg:text-4xl font-bold'>Contact With Us</h1>
            </div>
      
        <div  className='bg-[#141317] flex items-center justify-center lg:justify-evenly flex-col lg:flex-row lg:px-5'>

           {/* left */}
          <div data-aos="zoom-in-left" className="w-full  lg:w-2/4 relative">
     
          <div className="pl-7 md:pl-10 my-6">
      
        <div className="space-y-2 md:space-y-5 lg:space-y-7">
            {/*1 */}

           <div className="flex items-center space-x-2">
          {/* <FaPhone className='h-8 w-10 text-blue-700'/> */}
          <img src={phone} className='h-14 w-14 md:h-20 md:w-20' alt=' '/> 
          <div className="space-y-0">
<p className="text-sm font-bold md:tracking-wide   md:text-xl lg:text-2xl  text-white lg:tracking-wide   tracking-tight">Phone</p>
<p className=" text-sm font-bold md:tracking-wide  md:text-xl lg:text-2xl  text-white lg:tracking-wide after: tracking-tight">+8801314335168</p>
</div>
</div>
            {/*2 */}

            <div className="flex items-center space-x-4 md:space-x-6">
            {/* <FaEnvelopeOpen className='h-8 w-10 text-blue-700'/> */}
            <img src={post} className='h-14 w-14' alt=' '/> 
<div className="space-y-0">
<p className=" text-sm md:tracking-wide  md:text-xl  lg:text-2xl  text-white lg:tracking-wide font-bold tracking-tight">E-mail</p>
<p className="text-sm md:tracking-wide   md:text-xl lg:text-2xl  text-white lg:tracking-wide font-bold tracking-tight">summrnurfatema@gmail.com</p>
</div>
</div>
            {/*3*/}

            <div className="flex items-center space-x-2">
            {/* <FaL */}
            <img src={home} className='h-14 w-14 md:h-20 md:w-20' alt=' '/> 
<div className="space-y-0">

<p className=" text-sm md:tracking-wide md:text-xl lg:text-2xl  text-white lg:tracking-wide font-bold tracking-tight">Address</p>

<p className=" text-sm md:tracking-wide md:text-xl lg:text-2xl  text-white lg:tracking-wide font-bold tracking-tight">Hathazari,Chittagong.</p>
</div>
</div>
</div>
</div>
<div className="border-b-2 w-96 mb-3"></div>
<div className="flex space-x-4 md:space-x-8 items-center ml-16 md:ml-0 lg:ml-10">
<img src={facebook} className='h-14 w-14 md:h-20 md:w-20 animate-waving-hand' alt=' '/> 
<img src='https://cdn3d.iconscout.com/3d/free/thumb/github-5622954-4684832.png' className='h-14 w-14 md:h-20 md:w-20 animate-waving-hand' alt=' '/> 
<img src='https://cdn3d.iconscout.com/3d/free/thumb/linkedin-logo-5476201-4602452.png' className='h-14 w-14 md:h-20 md:w-20 animate-waving-hand' alt=' '/> 
</div>

</div>
      {/* Right */}
     
      <div data-aos="zoom-in-right" className="w-full  lg:w-2/4 px-3 my-5">
      <div className="border rounded-full py-0 md:mx-0 lg:mx-20">
        <form>
          <div className="flex flex-col items-center space-y-10 pb-14 pt-32 md:pt-28 md:pb-6 ">
            <input
              name="name"
              type="name"
              className=" text-xl border-b-2 py-3 text-white bg-[#141317]  w-4/5 focus-none focus:outline-none"
              placeholder="Full Name"
            />

            <input
              className=" text-xl border-b-2 py-3 text-white bg-[#141317]  w-4/5 focus-none focus:outline-none"
              name="email"
              type="email"
              placeholder="Email Address"
            />

            <textarea
              className=" text-xl border-b-2 py-3 text-white bg-[#141317]  w-4/5 focus-none focus:outline-none"
              name="messege"
              placeholder="Your Messege">
            </textarea>
          </div> 
         <div className="h-24 w-24 lg:h-40 lg:w-40 border  border-gray-500 hover:pl-2  hover:pt-2 rounded-full">
         <div className="h-20 w-20 lg:h-36 lg:w-36  rounded-full hover:scale-110  bg-[#245CC1] flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold uppercase">Send</h1>
         </div>
         </div>
        </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
