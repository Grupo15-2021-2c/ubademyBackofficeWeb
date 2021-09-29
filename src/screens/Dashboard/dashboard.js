import React from 'react';
import { Label, Sidebar, Topbar } from '../../components';

import './dashboard.css';

function Dashboard() {

    return (
      <div className='dashboard-container'>
        <div className='top-panel'>
            <Topbar />
        </div>
        <div className='container' >
          <Sidebar />
          <div className='others' ></div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;