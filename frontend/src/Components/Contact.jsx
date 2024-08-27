import React, { useState } from 'react'
import { publicRequest } from "../requestMethods.js"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {
    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleProspects = async () => {
        if (!input.name || !input.email || !input.mobile || !input.bloodgroup || !input.weight || !input.age) {
            toast.error("Please fill all the required fields");
            return;
        }
        try {
            setLoading(true);
            console.log(input); // Log input data
            const response = await publicRequest.post("/prospect/createProspect", input);
            console.log(response); // Log server response
            toast.success("Details has been added successfully");
            setInput({});
            navigate("/")

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='flex items-center justify-center my-[80px]'>
            <div className='flex flex-col bg-red-200 h-auto w-[50%] p-[50px] rounded-xl'>
                <span className='text-[20px] my-[20px] font-semibold'>Ready to Save a Life? Share Your Details for Blood Donation</span>
                <label htmlFor="name" className='text-[18px] my-[15px] font-semibold'>
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your name'
                    value={input.name || ""}
                    onChange={handleChange}
                    name='name'
                />

                <label htmlFor="email" className='text-[18px] my-[10px] font-semibold'>
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your email'
                    value={input.email || ""}
                    onChange={handleChange}
                    name='email'
                />

                <label htmlFor="address" className='text-[18px] my-[10px] font-semibold'>
                    Address:
                </label>
                <input
                    type="text"
                    id="address"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your address'
                    value={input.address || ""}
                    onChange={handleChange}
                    name='address'
                />

                <label htmlFor="mobile" className='text-[18px] my-[10px] font-semibold'>
                    Mobile:
                </label>
                <input
                    type="text"
                    id="mobile"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your mobile number'
                    value={input.mobile || ""}
                    onChange={handleChange}
                    name='mobile'
                />

                <label htmlFor="weight" className='text-[18px] my-[10px] font-semibold'>
                    Weight:
                </label>
                <input
                    type="number"
                    id="weight"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your weight in kg'
                    value={input.weight || ""}
                    onChange={handleChange}
                    name='weight'
                />

                <label htmlFor="blood-group" className='text-[18px] my-[10px] font-semibold'>
                    Blood Group:
                </label>
                <select id="blood-group" className='w-[350px] p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    value={input.bloodgroup || ""}
                    onChange={handleChange}
                    name='bloodgroup'>
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>

                <label htmlFor="age" className='text-[18px] my-[10px] font-semibold'>
                    Age:
                </label>
                <input
                    type="number"
                    id="age"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Enter your age'
                    value={input.age || ""}
                    onChange={handleChange}
                    name='age'

                />

                <label htmlFor="health-issues" className='text-[18px] my-[10px] font-semibold'>
                    Health Issues:
                </label>
                <textarea
                    id="health-issues"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Please enter the health issues you are having'
                    value={input.healthissues || ""}
                    onChange={handleChange}
                    name='healthissues'
                />

                <label htmlFor="blood-pressure" className='text-[18px] my-[10px] font-semibold'>
                    Blood Pressure:
                </label>
                <input
                    type="number"
                    id="blood-pressure"
                    className='p-[10px] rounded-md outline-none border-2 border-red-300 focus:border-blue-300'
                    placeholder='Please enter your blood pressure'
                    value={input.bp || ""}
                    onChange={handleChange}
                    name='bp'

                />

                {/* Centering the button using flexbox */}
                <div className='flex justify-center mt-6'>
                    <button className='bg-green-600 text-white p-3 mt-3 w-[150px] rounded-xl hover:bg-red-700 transition-colors'
                        onClick={handleProspects}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;

