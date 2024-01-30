import React from 'react'

const OpenSource = () => {
    return (
        <div className='max-w-[100vw] w-full bg-blue-500  text-center changeColor'>
            <div className='  text-center inline  relative md:text-sm text-xs  '>
            <a href="https://github.com/potato-lulw/assignment-buddy" className='cursor-pointer'>We are open source. Looking for contributors 👉 Github</a>
                <div className='absolute top-2 left-[0%] bg-white w-2 h-2 blob sm:block hidden'></div>
            </div>
            
        </div>
    )
}

export default OpenSource