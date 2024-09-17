import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods.js';
import { toast } from 'react-toastify'; // Import toast for error handling

const Prospects = () => {
    const [prospects, setProspects] = useState([])

    const columns = [
        { field: "_id", headerName: "ID", width: 80 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 80 },
        { field: "address", headerName: "Address", width: 180 },
        { field: "mobile", headerName: "Mobile", width: 80 },
        { field: "bloodgroup", headerName: "Blood Group", width: 80 },
        { field: "healthissues", headerName: "Health Issues", width: 80 },
        { field: "age", headerName: "Age", width: 80 },
        { field: "weight", headerName: "Weight", width: 80 },
        { field: "bp", headerName: "BP", width: 80 },
        {
            field: "action", headerName: "Action", width: 100,
            renderCell: (params) => {
                return (
                    <Link to={`/admin/prospect/${params.row._id}`}>
                        <button className='text-black font-bold m-3px bg-green-400 rounded-xl cursor-pointer w-[70px]'>
                            Action
                        </button>
                    </Link>
                );
            }
        },
    ];

    useEffect(() => {
        const getProspects = async () => {
            try {
                const res = await publicRequest.get("/prospect/allProspects");
                setProspects(res.data.allProspects);
            } catch (error) {
                console.log(error);
                toast.error("Failed to load prospects"); // Display error to the user
            }
        };
        getProspects();
    }, []);

    return (
        <div className='w-[80vw] h-[100vh]'>
            <div className='flex items-center justify-center m-[40px]'>
                <h1 className='m-[20px] text-[20px] font-semibold'>All Prospects</h1>
            </div>
            <div className='m-[30px]'>
                <DataGrid rows={prospects} columns={columns} getRowId={(row) => row._id} checkboxSelection />
            </div>
        </div>
    );
}

export default Prospects;
