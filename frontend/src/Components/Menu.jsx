import React, { useState } from 'react';
import { FaBox, FaSignOutAlt, FaUsers, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux.js';

const Menu = () => {
    const [activeLink, setActiveLink] = useState('/admin');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleActiveLink = (link) => {
        setActiveLink(link);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className='h-[100vh] bg-red-50 p-[10px] w-[250px] md:w-[200px] lg:w-[280px] shadow-lg'>
            <ul className='flex flex-col items-start justify-start mt-[20px] pl-[20px]'>
                <Link to='/admin' onClick={() => handleActiveLink('/admin')}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 mb-3 ${activeLink === '/admin' ? 'bg-red-400 p-[10px] w-[150px] text-white rounded-md' : ''}`}
                    >
                        <FaHome
                            className={`mr-[18px] ${activeLink === '/admin' ? 'text-white' : 'text-red-600'}`}
                        />
                        Home
                    </li>
                </Link>

                <Link to='/admin/donors' onClick={() => handleActiveLink('/admin/donors')}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 mb-3 ${activeLink === '/admin/donors' ? 'bg-red-400 p-[10px] w-[150px] text-white rounded-md' : ''}`}
                    >
                        <FaBox
                            className={`mr-[18px] ${activeLink === '/admin/donors' ? 'text-white' : 'text-red-600'}`}
                        />
                        Donors
                    </li>
                </Link>

                <Link to='/admin/prospects' onClick={() => handleActiveLink('/admin/prospects')}>
                    <li
                        className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 mb-3 ${activeLink === '/admin/prospects' ? 'bg-red-400 p-[10px] w-[150px] text-white rounded-md' : ''}`}
                    >
                        <FaUsers
                            className={`mr-[18px] ${activeLink === '/admin/prospects' ? 'text-white' : 'text-red-600'}`}
                        />
                        Prospects
                    </li>
                </Link>

                {/* Styled Logout button */}
                <div
                    className={`flex items-center justify-center text-[16px] cursor-pointer mt-[20px] transition-colors duration-100 mb-3 ${activeLink === '/logout' ? 'bg-red-400 p-[10px] w-[150px] text-white rounded-md' : ''}`}
                    onClick={() => {
                        handleActiveLink('/logout');
                        handleLogout();
                    }}
                >
                    <FaSignOutAlt
                        className={`mr-[18px] ${activeLink === '/logout' ? 'text-white' : 'text-red-600'}`}
                    />
                    Logout
                </div>
            </ul>
        </div>
    );
};

export default Menu;
