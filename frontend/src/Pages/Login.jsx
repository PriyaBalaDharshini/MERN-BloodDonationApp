import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls.js";


const Login = (e) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const navigate = useNavigate()

    console.log(user);
    const handleLogin = async (e) => {
        e.preventDefault()

        if (email && password) {
            try {
                setLoading(true);
                await login(dispatch, { email, password });
                setLoading(false)
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }

    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <>

            <div className='flex items-center justify-center min-h-screen bg-green-100' >

                <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
                        <img
                            src="/hero1.jpg"
                            alt="login"
                            className="object-cover h-full w-full"
                        />
                    </div >
                    <div className="p-10 w-[500px]">
                        <h3 className="text-2xl font-bold text-green-800 mb-5 text-center">Admin Login</h3>
                        <form className='space-y-10'>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-3 ">
                                    Email:
                                </label>
                                <input type="email"
                                    id='email'
                                    className="w-full px-4 border py-3 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="example@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-600 mb-3 ">
                                    Password:
                                </label>

                                <input type="password"
                                    id='password'
                                    className="w-full px-4 border py-3 border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button
                                type='submit'
                                className='w-full py-2 bg-red-500 text-white font-bold rounded-md hover:bg-green-600'
                                onClick={handleLogin}
                            >
                                {loading ? "Loading... Please wait" : "Login"}
                                {user.currentUser ? <Navigate to={"/admin"} /> : ""}
                            </button>
                        </form>
                        <h2 className='text-center text-blue-600 mt-9 text-[18px] font-semibold cursor-pointer' onClick={handleHome} >Home</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login