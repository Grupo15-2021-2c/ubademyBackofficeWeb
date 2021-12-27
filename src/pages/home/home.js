import React, { useState, useEffect } from "react";
import './home.css';
import { Feature, WidgetSm, WidgetLg } from '../../components';
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
        {/* <Line_Chart data={userData} title='User Analytics' grid dataKey='Active User'/> */}
        <div className='home-widgets'>
          <WidgetSm/>
          <WidgetLg />
        </div>
    </div>
  );
}
  
  export default Home;


 /* {
    "status": "success",
    "data": {
      "blocked": "3",
      "totalUsers": "num",
      "loginMail": "num",
      "loginGoogle": "num",
      "totalLogin": "num",
    }
  }
  
  cantidad de usuarios bloqueados respecto del total
  loginMail y loginGoogle respecto total login
  */