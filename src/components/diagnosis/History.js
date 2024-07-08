"use client"
import { Line } from 'react-chartjs-2';
import { LinearScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Dcard from './Dcard';
import { useEffect, useState } from 'react';


const History = ({patient}) => {
    Chart.register(LinearScale);

    const [sys,setSys] = useState({})
    const [dl,setDl] = useState({})
    const [diagnosis,setDiagnosis] = useState([])


    const [sysList,setSysList] = useState([])
    const [dlList,setDlList] = useState([])

    const [chartData,setCData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Systolic',
          data: [120, 180, 150, 200, 250, 300],
          borderColor: '#E66FD2',
          borderWidth: 2,
          backgroundColor: '#E66FD2',
        
        },
        {
          label: 'Diastolic',
          data: [80, 100, 120, 150, 170, 200],
          backgroundColor: '#8C6FE6',
          borderColor: '#8C6FE6',
          borderWidth: 2,
        },
      ],
    })



    const [health,setHealth] = useState([{
      image:"/respiratory rate.png",
      backgroundColor:"bg-blue-200",
      category: "Respiratory Rate",
      value:"20 bpm",
      risk: "Normal",
      type:"respiratory_rate",
      data:{}
  },{
      image:"/temperature.png",
      backgroundColor:"bg-pink-200",
      category: "Temperature",
      value:"98.6°F",
      risk: "Normal",
      type:"temperature",
      data:{}

  },{
      image:"/HeartBPM.png",
      backgroundColor:"bg-pink-100",
      category: "Heart Rate",
      value:"78 bpm",
      risk: "Lower than Average",
      type:"heart_rate",
      data:{}
  }])



    const handleDotHover = (e,chartElemet) => {



      if(chartElemet[0]){
        const type = chartElemet[0].datasetIndex
        const elem = chartElemet[0].index


        setHealth(p => {
          return p.map(h => {
            return {
              ...h,
              data: h.type === "heart_rate" ? diagnosis[elem].heart_rate : h.type === "temperature" ? diagnosis[elem].temperature : diagnosis[elem].respiratory_rate
            };
          });
        });


      if(type === 0){
        setSys(sysList[elem])
      }else if(type === 1){
        setDl(dlList[elem])
      }
      }
      
    }





      const chartOptions = {
        onHover: handleDotHover, 
        scales: {
          y: {
            ticks: {
              fontSize: 5, // Adjust the font size here
            },
            beginAtZero: true,
          },
          x: {
            ticks: {
              fontSize: 5, // Adjust the font size here
            },
          }
        },
        plugins: {
            legend: {
              display: false, // Hide legend checkboxes
            },
          },
      };


      useEffect(() => {
        if(patient){
          
          const labels =patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return `${history.month.substring(0,3)}, ${history.year}`;
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((label) => label !== null) // Filter out the null values
          .reverse(); // Reverse the resulting array


          const diastolic =  patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return  history.blood_pressure.diastolic.value
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((diastolic) => diastolic !== null) // Filter out the null values
          .reverse();

          const dl = patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return  history.blood_pressure.diastolic
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((diastolic) => diastolic !== null) // Filter out the null values
          .reverse();

          setDlList(dl)

          setDl(dl[0])


          const sys = patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return  history.blood_pressure.systolic
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((systolic) => systolic !== null) // Filter out the null values
          .reverse();


          setSysList(sys)
          setSys(sys[0])


          const systolic = patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return  history.blood_pressure.systolic.value
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((systolic) => systolic !== null) // Filter out the null values
          .reverse();


          const diagnosis_his = patient.diagnosis_history
          .map((history, index) => {
            if (index < 6) {
              return  history
            } else {
              return null; // Skip the iteration by returning null
            }
          })
          .filter((systolic) => systolic !== null) // Filter out the null values
          .reverse();

          setDiagnosis(diagnosis_his)

          setHealth(p => {
            return p.map(h => {
              return {
                ...h,
                data: h.type === "heart_rate" ? diagnosis_his[0].heart_rate : h.type === "temperature" ? diagnosis_his[0].temperature : diagnosis_his[0].respiratory_rate
              };
            });
          });



          const s = {
            label: 'Systolic',
            data: systolic,
            borderColor: '#E66FD2',
            borderWidth: 2,
            backgroundColor: '#E66FD2',
          }

          const d = {
            label: 'Diastolic',
            data: diastolic,
            backgroundColor: '#8C6FE6',
            borderColor: '#8C6FE6',
            borderWidth: 2,
          }

          setCData(p => {
            return {
              ...p,
              labels:labels,
              datasets:[s,d]
            
            }
          })
        }
      },[patient])

      
    return (
        <div className="bg-white bg-no-repeat bg-padding-box rounded-2xl opacity-100 h-4/6 p-2 relative">
                <p className='font-semibold text-2xl leading-8 font-manrope tracking-normal text-blue-dark text-left m-5'>Diagnosis History</p>
                <div className='w-full my-4  h-3/6 bg-purple-100 bg-no-repeat bg-padding-box rounded-lg opacity-100 flex flex-row'>
                    <div className='flex flex-col w-4/6'>
                        <div className='flex flex-row justify-between my-3'>
                            <p className='font-bold leading-6 font-manrope tracking-normal text-blue-dark text-left capitalize mx-2 text-sm'>Blood Pressure</p>
                            <div className='gap-3 flex flex-row mx-10'>
                                <p className='font-normal text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left'>Last 6 months </p>
                                <IoIosArrowDown />
                            </div>
                            
                        </div>
                        <Line data={chartData} options={chartOptions} className='ml-0'  />
                    </div>

                    <div className='flex flex-col my-3 gap-2'>
                        <div className='flex flex-row gap-3'>
                            <div className='w-4 h-4 rounded-lg  bg-pink-500 bg-no-repeat bg-padding-box ' />
                            <p className=' text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize'>Systolic</p>
                        </div>
                        <div className="font-bold text-lg leading-9 font-manrope tracking-normal text-blue-dark text-left capitalize">{sys.value}</div>
                        <div className='flex flex-row gap-1'>
                            {sys.levels === "Higher than Average" && <IoIosArrowUp />}
                            {sys.levels === "Lower than Average" && <IoIosArrowUp />}
                            
                            <p className='font-normal text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left'>{sys.levels}</p>
                        </div>

                        <div className="border border-gray-300 my-4"></div>

                        <div className='flex flex-row gap-3'>
                            <div className='w-4 h-4 rounded-lg  bg-purple-500 bg-no-repeat bg-padding-box ' />
                            <p className=' text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left capitalize'>Diastolic</p>
                        </div>
                        <div className="font-bold text-lg leading-9 font-manrope tracking-normal text-blue-dark text-left capitalize">{dl.value}</div>
                        <div className='flex flex-row gap-1'>
                        {dl.levels === "Higher than Average" && <IoIosArrowUp />}
                        {dl.levels === "Lower than Average" && <IoIosArrowUp />}
                            <p className='font-normal text-sm leading-5 font-manrope tracking-normal text-blue-dark text-left'>{dl.levels}</p>
                        </div>
                    </div>
                    
                </div>


                <div className='flex flex-row w-full gap-3 mb-16'>
                {health.map((health,index) => <Dcard key={index}  health={health} />)}
                </div>
                
               
        </div>
    )
}

export default History;