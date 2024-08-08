import React, { useState } from 'react'

import { FaBox, FaCalendar, FaChartBar, FaClipboard, FaCog, FaElementor, FaHdd, FaHome, FaShippingFast, FaUser, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeLink, setActiveLink] = useState("/admin")

    const handleActiveLink = (link) => {
        setActiveLink(link)
    }

    return (
        <div className='h-[100vh] bg-red-50 p-[10px] w-[250px] md:w-[200px] lg:w-[280px] shadow-lg'>

            <ul className='flex flex-col items-start justify-start mt-[20px] pl-[20px]'>

                <Link to="/admin" onClick={() => handleActiveLink("/admin")}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 ${activeLink === "/admin" ? "bg-red-400 p-[10px] w-[150px] text-white rounded-md" : ""}`}
                    >
                        <FaHome
                            className={`mr-[18px] ${activeLink === "/admin" ? "text-white" : "text-red-600"}`}
                        />
                        Home
                    </li>
                </Link>

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaUser className='mr-[18px] text-red-600' />
                    Profile
                </li>

                <hr className='w-full my-[20px] border-green-500' />

                <Link to="/admin/donors" onClick={() => handleActiveLink("/admin/donors")}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 ${activeLink === "/admin/donors" ? "bg-red-400 p-[10px] w-[150px] text-white rounded-md" : ""}`}
                    >
                        <FaBox
                            className={`mr-[18px] ${activeLink === "/admin/donors" ? "text-white" : "text-red-600"}`}
                        />
                        Donors
                    </li>
                </Link>

                <Link to="/admin/prospects" onClick={() => handleActiveLink("/admin/prospects")}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 ${activeLink === "/admin/prospects" ? "bg-red-400 p-[10px] w-[150px] text-white rounded-md" : ""}`}
                    >
                        <FaUsers
                            className={`mr-[18px] ${activeLink === "/admin/prospects" ? "text-white" : "text-red-600"}`}
                        />
                        Prospects
                    </li>
                </Link>

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaShippingFast className='mr-[18px] text-red-600' />
                    Orders
                </li>

                <hr className='w-full my-[20px] border-green-500' />

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaElementor className='mr-[18px] text-red-600' />
                    Elements
                </li>


                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaCog className='mr-[18px] text-red-600' />
                    Settings
                </li>

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaHdd className='mr-[18px] text-red-600' />
                    Backups
                </li>

                <hr className='w-full my-[20px] border-green-500' />

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaChartBar className='mr-[18px] text-red-600' />
                    Charts
                </li>
                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaClipboard className='mr-[18px] text-red-600' />
                    All Logs
                </li>

                <li className=' flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100'>
                    <FaCalendar className='mr-[18px] text-red-600' />
                    Calender
                </li>

            </ul>
        </div >
    )
}

export default Menu