import React, { useEffect, useState } from "react";
import './metrics.css';
import { fetchCoursesMetrics } from '../../services/index';
import { Loading, Pie_Chart } from '../../components';


function CoursesMetrics() {

    const [ categoryMetrics ] = useState([]);
    const [ ownerMetrics ] = useState([]);
    const [ subscriptionMetrics ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const handleRefresh = () => {
        setLoading(false);
    }

    useEffect(() => {
        fetchCoursesMetrics().then((metricsData) => {
            metricsData.byCategory.map((category) => {
                var temp = {
                    name: category.category,
                    value: parseInt(category.count),
                }
                categoryMetrics.push(temp) 
            })
            metricsData.byOwner.map((owner) => {
                var temp = {
                    name: owner.owner,
                    value: parseInt(owner.count),
                }
                ownerMetrics.push(temp) 
            })
            metricsData.bySubscription.map((subscriptions) => {
                var temp = {
                    name: subscriptions.subscription,
                    value: parseInt(subscriptions.count),
                }
                subscriptionMetrics.push(temp)
            })
            console.log(categoryMetrics);
        }); 
      },[]);

    setTimeout(() => {
        handleRefresh();
    }, 2000);

    if(loading){
        return(
            <div className='resources'>
                <div className='resources-container'>
                    <Loading/>
                </div>
            </div>
        );
    }

    return (
      <div className='metrics'>
        <Pie_Chart data={categoryMetrics} title='Courses Categories' dataKey='value'/>
        <Pie_Chart data={ownerMetrics} title='Courses Owners' dataKey='value'/>
        <Pie_Chart data={subscriptionMetrics} title='Courses Subscriptions' dataKey='value'/>
      </div>
    );
  }
  
  export default CoursesMetrics;
