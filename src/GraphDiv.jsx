import { BarGraphComponent } from './graph';

export function GraphContainer(){
    return(
        <div className="graph-container">
            <div className='left-bar-graph-container'>
                 <div className="graph-left-header">
                    <h2>Import data into Front Dashboard</h2>
                    <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
                 </div>
                 <p>
                    See and talk to your users and leads immediately by importing your data into the Front Dashboard platform.
                 </p>
                 <h4>Import users from:</h4>
                 <li> <img src="https://storage.googleapis.com/klamp-cms-storage-bucket/Capsule_CRM_c911d02272/Capsule_CRM_c911d02272.png" alt="" /> Capsule<button>Launch importer</button></li>
                 <li> <img src="https://s3.amazonaws.com/www-inside-design/uploads/2018/10/mailchimp-sq-810x810.jpg" alt="" /> Mailchamp<button>Launch importer</button></li>
                 <li><img src="https://cdn-icons-png.flaticon.com/512/17071/17071991.png" alt="" />Webdev<button>Launch importer</button></li>
                 <p>Or you can sync data to Front Dashboard to ensure your data is always up-to-date.</p>
            </div>
            <div className='bar-graph-container'>
                <div className="graph-right-header">
                    <h3>Monthly expenses</h3>
                    <div>
                    <button>This week</button>
                    <button>Last week</button>
                     </div>                
                </div>
                <BarGraphComponent/>
             </div>
        </div>
    )
} 
