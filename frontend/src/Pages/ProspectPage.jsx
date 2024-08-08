import React from 'react'

const ProspectPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='m-[50px] p-[20px] h-max w-[450px] shadow-lg rounded-lg border-2 border-grey-50'>
                <h2 className='font-medium text-[20px] text-center my-[15px]'>Prospects</h2>
                <ul className='m-[30px] text-[16px]'>
                    <li className='mt-[14px]'>
                        <strong>Name - </strong>Priya
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Address - </strong>Hosur, India
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Mobile - </strong>1236547899
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Address - </strong>Hosur, India
                    </li>

                    <li className='mt-[14px]'>
                        <strong>Blood Group - </strong>B+
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Health Issues - </strong>None
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Date - </strong>12/12/2023
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Weight - </strong>50 kg
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Status - </strong>Pending
                    </li>
                </ul>
                <span className='font-semibold text-[16px] text-red-600'>Do you want to approve Priya to donor list?</span>
                <div className='flex flex-row items-center justify-evenly mt-[20px]'>
                    <button className='bg-blue-500 p-[10px] rounded-lg font-medium text-white'>Approve</button>
                    <button className='bg-pink-500 px-[20px] py-[10px] rounded-lg font-medium text-white'>Reject</button>
                </div>

            </div>
        </div>
    )
}

export default ProspectPage