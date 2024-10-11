import { LineChart, Line } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


export function GraphComponent() {
  const data = [
    { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 349, pv: 4300, amt: 2100 }
    
  ];

  // Render the line graph
  const renderLineChart = (
    <LineChart width={150} height={100} data={data}>
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
    const Bardata = [
      {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
      {name: 'Page A', uv: 100, pv: 2400, amt: 2100},
      {name: 'Page A', uv: 200, pv: 2400, amt: 2000},
      {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
      {name: 'Page A', uv: 300, pv: 2400, amt: 2000}

    ];

    const renderBarChart = (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={Bardata} >
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