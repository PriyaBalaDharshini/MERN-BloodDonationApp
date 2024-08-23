import React, { useEffect, useState } from 'react'
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart } from "@mui/x-charts/LineChart"
import { FaSignOutAlt } from "react-icons/fa"
import { PieChart } from '@mui/x-charts/PieChart';
import { publicRequest } from '../requestMethods';



const Admin = () => {

    const [bloodgroup, setBloodgroup] = useState([])
    useEffect(() => {
        const getBloodgroupStats = async () => {
            try {
                const res = await publicRequest.get("/donor/stats")
                console.log(res.data);

                const transformedData = res.data.map((item, index) => ({
                    id: index,
                    value: item.count,
                    label: `Blood Group ${item._id}`
                }))
                setBloodgroup(transformedData)
            } catch (error) {
                console.log(error);
            }
        }
        getBloodgroupStats()
    }, [])

    const data = bloodgroup;


    return (
        <div className='flex  items-center justify-between v-[100vh]'>
            <div className='flex flex-col m-[30px]'>
                <div className='flex flex-wrap'>
                    <div className='bg-blue-100 m-[30px] h-[350px] w-[350px] shadow-xl rounded-md  flex flex-col items-center justify-center'>
                        <div className='h-[220px] w-[220px]'>
                            <Gauge
                                value={25}
                                startAngle={0}
                                endAngle={360}
                                innerRadius="80%"
                                outerRadius="100%"

                            />
                        </div>
                        <h2 className='font-semibold text-[18px] text-center mt-[20px]'>Prospects</h2>
                    </div>
                    <div className='bg-blue-100 m-[30px] h-[350px] w-[350px] shadow-xl rounded-md  flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center h-[200px] w-[200px] m-[30px] border-[20px] border-red-400 border-solid rounded-full'>
                            <div className='m-[30px]'>
                                <h2 className='font-semibold text-[18px] text-center mt-[20px]'>100</h2>
                            </div>
                        </div>
                        <h2 className='font-semibold text-[18px] text-center'>Donors</h2>
                    </div>
                </div>
                <div>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={300}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>
            <div className='flex flex-col h-[100vh] bg-green-50 p-[10px] w-[300px] shadow-lg border-solid border-2 border-green-100 rounded-md'>
                <div className='flex items-center justify-center mt-[20px] cursor-pointer'>
                    <FaSignOutAlt className='text-[20px]' /> <span className='ml-4 font-semibold text-[18px]'>Logout</span>

                </div>


                <div className='mt-[20px]'>
                    <PieChart
                        series={[
                            {
                                data,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={400}
                    />

                </div>

                <div className='flex flex-col items-center justify-center mt-[40px]'>
                    <h1 className='font-semibold text-[20px] mb-[20px] '>Recent Donors</h1>

                    <ul>
                        <li className='mb-[10px]'>Arun Kumar</li>
                        <li className='mb-[10px]'>Kaviya Ramesh</li>
                        <li className='mb-[10px]'>Suresh Babu</li>
                        <li className='mb-[10px]'>Balakrishnan</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin