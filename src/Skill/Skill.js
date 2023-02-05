import React from 'react';
import CountUp from 'react-countup';
const Skill = () => {
    return (
        <div className=' relative'>
            {/* left */}
            <div className='h-[920px] w-2  rounded-full bg-white ml-20 relative'>
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
 
 
            </div>
            {/* middle*/}
            
            <div className='h-2 w-4/5 container rounded-full bg-white absolute top-72 left-40 '></div>
            <div className='h-2 w-4/5 container ml-40 rounded-full bg-white absolute bottom-[500px] left- '></div>
            <div className='h-2 w-4/5 container ml-40 rounded-full bg-white absolute bottom-[380px]'></div>
            <div className='h-2 w-4/5 container ml-40 rounded-full bg-white absolute bottom-[260px]'></div>
            <div></div>
            {/* up */}
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[40px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[180px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[330px]'></div>
            <div></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[480px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[630px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[780px]'></div>
            <div></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[930px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[1080px]'></div>
            <div className='h-[370px] w-2 container ml-40 rounded-full bg-white absolute bottom-[260px] left-[1230px]'></div>
            <div></div>
             {/* top  box */}
             <div className='h-[120px] w-[140px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[506px] left-[44px]'>
                <h1 className='text-3xl font-bold tracking-widest text-center pt-5'>HTML</h1>
                <CountUp S  className='text-3xl font-bold tracking-widest pl-9' end={96} duration={2}/>
                <span  className='text-3xl font-bold tracking-widest'>%</span>
             </div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[506px] left-[336px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[506px] left-[636px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[506px] left-[936px]'></div>
            {/* middle box */}
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[385px] left-[187px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[385px] left-[487px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[385px] left-[787px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[385px] left-[1087px]'></div>
            {/* bottom  box */}
            <div className='h-[120px] w-[140px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[265px] left-[44px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[264px] left-[336px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[264px] left-[636px]'></div>
            <div className='h-[120px] w-[144px] container ml-40 rounded-lg bg-yellow-300 absolute bottom-[264px] left-[936px]'></div>
            {/* right */}
            <div></div>
        </div>
    );
};

export default Skill;