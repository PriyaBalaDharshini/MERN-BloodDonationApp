import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa"

const Donors = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "address", headerName: "Address", width: 180 },
        { field: "bloodgroup", headerName: "Blood Group", width: 80 },
        { field: "healthissues", headerName: "Health Issues", width: 150 },
        {
            field: "edit", headerName: "Edit", width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/donor/123`}>

                            <button className='text-white cursor-pointer w-[70px]'>
                                <FaEdit className='text-cyan-600 cursor-pointer m-2 text-[16px]' />
                            </button>

                        </Link>
                    </>
                )
            }
        },
        {
            field: "delete", headerName: "Delete", width: 100,
            renderCell: () => {
                return (
                    <>
                        <Link to="/admin/donor/123">
                            <button className='text-white cursor-pointer w-[70px]'>
                                <FaTrash className='text-pink-600 cursor-pointer m-2 text-[16px]' />
                            </button>
                        </Link>
                    </>
                )
            }
        },
    ]

    const rows = [
        { id: 1, name: "Arun Kumar", address: "Chennai, TN", bloodgroup: "B+", healthissues: "None" },
        { id: 2, name: "Kaviya Ramesh", address: "Coimbatore, TN", bloodgroup: "O-", healthissues: "Asthma" },
        { id: 3, name: "Suresh Babu", address: "Madurai, TN", bloodgroup: "A+", healthissues: "None" },
        { id: 4, name: "Anjali Venkatesh", address: "Tiruchirappalli, TN", bloodgroup: "AB+", healthissues: "Diabetes" },
        { id: 5, name: "Meera Rajan", address: "Salem, TN", bloodgroup: "O+", healthissues: "None" },
        { id: 6, name: "Vijayalakshmi Muthusamy", address: "Erode, TN", bloodgroup: "A-", healthissues: "Thyroid" },
        { id: 7, name: "Rajesh Kumar", address: "Tirunelveli, TN", bloodgroup: "B-", healthissues: "None" },
        { id: 8, name: "Jaya Subramanian", address: "Vellore, TN", bloodgroup: "AB-", healthissues: "Heart Disease" },
        { id: 9, name: "Pooja Srinivasan", address: "Kanchipuram, TN", bloodgroup: "O+", healthissues: "Hypertension" },
        { id: 10, name: "Karthik Narayanan", address: "Cuddalore, TN", bloodgroup: "B+", healthissues: "None" },
    ];
    return (
        <div className='w-[80vw] h-[100vh]'>
            <div className='flex items-center justify-between m-[40px]'>
                <h1 className='m-[20px] text-[20px] font-semibold'>All Donors</h1>
                <Link to="/admin/newdonor">
                    <button className='text-[18px] bg-green-600 p-3 rounded-md cursor-pointer text-white font-semibold'>Add Donor</button>
                </Link>

            </div>
            <div className='m-[30px]'>
                <DataGrid rows={rows} columns={columns} checkboxSelection />
            </div>
        </div>
    )
}

export default Donors