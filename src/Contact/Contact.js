import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#141317] flex  mt-32 relative px-10">
      {/* left */}
      <div className="w-1/2">
        <p>contact me</p>

        <div className="space-y-16">
            {/*1 */}

<div className="flex items-center space-x-4">
<div className="h-20 w-20 bg-yellow-300"></div>
<div className="space-y-2">
<p className="text-white text-4xl font-semibold tracking-widest">Phone</p>
<p className="text-white text-4xl font-semibold">+8801314335168</p>
</div>
</div>
            {/*2 */}

            <div className="flex items-center space-x-4">
<div className="h-20 w-20 bg-yellow-300"></div>
<div className="space-y-2">
<p className="text-white text-3xl  font-semibold tracking-widest">E-mail</p>
<p className="text-white text-3xl font-semibold tracking-widest">summenurfatema@gmail.com</p>
</div>
</div>
            {/*3*/}

            <div className="flex items-center space-x-4">
{/* <div className="h-20 w-20 bg-yellow-300"></div>  https://img.freepik.com/premium-psd/blue-house-icon-3d-rendering_207199-279.jpg?w=2000*/}
<img src='https://i.pinimg.com/736x/a2/16/62/a21662f59dd87796cd1449a62d533fcf.jpg' className="h-36 w-36" alt='' />
<div className="space-y-2">
<p className="text-white text-3xl font-semibold tracking-widest">ADDRESS</p>
<p className="text-white text-3xl font-semibold tracking-widest">CHITTAGONG, BANGLADESH</p>
</div>
</div>
<div>
  <p className="text-white text-3xl font-semibold tracking-widest text-center border-b-4 w-4/5 pb-4 border-dashed">OTHERS</p>
  <div className="flex space-x-7 pl-8 pt-4 items-center">

  <img src='https://cdn3d.iconscout.com/3d/free/thumb/github-5622954-4684832.png' className="h-36 w-36" alt='' />
  <img src='https://cdn3d.iconscout.com/3d/free/thumb/linkedin-logo-5476201-4602452.png' className="h-36 w-36 animate-waving-hand" alt='' />
  <img src='https://cdn3d.iconscout.com/3d/free/thumb/linkedin-logo-5476201-4602452.png' className="h-36 w-36 animate-waving-hand" alt='' />

  </div>
</div>



        </div>
      </div>
      {/* Right */}
     
      <div className="w-1/2">
      <div className="border rounded-full px-24 py-5">
        <form>
          <div className="flex flex-col space-y-10 pb-14 pt-32 ">
            <input
              name="email"
              type="email"
              className="bg-[#141317] text-white text-3xl pt-9 border-b-2 pb-6 focus-none focus:outline-none"
              placeholder="Full Name"
            />

            <input
              className="bg-[#141317] text-3xl pt-9 border-b-2 pb-6 focus:outline-none text-white"
              name="email"
              type="email"
              placeholder="Email Address"
            />

            <textarea
              className="bg-[#141317] text-3xl pt-9 border-b-2 pb-6 focus:outline-none  text-white text-3xl "
              name="messege"
              placeholder="Your Messege"
            ></textarea>
          </div>
         <div className="h-48 w-48 border hover:pl-2  hover:pt-2 rounded-full">
         <div className="h-44 w-44 rounded-full hover:scale-110  bg-yellow-300 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold uppercase">Send</h1>
         </div>
         </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
