import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[url("/hero1.jpg")]   bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]' >
            <div className='flex flex-col text-white pt-[10%]' >
                <span className='text-[20px] mt-3'>Be the reason for <br /> Someone’s heartbeat. <span className='blink'> ❤️</span></span>
                <h4 className='text-[33px] mt-3 font-medium'>Donate Blood</h4>
                <h3 className='text-[36px] mt-3 font-medium'>Spread Happiness</h3>
                <h2 className='text-[39px] mt-3 font-medium'>Save Life !</h2>
            </div>
            <div className='flex items-center mt-[20px]'>
                <button className='pointer font-medium bg-green-600 p-[10px] text-white w-[150px] rounded-xl mr-9'>Join Us</button>
                <button className='font-medium bg-rose-500 p-[10px] text-white w-[150px] rounded-xl mr-9'>Call: 1097</button>
            </div>
        </div >
    )
}

export default Hero