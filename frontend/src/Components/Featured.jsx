import React from 'react'

const Featured = () => {
    return (
        <div className='flex px-[200px] mt-[100px]'>
            <div className='rounded-3xl bg-gray-300 min-h-[400px] w-[500px] z-10 mt-[20px]'>
                <div className="m-10">
                    <h1 className="text-[25px] font-semibold">About Us</h1>
                    <hr className="bg-red-500 w-[150px] h-[3px] my-[15px]" />
                    <span className=' text-m'> BloodBridge serves as a community hub for blood donation, bringing together donors and healthcare professionals within the evolving healthcare landscape.</span>
                    <ul>
                        <li className="mt-3 text-sm">1. Expert blood donors supported by clinical oversight.</li>
                        <li className="mt-3 text-sm">2. Enhancing engagement with our donor community.</li>
                        <li className="mt-3 text-sm">3. Delivering top-notch evaluation, diagnosis, and care.</li>
                        <li className="mt-3 text-sm">4. Conducting thorough reviews to ensure consistency and quality.</li>
                        <li className="mt-3 text-sm">5. Comprehensive support from a diverse team of specialists.</li>
                    </ul>
                </div>
            </div>
            <div className='h-[450px] w-[500px] ml-[-30px]'>
                <video className='rounded-3xl' src="/video.mp4" height="450px" width="500px" loop muted autoPlay></video>
            </div>
        </div >
    )
}

export default Featured