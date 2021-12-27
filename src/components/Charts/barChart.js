import React from "react";
import './chart.css';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


function Bar_Chart({title, data, dataKey, grid}) {

    Bar_Chart.propTypes = {
      title: PropTypes.node.isRequired,
      data: PropTypes.node.isRequired,
      dataKey: PropTypes.node.isRequired,
      grid: PropTypes.node.isRequired,
    };

    return (
      <div className='chart-container'>
        <h3 className='chart-item'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <BarChart width={150} height={40} data={data}>
                <XAxis dataKey='name' stroke='#5550bd'/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={dataKey} fill="#8884d8" />
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
            </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default Bar_Chart;