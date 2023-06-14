import React from 'react';

export default function Button({addClick, children}) {
    return (
        <button onClick={addClick} className='p-2 rounded-lg bg-cyan-500 text-white'>{children}</button>
    )
}