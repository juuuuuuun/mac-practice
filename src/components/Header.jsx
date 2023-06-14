import React from 'react';
import Logo from '../img/to-do-list.png';

export default function Header() {
    return (
        <>
            <div className='flex justify-center mt-10 mb-10'>
                <div className='logo'>
                    <img className='h-12' src={Logo} alt='logo' />
                </div>
                <h1 className='text-5xl font-medium'>Todo List</h1>
            </div>
        </>
    );
};