import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { publicRequest } from '../requestMethods.js'

const DonorPage = () => {

    const [donor, setDonor] = useState({})
    const [input, setInput] = useState({});
    const navigate = useNavigate()

    const location = useLocation()
    const donorId = location.pathname.split("/")[3]

    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    useEffect(() => {
        const getDonor = async () => {
            try {
                const res = await publicRequest.put(`/donor/updateDonor/${donorId}`)
                //console.log(res.data.donor);
                setDonor(res.data.donor)
            } catch (error) {
                console.log(error);
            }
        }
        getDonor()
    }, [])

    const handleUpdate = async () => {
        try {
            await publicRequest.put(`/donor/updateDonor/${donorId}`, input)
            navigate("/admin/donors")
        } catch (error) {
            console.log(error);
        }
    }


    const cname = "mt-[10px] p-[10px] rounded-md outline-none border-b-2 border-blue-300 focus:border-red-300"
    return (
        <div className='flex items-center justify-center p-[30px] m-[30px] shadow-2xl  rounded-lg border-4 border-green-50'>
            <div className='m-[20px] p-[20px] h-[80vh] w-[550px] '>
                <h1 className='text-[18px] bg-blue-50 p-5 rounded-2xl font-semibold mb-[30px]'>Edit Donor Details:</h1>
                <div className='flex flex-col my-[12px]'>

                    <label htmlFor="">Name: </label>
                    <input
                        type="text"
                        placeholder={donor.name}
                        className={`${cname}`}
                        value={input.name || ""}
                        onChange={handleChange}
                        name='name'
                    />

                    <label htmlFor="" className='mt-[20px]'>Address: </label>
                    <input
                        type="text"
                        placeholder={donor.address}
                        className={`${cname}`}
                        value={input.address || ""}
                        onChange={handleChange}
                        name='address'
                    />

                    <label htmlFor="" className='mt-[20px]'>Mobile: </label>
                    <input
                        type="text"
                        placeholder={donor.mobile}
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
                        <option value="">{donor.bloodgroup}</option>
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
                        placeholder={donor.email}
                        className={`${cname}`}
                        value={input.email || ""}
                        onChange={handleChange}
                        name='email'
                    />

                </div>
            </div>
            <div className='m-[20px] p-[20px] h-[80vh] w-[550px]'>
                <div className='flex flex-col my-[12px]'>
                    <label htmlFor="" className='mt-[85px]' >Weight: </label>
                    <input
                        type="number"
                        placeholder={`${donor.weight} kg`}
                        maxLength={10}
                        className={`${cname}`}
                        value={input.weight || ""}
                        onChange={handleChange}
                        name='weight'
                    />


                    <label htmlFor="" className='mt-[20px]'>Blood Pressure: </label>
                    <input
                        type="text"
                        placeholder={donor.bp}
                        maxLength={10}
                        className={`${cname}`}
                        value={input.bp || ""}
                        onChange={handleChange}
                        name='bp'
                    />



                    <label htmlFor="" className='mt-[20px]'>Age:  </label>
                    <input
                        type="number"
                        placeholder={donor.age}
                        className={`${cname}`}
                        value={input.age || ""}
                        onChange={handleChange}
                        name='age'
                    />

                    <label htmlFor="" className='mt-[20px]'>Health Issues: </label>
                    <textarea
                        id="health-issues"
                        className={`${cname} h-[80px]`}
                        placeholder={donor.healthissues}
                        value={input.healthissues || ""}
                        onChange={handleChange}
                        name='healthissues'

                    />
                </div>
                <button
                    className='bg-green-600 text-white py-[15px] mt-3 w-[150px] rounded-xl hover:bg-red-700 transition-colors font-semibold'
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </div>

        </div >
    )
}

export default DonorPage