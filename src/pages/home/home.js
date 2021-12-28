import React, { useState, useEffect } from "react";
import './home.css';
import { WidgetSm, WidgetLg, Pie_Chart } from '../../components';
import { fetchUsersMetrics } from '../../services/index';

function Home() {

  const [ usersMetrics, setUsersMetrics ] = useState();
    
  useEffect(() => {
    fetchUsersMetrics().then((metricsData) => {
        setUsersMetrics(metricsData);
        console.log(usersMetrics);
    });
  },[]);

  const data = [
    {
      name: 'blocked',
      value: 3,
    },
    {
      name: 'Total Users',
      value: 20,
    }
  ]

  const data2 = [
    {
      name: 'login Mail',
      value: 13,
    },
    {
      name: 'login Google',
      value: 7,
    },
    {
      name: 'total Login',
      value: 20,
    }
  ]

  return (
    <div className='home'>
        <Pie_Chart data={data} title='Blocked Users' dataKey='value'/>
        <Pie_Chart data={data2} title='Login Analytics' dataKey='value'/>
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