import React from 'react'

const NewDonor = () => {
    const cname = "mt-[10px] p-[10px] rounded-md outline-none border-2 border-blue-300 focus:border-red-300"
    return (
        <div className='flex items-center justify-center p-[30px] m-[30px] shadow-2xl  rounded-lg border-4 border-green-50'>
            <div className='m-[20px] p-[20px] h-[80vh] w-[550px]'>
                <h1 className='text-[18px] bg-blue-50 p-5 rounded-2xl font-semibold mb-[30px]'>Please Enter New Donor Details:</h1>
                <div className='flex flex-col my-[12px]'>

                    <label htmlFor="">Name: </label>
                    <input
                        type="text" placeholder='Priya Bala' className={`${cname}`}
                    />

                    <label htmlFor="" className='mt-[20px]'>Address: </label>
                    <input
                        type="text" placeholder='Door No, Street Name, City, Postal code' className={`${cname}`}
                    />

                    <label htmlFor="" className='mt-[20px]'>Mobile: </label>
                    <input
                        type="text" placeholder='9597585393' maxLength={10} className={`${cname}`}
                    />
                    {/* 
                    <label htmlFor="" className='mt-[20px]'>Blood Pressure: </label>
                    <input
                        type="text" placeholder='9597585393' maxLength={10} className={`${cname}`}
                    /> */}

                    <label htmlFor="" className='mt-[20px]'>Blood Group: </label>
                    <select id="blood-group" className={`${cname}`}>
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
                        type="email" placeholder='priya@gmail.com' maxLength={10} className={`${cname}`}
                    />

                </div>
            </div>
            <div className='m-[20px] p-[20px] h-[80vh] w-[550px]'>
                <div className='flex flex-col my-[12px]'>
                    <label htmlFor="" className='mt-[85px]' >Weight: </label>
                    <input
                        type="number" placeholder='Weight in k.g.' maxLength={10} className={`${cname}`}
                    />

                    {/*  <label htmlFor="" className='mt-[20px]'>Blood Pressure: </label>
                    <input
                        type="text" placeholder='9597585393' maxLength={10} className={`${cname}`}
                    /> */}

                    <label htmlFor="" className='mt-[20px]'>Date: </label>
                    <input
                        type="date" maxLength={10} className={`${cname}`}
                    />

                    <label htmlFor="" className='mt-[20px]'>Health Issues: </label>


                    <textarea
                        id="health-issues"
                        className={`${cname} h-[150px]`}
                        placeholder='Please enter the health issues you are having'

                    />
                </div>
                <button className='bg-green-600 text-white py-[15px] mt-3 w-[150px] rounded-xl hover:bg-red-700 transition-colors font-semibold'>
                    Add Donor
                </button>
            </div>

        </div >
    )
}

export default NewDonor