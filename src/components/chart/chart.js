import React from "react";
import './chart.css';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart({title, data, dataKey, grid}) {

    Chart.propTypes = {
      title: PropTypes.node.isRequired,
      data: PropTypes.node.isRequired,
      dataKey: PropTypes.node.isRequired,
      grid: PropTypes.node.isRequired,
    };

    return (
      <div className='chart-container'>
        <h3 className='chart-item'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd'/>
                <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
            </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default Chart;