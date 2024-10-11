
import { GraphContainer } from './GraphDiv';
import { GraphComponent } from './graph.jsx';
import { TableComponent } from './UserTable';


const dashboardData = [
  {title: 'TOTAL USERS',value: '72,540',comparison: 'from 70,104'},
  {title: 'SESSIONS',value: '29.4%',comparison: 'from 29.1%'},
  {title: 'AVG.CLICK RATE',value: '56.8%',comparison: 'from 61.2%'},
  {title: 'PAGEVIEWS',value: '92,913',comparison: 'from 2,913'}
];

export function MainContent() {
  return (
    <main>
      <div className="heading-div">
        <h2>Dashboard</h2> 
        <button>
          <i className="fa-solid fa-user"></i> Invite users
        </button>
      </div>
      <div className="graph-div">
        {dashboardData.map((item, index) => (
            <>
          <div key={index} className='dashboard-item'>
            <div>
                <h5>{item.title}</h5>
                <h2>{item.value}</h2>
                <p>{item.comparison}</p>  
            </div>
          <GraphComponent/>
          </div>
          </>
        ))}
      </div>
        
        <GraphContainer/>
        <TableComponent/> 
        
    </main>
  );
}
