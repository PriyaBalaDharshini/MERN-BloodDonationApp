import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa"
import { publicRequest } from "../requestMethods.js"

const Donors = () => {

    const [donors, setDonors] = useState([])

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "address", headerName: "Address", width: 150 },
        { field: "age", headerName: "Age", width: 80 },
        { field: "bloodgroup", headerName: "Blood Group", width: 80 },
        { field: "healthissues", headerName: "Health Issues", width: 150 },
        {
            field: "edit", headerName: "Edit", width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/donor/${params.row._id}`}>

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
            renderCell: (params) => {
                return (
                    <>
                        <Link>
                            <button className='text-white cursor-pointer w-[70px]'>
                                <FaTrash className='text-pink-600 cursor-pointer m-2 text-[16px]' onClick={() => handleDelete(params.row._id)} />
                            </button>
                        </Link>
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        const getDonors = async () => {
            try {
                const res = await publicRequest.get("/donor/allDonors")
                console.log(res.data.allDonors);
                setDonors(res.data.allDonors)
            } catch (error) {
                console.log(error);
            }
        }
        getDonors()
    }, [])

    const handleDelete = async (id) => {
        try {
            await publicRequest.delete(`/donor/deleteDonor/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='w-[80vw] h-[100vh]'>
            <div className='flex items-center justify-around m-[40px]'>
                <h1 className='m-[20px] text-[20px] font-semibold'>All Donors</h1>
                <Link to="/admin/newdonor">
                    <button className='text-[18px] bg-green-600 p-3 rounded-md cursor-pointer text-white font-semibold'>Add Donor</button>
                </Link>

            </div>
            <div className='m-[30px]'>
                <DataGrid rows={donors} columns={columns} getRowId={(row) => row._id} checkboxSelection />
            </div>
        </div>
    )
}

export default Donors