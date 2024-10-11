// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

// const accordionData = [
//   { title: 'Dashboard', details: ['Default', 'Alternative']},
//   { title: 'Users', details: ['Overview', 'Leaderboard', 'Add User']},
//   {title: 'User Profiles',details: ['Profile', 'Teams', 'Projects', 'Connections', 'My Profile'],defaultExpanded: true},
//   {title: 'Account',details: ['Setting', 'Billing', 'Invoice']},
//   {title: 'E-Commerce',details: ['Overview', 'Product', 'Orders', 'Customers', 'Referrals', 'Manage Reviews', 'Checkout']},
//   {title: 'Projects',details: ['Overview', 'Timeline']},
//   {title: 'Project',details: ['Overview', 'Files', 'Activity', 'Teams', 'Settings']},
//   {title: 'Authentication',details: ['Log In', 'Sign Up', 'Reset Password', 'Email Verification','2 Step Verification', 'Welcome Message', 'Error Message', 'Error 500' ]}
// ];

// export default function AccordionUsage() {
//   return (
//     <div className="accordion-container">
//       {accordionData.map((item, index) => (
//         <Accordion key={index} defaultExpanded={item.defaultExpanded || false}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//           >
//             {item.title}
//           </AccordionSummary>
//           <AccordionDetails className="custom-accordion-details">
//             <ul>
//               {item.details.map((detail, i) => (
//                 <li key={i}>{detail}</li>
//               ))}
//             </ul>
//           </AccordionDetails>
//           {item.title === 'User Profiles' && (
//             <AccordionActions>

//             </AccordionActions>
//           )}
//         </Accordion>
//       ))}
//     </div>
//   );
// }



import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div className='accordian-container'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <i class="fa-solid fa-house"></i> <h3>Dashboard</h3>
        </AccordionSummary>
        <AccordionDetails>
          <li>Default</li>
          <li>Alternative</li>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <i class="fa-solid fa-users"></i> <span>Users</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>overview</li>
          <li>Leaderboard</li>
          <li>Add User</li>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <i class="fa-solid fa-user"></i> <span>User Profiles</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>Profile</li>
          <li>Teams</li>
          <li>Projects</li>
          <li>Connections</li>
          <li>My Profile</li>

        </AccordionDetails>
        <AccordionActions>
          
        </AccordionActions>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <i class="fa-solid fa-file-invoice"></i><span>Account</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>Setting</li>
          <li>Billing</li>
          <li>Invoice</li>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <i class="fa-solid fa-file-invoice"></i><span>E-Commerce</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>Overview</li>
          <li>Product</li>
          <li>Orders</li>
          <li>customers</li>
          <li>Refferrals</li>
          <li>Manage Reviews</li>
          <li>Checkout</li> 
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <i class="fa-regular fa-note-sticky"></i><span>Projects</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>Overview</li>
          <li>Timeline</li>             
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       <i class="fa-solid fa-bag-shopping"></i><span>Project</span>
        </AccordionSummary>
        <AccordionDetails>
          <li>Overview</li>
          <li>Files</li>
          <li>Activity</li>
          <li>Teams</li>
          <li>Settings</li>          
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <i class="fa-solid fa-lock"></i><span>Authentication</span>
        </AccordionSummary>
        <AccordionDetails >
          <li>Log In</li>
          <li>Sign Up</li>
          <li>Reset Password</li>
          <li>Email Verification</li>
          <li>2 Step Verification</li>    
          <li>Welcome Message</li>    
          <li>Error Message</li>  
          <li>Error 500</li>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}