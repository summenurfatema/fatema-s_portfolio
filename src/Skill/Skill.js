import React from 'react';
import CountUp from 'react-countup';
const Skill = () => {
    return (
        <div className=''>
            {/* left */}
            <div className='h-[920px] w-2 rounded-full bg-white ml-20 relative'>
                {/* html */}
                <div className='h-2 w-36 rounded-full bg-white absolute -left-5 top-5'></div>
                <div className='h-16 w-2 rounded-full bg-white absolute left-28 top-5 z-50'></div>
                {/* <div className='h-32 w-44 rounded-xl bg-yellow-300 absolute left-32 animate-shake top-16'>
                    
                    <h1 className='text-4xl font-bold text-center pt-6'>HTML</h1>
                    <CountUp className='text-4xl font-bold text-center' end={95} duration={1}  enableScrollSpy ></CountUp>
                    <span className='text-2xl font-bold'>%</span>
              </div> */}

              <div class="w-0 h-0 z-40 
   border-l-[50px] border-l-transparent
   border-b-[80px] border-b-blue-500
   border-r-[50px] border-r-transparent rounded-3xl absolute left-16 top-16
    "></div>
 <div className='h-9 w-9 rounded-full bg-yellow-300 absolute top-32 left-24 animate-ping'></div>
 <div className='h-9 w-9 rounded-full bg-yellow-300 absolute top-32 left-24 animate-ping'></div>
 <div className='h-9 w-9 rounded-full bg-yellow-300 absolute top-32 left-24 animate-ping'></div>
 <div className='h-9 w-9 rounded-full bg-yellow-300 absolute top-32 left-24 animate-ping'></div>
            </div>
            {/* middle*/}
            <div></div>
            {/* right */}
            <div></div>
        </div>
    );
};

export default Skill;