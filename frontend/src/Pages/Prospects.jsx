import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import { FaEdit, FaTrash } from "react-icons/fa"
import { FcApproval } from "react-icons/fc";
import { publicRequest } from '../requestMethods.js';

const Prospects = () => {

    const [prospects, setProspects] = useState([])

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "address", headerName: "Address", width: 180 },
        { field: "bloodgroup", headerName: "Blood Group", width: 80 },
        { field: "healthissues", headerName: "Health Issues", width: 150 },
        {
            field: "approve", headerName: "Approve", width: 100,
            renderCell: () => {
                return (
                    <>
                        <Link to={`/admin/prospect/123`}>

                            <button className='text-white cursor-pointer w-[70px]'>
                                <FcApproval className=' cursor-pointer m-2 text-[20px]' />
                            </button>

                        </Link>
                    </>
                )
            }
        },
        {
            field: "delete", headerName: "Delete", width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link>
                            <button className='text-white cursor-pointer w-[70px]'>
                                <FaTrash className='text-red-500 cursor-pointer m-2 text-[18px]' onClick={() => handleDelete(params.row._id)} />
                            </button>
                        </Link>
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        const getProspects = async () => {
            try {
                const res = await publicRequest.get("/prospect/allProspects");
                console.log(res.data.allProspects);
                setProspects(res.data.allProspects)
            } catch (error) {
                console.log(error);
            }
        }
        getProspects()
    }, [])

    const handleDelete = async (id) => {
        try {
            await publicRequest.delete(`/prospect/deleteProspect/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-[80vw] h-[100vh]'>
            <div className='flex items-center justify-between m-[40px]'>
                <h1 className='m-[20px] text-[20px] font-semibold'>All Prospects</h1>
                <button className='text-[18px] bg-green-600 p-3 rounded-md cursor-pointer text-white font-semibold'>Add Prospect</button>
            </div>
            <div className='m-[30px]'>
                <DataGrid rows={prospects} columns={columns} getRowId={(row) => row._id} checkboxSelection />
            </div>
        </div>
    )
}

export default Prospects




/* const rows = [
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
 */