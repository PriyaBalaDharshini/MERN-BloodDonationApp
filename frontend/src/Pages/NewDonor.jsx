import React, { useState } from 'react'
import { publicRequest } from '../requestMethods.js'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const NewDonor = () => {
    const [input, setInput] = useState({})
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)

    console.log(user.currentUser.accessToken);

    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleAddDonor = async () => {
        try {
            console.log(input); // Log input data
            const response = await publicRequest.post("/donor/createDonor", input, {
                headers: { token: `Bearer ${user.currentUser.accessToken}` }
            });
            console.log(response); // Log server response
            toast.success("Donor added successfully");
            setInput({});
            navigate("/admin/donors")

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const cname = "mt-[10px] p-[10px] rounded-md outline-none border-2 border-blue-300 focus:border-red-300"

    return (
        <div className='flex items-center justify-center p-[30px] m-[30px] shadow-2xl  rounded-lg border-4 border-green-50'>
            <div className='m-[20px] p-[20px] h-auto w-[550px]'>
                <h1 className='text-[18px] text-white bg-blue-400 p-5 rounded-2xl font-semibold mb-[30px] text-center'>Please Enter New Donor Details:</h1>
                <div className='flex flex-col my-[12px]'>

                    <label htmlFor="">Name: </label>
                    <input
                        type="text"
                        placeholder='Priya Bala'
                        className={`${cname}`}
                        value={input.name || ""}
                        onChange={handleChange}
                        name='name'
                    />

                    <label htmlFor="" className='mt-[20px]'>Address: </label>
                    <input
                        type="text"
                        placeholder='Door No, Street Name, City, Postal code'
                        className={`${cname}`}
                        value={input.address || ""}
                        onChange={handleChange}
                        name='address'
                    />

                    <label htmlFor="" className='mt-[20px]'>Mobile: </label>
                    <input
                        type="number"
                        placeholder='9597585393'
                        maxLength={10}
                        className={`${cname}`}
                        value={input.mobile || ""}
                        onChange={handleChange}
                        name='mobile'
                    />


                    <label htmlFor="" className='mt-[20px]'>Blood Group: </label>
                    <select
                        id="blood-group"
                        className={`${cname}`}
                        value={input.bloodgroup || ""}
                        onChange={handleChange}
                        name='bloodgroup'
                    >
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

                    <label htmlFor="" className='mt-[20px]'>Email: </label>
                    <input
                        type="email"
                        placeholder='priya@gmail.com'
                        maxLength={20}
                        className={`${cname}`}
                        value={input.email || ""}
                        onChange={handleChange}
                        name='email'
                    />

                    <label htmlFor="" className='mt-[20px]'>Age: </label>
                    <input
                        type="number"
                        placeholder='30'
                        maxLength={2}
                        className={`${cname}`}
                        value={input.age || ""}
                        onChange={handleChange}
                        name='age'
                    />
                </div>
            </div>
            <div className='m-[20px] p-[20px] h-auto w-[550px]'>
                <div className='flex flex-col my-[12px]'>
                    <label htmlFor="" className='mt-[85px]' >Weight: </label>
                    <input
                        type="number"
                        placeholder='Weight in k.g.'
                        maxLength={3}
                        className={`${cname}`}
                        value={input.weight || ""}
                        onChange={handleChange}
                        name='weight'
                    />

                    <label htmlFor="" className='mt-[20px]'>Blood Pressure: </label>
                    <input
                        type="text"
                        placeholder='120/80'
                        className={`${cname}`}
                        value={input.bp || ""}
                        onChange={handleChange}
                        name='bp'
                    />

                    <label htmlFor="" className='mt-[20px]'>Date: </label>
                    <input
                        type="date"
                        className={`${cname}`}
                        value={input.date || ""}
                        onChange={handleChange}
                        name='date'
                    />

                    <label htmlFor="" className='mt-[20px]'>Health Issues: </label>
                    <textarea
                        id="health-issues"
                        className={`${cname} h-[170px]`}
                        placeholder='Please enter the health issues you are having'
                        value={input.healthissues || ""}
                        onChange={handleChange}
                        name='healthissues'

                    />
                </div>
                <button
                    className='bg-green-600 text-white py-[15px] mt-3 w-[150px] rounded-xl hover:bg-green-700 transition-colors font-semibold'
                    onClick={handleAddDonor}
                >
                    Add Donor
                </button>
            </div>

        </div >
    )
}

export default NewDonor
