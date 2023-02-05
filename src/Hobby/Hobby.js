import React from 'react';
import Marquee from "react-fast-marquee";
const Hobby = () => {
    return (
        <div className='py-10'>
            <h1 className='text-5xl font-bold text-yellow-300 py-10 pl-10 '>LOVE TO DO</h1>
            <img src='https://i.pinimg.com/736x/a2/16/62/a21662f59dd87796cd1449a62d533fcf.jpg' className="h-20 w-20" alt='' />
            <Marquee>
                <div className='flex space-x-40'>
                <div className='flex space-x-5'>
                <img src='https://i.pinimg.com/736x/a2/16/62/a21662f59dd87796cd1449a62d533fcf.jpg' className="h-20 w-20" alt='' />
                <h1 className='text-5xl font-bold text-white'>READING BOOK</h1>
                </div>
                <div className='flex space-x-5'>
                <img src='https://i.pinimg.com/736x/a2/16/62/a21662f59dd87796cd1449a62d533fcf.jpg' className="h-20 w-20" alt='' />
                <h1 className='text-5xl font-bold text-white'>CODING</h1>
                </div>
                <div className='flex space-x-5'>
                <img src='https://i.pinimg.com/736x/a2/16/62/a21662f59dd87796cd1449a62d533fcf.jpg' className="h-20 w-20" alt='' />
                <h1 className='text-5xl font-bold text-white'>Travelling</h1>
                </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Hobby;