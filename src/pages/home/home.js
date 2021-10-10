import React from "react";
import './home.css';
import { Feature, Chart, WidgetSm, WidgetLg } from '../../components';
import { userData } from '../../dummyData';

function Home() {

    return (
      <div className='home'>
          <div className='home-features'>
              <Feature />
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

