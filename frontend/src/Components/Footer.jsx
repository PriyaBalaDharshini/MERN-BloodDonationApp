import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }

    return (
        <div className='bg-indigo-200 px-[150px] h-[60vh] mt-[50px]'>
            <div className='flex justify-between py-[5%]'>
                {/* Center the image and text */}
                <div className='flex flex-col items-center'>
                    <img src="/logo1.png" alt="BloodBridge Logo" height={200} width={200} className="cursor-pointer" />
                    <p>Empowering Recovery,</p>
                    <p>with Each Blood Donation</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold  mb-3'>Direct Links</h3>
                    <ul className='mt-2 space-y-2'>
                        <Link to='hero' smooth={true} duration={1000}>
                            <li className='hover:underline cursor-pointer mb-3'>Home</li>
                        </Link>
                        <Link to='about' smooth={true} duration={1000}>
                            <li className='hover:underline cursor-pointer  mb-3'>About Us</li>
                        </Link>
                        <Link to='contact' smooth={true} duration={1000}>
                            <li className='hover:underline cursor-pointer  mb-3'>Donate</li>
                        </Link>

                        <li className='hover:underline cursor-pointer' onClick={handleClick}>Admin</li>

                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-xl font-semibold'>Contact</h3>
                    <p className='mt-2'>
                        417, Pantheon Salai, Egmore,
                        Chennai - 600 008, Tamil Nadu.
                    </p>
                    <p className='mt-2'>
                        044-2819 4917 <br />
                        044-2819 0467
                    </p>
                    <p className='mt-2'>
                        tansacs.pd@gmail.com<br />
                        tnsacs@gmail.com
                    </p>
                </div>
            </div>
            <div className='border-t border-red-500 pt-4 text-center'>
                <p>&copy;2024 BloodBridge. All Rights Reserved</p>
                <div className='flex flex-col items-center'>

                    <div className='flex space-x-4 mt-3'>
                        <a href="in.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600'>
                            <FontAwesomeIcon icon={faGithub} size="1x" />
                        </a>
                        <a href="https://github.com/PriyaBalaDharshini" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600'>
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
