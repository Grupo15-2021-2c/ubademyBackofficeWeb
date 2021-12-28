import React, { useEffect, useState } from "react";
import './home.css';
import { WidgetSm, WidgetLg, Pie_Chart } from '../../components';
import { fetchUsersMetrics } from '../../services/index';

function Home() {

  const [ blockedMetrics ] = useState([]);
  const [ loginMetrics ] = useState([]);

  useEffect(() => {
    fetchUsersMetrics().then((metricsData) => {
      var data = {
          name: 'blocked',
          value: parseInt(metricsData.blocked),
      }
      blockedMetrics.push(data);
      data = {
          name: 'Total Users',
          value: parseInt(metricsData.totalUsers),
      }
      blockedMetrics.push(data);
      data =
        {
          name: 'login Mail',
          value: parseInt(metricsData.loginMail),
        }
        loginMetrics.push(data);
        data = {
          name: 'login Google',
          value: parseInt(metricsData.loginGoogle),
          }
        loginMetrics.push(data);
        data =  
        {
          name: 'total Login',
          value: parseInt(metricsData.totalLogin),
        }
      loginMetrics.push(data);
      console.log(blockedMetrics);
      console.log(loginMetrics);
    });
  },[]);
 

  return (
    <div className='home'>
        <Pie_Chart data={blockedMetrics} title='Blocked Users' dataKey='value'/>
        <Pie_Chart data={loginMetrics} title='Login Analytics' dataKey='value'/>
        <div className='home-widgets'>
          <WidgetSm/>
          <WidgetLg />
        </div>
    </div>
  );
}
  
  export default Home;