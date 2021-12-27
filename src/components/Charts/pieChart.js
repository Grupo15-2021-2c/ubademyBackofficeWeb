import React from "react";
import './chart.css';
import PropTypes from 'prop-types';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';


function Pie_Chart({title, data, dataKey}) {

    Pie_Chart.propTypes = {
      title: PropTypes.node.isRequired,
      data: PropTypes.node.isRequired,
      dataKey: PropTypes.node.isRequired,
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    return (
      <div className='chart-container'>
        <h3 className='chart-item'>{title}</h3>
        {console.log(data)}
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <PieChart>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey={dataKey}
                >
                {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default Pie_Chart;