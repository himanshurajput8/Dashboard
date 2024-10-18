import { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


export function GraphComponent() {
  const[lineData, setLineData] = useState([])

  useEffect(()=>{
    fetch('api/lineChart')
    .then(response => response.json())
    .then(data=>{
      setLineData(data.lineChart)
    })
  },[])
  // Render the line graph
  const renderLineChart = (
    <LineChart width={150} height={100} data={lineData}>
      <Line type="monotone" dataKey="uv" stroke="#377dff" />
    </LineChart>
  );
  return (
    <>
      {renderLineChart}
    </>
  )
}



export function BarGraphComponent(){
   const [barData, setBarData] = useState([])
   
   useEffect(()=>{
    fetch('/api/barChart')
    .then(respose => respose.json())
    .then(data => {
      setBarData(data.barChart)
    })
    .catch(error => console.log('data not found', error))
   },[])

    const renderBarChart = (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={barData} >
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#377dff" barSize={30} />
        </BarChart>
        </ResponsiveContainer>
      )

    return(
        <>
            {renderBarChart}
        </>
    )
}