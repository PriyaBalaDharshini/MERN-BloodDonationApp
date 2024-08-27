import React, { useEffect, useState } from 'react'
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart } from "@mui/x-charts/LineChart"
import { BarChart } from '@mui/x-charts/BarChart';
import { publicRequest } from '../requestMethods';
import { logout } from "../redux/userRedux.js"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    const [bloodgroup, setBloodgroup] = useState([])
    const [donorCount, setDonorCount] = useState(0);
    const [prospectCount, setProspectCount] = useState(0);
    const [recentDonors, setRecentDonors] = useState([]);
    const [distribution, setDistribution] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getBloodgroupStats = async () => {
            try {
                const res = await publicRequest.get("/donor/stats")
                console.log('Bloodgroup Stats:', res.data);

                const transformedData = res.data.map((item) => ({
                    bloodGroup: item._id,
                    count: item.count,
                }))
                setBloodgroup(transformedData)
            } catch (error) {
                console.log('Error fetching bloodgroup stats:', error);
            }
        }

        const getDonorCount = async () => {
            try {
                const res = await publicRequest.get("/donor/count");
                setDonorCount(res.data.count);
                console.log('Donor Count:', res.data.count);
            } catch (error) {
                console.log('Error fetching donor count:', error);
            }
        };

        const getProspectCount = async () => {
            try {
                const res = await publicRequest.get("/prospect/count");
                setProspectCount(res.data.count);
                console.log('Prospect Count:', res.data.count);
            } catch (error) {
                console.log('Error fetching prospect count:', error);
            }
        };

        const getRecentDonors = async () => {
            try {
                const res = await publicRequest.get("/donor/recentDonors");
                setRecentDonors(res.data);
            } catch (error) {
                console.log('Error fetching recent donors:', error);
            }
        };

        const getDonorDistributionByAgeGroup = async () => {
            try {
                const res = await publicRequest.get("/donor/distribution");
                const data = res.data.map(item => ({ ageGroup: item._id, count: item.count }));
                setDistribution(data);
            } catch (error) {
                console.log('Error fetching recent donors:', error);
            }
        }

        getBloodgroupStats();
        getDonorCount();
        getProspectCount();
        getRecentDonors();
        getDonorDistributionByAgeGroup();
    }, [])

    return (
        <div className='flex items-center justify-between v-[100vh]'>
            <div className='flex flex-col m-[30px]'>
                <div className='flex flex-wrap'>
                    <div className='bg-blue-100 m-[30px] h-[350px] w-[350px] shadow-xl rounded-md flex flex-col items-center justify-center'>
                        <div className='h-[220px] w-[220px]'>
                            <Gauge
                                value={Number(prospectCount)}  // Ensure the value is a number
                                startAngle={0}
                                endAngle={360}
                                innerRadius="80%"
                                outerRadius="100%"
                            />
                        </div>
                        <h2 className='font-semibold text-[18px] text-center mt-[20px]'>Prospects</h2>
                    </div>
                    <div className='bg-blue-100 m-[30px] h-[350px] w-[350px] shadow-xl rounded-md flex flex-col items-center justify-center'>
                        <div className='h-[220px] w-[220px]'>
                            <Gauge
                                value={Number(donorCount)}  // Ensure the value is a number
                                startAngle={0}
                                endAngle={360}
                                innerRadius="80%"
                                outerRadius="100%"
                            />
                        </div>
                        <h2 className='font-semibold text-[18px] text-center mt-[20px]'>Donors</h2>
                    </div>
                </div>
                <div>
                    <p className='mt-3 text-center font-semibold'>Number of Donors versus Donor Age</p>
                    <LineChart
                        xAxis={[{ data: distribution.map(item => item.ageGroup) }]}
                        series={[{
                            data: distribution.map(item => item.count),

                            type: 'line',
                            smooth: true,
                            color: '#FF5733',
                        }]}
                        height={300}
                        margin={{ left: 50, right: 30, top: 30, bottom: 50 }}
                        grid={{ vertical: true, horizontal: true }}
                    />

                </div>
            </div>
            <div className='flex flex-col h-[100vh] bg-green-50 p-[10px] w-[350px] shadow-lg border-solid border-2 border-green-100 rounded-md'>
                <div className='mt-[20px]'>
                    <BarChart
                        dataset={bloodgroup}
                        yAxis={[{ scaleType: 'band', dataKey: 'bloodGroup' }]}
                        series={[{ dataKey: 'count', label: 'Donor Count' }]}
                        layout="horizontal"
                        height={400}
                        margin={{ top: 50, bottom: 20 }}
                    />
                </div>
                <div className='flex flex-col items-center justify-center mt-[40px]'>
                    <h1 className='font-semibold text-[20px] mb-[20px]'>Recent Donors</h1>
                    <ul>
                        {recentDonors.map((donor, index) => (
                            <li className='mb-[10px]' key={index}>{index + 1}. {donor.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin
