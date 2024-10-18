
import { createServer } from 'miragejs';
export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api'; 

      this.get('/users', () => {
        return {
          users: [
            { id: 1, name: 'Amanda Harvey', status: "🟢Successful", email: "amanda@site.com", signup: "1 year ago", userId: 67989 },
            { id: 2, name: 'Annie Richard', status: "🟢Successful", email: "annie@site.com", signup: "3 years ago", userId: 67989 },
            { id: 3, name: 'David Harrison', status: "🟡Pending", email: "david@site.com", signup: "6 years ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            { id: 4, name: 'Finch Hoot', status: "🔴Failed", email: "finch@site.com", signup: "1 year ago", userId: 67989 },
            
          ],
        };
      });


      this.get('lineChart',()=> {
        return{
          lineChart: [
            { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 349, pv: 4300, amt: 2100 }    
          ]
        }
      })


      this.get('/barChart',()=> {
        return{
          barChart: [
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 100, pv: 2400, amt: 2100 },
            { name: 'Page C', uv: 200, pv: 2400, amt: 2000 },
            { name: 'Page D', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page E', uv: 300, pv: 2400, amt: 2000 }
          ]
        }
      })


    },    
  });
}
