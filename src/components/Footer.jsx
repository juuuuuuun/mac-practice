import React from 'react';

export default function Footer() {

    const curDate = new Date().getFullYear();

    console.log(curDate)

    return (
        <>
            <div className='bg-cyan-900 text-white w-[100%] mt-5 h-10 flex justify-center items-center sticky bottom-0'>©{curDate} Jun Song</div>
        </>
    );
};