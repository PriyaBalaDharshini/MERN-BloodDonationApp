import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

const ProspectPage = () => {

    const [prospect, setProspect] = useState({})
    const location = useLocation()
    const prospectId = location.pathname.split("/")[3]
    console.log(prospectId);

    useEffect(() => {
        const getProspect = async () => {
            try {
                const res = await publicRequest.get(`/prospect/getProspect/${prospectId}`)

                console.log(res.data.Prospect);
                setProspect(res.data.Prospect)
            } catch (error) {
                console.log(error);
            }
        }
        getProspect()
    }, [])

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='m-[50px] p-[20px] h-max w-[450px] shadow-lg rounded-lg border-2 border-grey-50'>
                <h1 className='font-medium text-[20px] text-center my-[15px]'>Prospects</h1>
                <ul className='m-[30px] text-[16px]'>
                    <li className='mt-[14px]'>
                        <strong>Name - </strong>{prospect.name}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Address - </strong>{prospect.address}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Mobile - </strong>{prospect.mobile}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Email - </strong>{prospect.email}
                    </li>

                    <li className='mt-[14px]'>
                        <strong>Blood Group - </strong>{prospect.bloodgroup}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Health Issues - </strong>{prospect.healthissues}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Date - </strong>{prospect.date}
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Weight - </strong>{prospect.weight} kg
                    </li>
                    <li className='mt-[14px]'>
                        <strong>Status - </strong>{prospect.status}
                    </li>
                </ul>
                <span className='font-semibold  text-[16px] text-red-600'>Do you want to approve Priya to donor list?</span>
                <div className='flex flex-row items-center justify-evenly mt-[20px]'>
                    <button className='bg-blue-500 p-[10px] rounded-lg font-medium text-white'>Approve</button>
                    <button className='bg-red-500 px-[20px] py-[10px] rounded-lg font-medium text-white'>Reject</button>
                </div>

            </div>
        </div>
    )
}

export default ProspectPage