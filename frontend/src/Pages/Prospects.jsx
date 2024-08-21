import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods.js';

const Prospects = () => {

    const [prospects, setProspects] = useState([])

    const columns = [
        { field: "_id", headerName: "ID", width: 120 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "address", headerName: "Address", width: 180 },
        { field: "bloodgroup", headerName: "Blood Group", width: 80 },
        { field: "healthissues", headerName: "Health Issues", width: 150 },
        {
            field: "approve", headerName: "Approve", width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/prospect/${params.row._id}`}>

                            <button className='text-black font-bold m-3px bg-green-400 rounded-xl  cursor-pointer w-[70px]'>
                                Approve
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
                //console.log(res.data.allProspects);
                setProspects(res.data.allProspects)
            } catch (error) {
                console.log(error);
            }
        }
        getProspects()
    }, [])
    /* 
        const handleDelete = async (id) => {
            try {
                await publicRequest.delete(`/prospect/deleteProspect/${id}`)
                window.location.reload()
            } catch (error) {
                console.log(error);
            }
        } */

    return (
        <div className='w-[80vw] h-[100vh]'>
            <div className='flex items-center justify-center m-[40px]'>
                <h1 className='m-[20px] text-[20px] font-semibold'>All Prospects</h1>
            </div>
            <div className='m-[30px]'>
                <DataGrid rows={prospects} columns={columns} getRowId={(row) => row._id} checkboxSelection />
            </div>
        </div>
    )
}

export default Prospects




