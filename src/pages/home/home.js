import React, { useState, useEffect } from "react";
import './home.css';
import { Feature, Chart, WidgetSm, WidgetLg } from '../../components';
import { userData } from '../../dummyData';
import { fetchUsersMetrics } from '../../services/index';

function Home() {

  const [ usersMetrics, setUsersMetrics ] = useState();
    
  useEffect(() => {
    fetchUsersMetrics().then((metricsData) => {
        setUsersMetrics(metricsData);
    });
  },[]);

  return (
    <div className='home'>
        <div className='home-features'>
            <Feature title={'Users'} analytics={usersMetrics}/>
            <Feature />
            <Feature />
        </div>
        <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
        <div className='home-widgets'>
          <WidgetSm/>
          <WidgetLg />
        </div>
    </div>
  );
}
  
  export default Home;

