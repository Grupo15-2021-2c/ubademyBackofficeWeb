import React, { useEffect, useState } from "react";
import './metrics.css';
import { fetchCourseMetrics, fetchCourseList } from '../../services/index';
import { Loading, Bar_Chart } from '../../components';

function Metrics() {

    const [ coursesMetrics ] = useState([]);
    const [ coursesInfo ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const handleRefresh = () => {
        setLoading(false);
    }
    
    useEffect(() => {
        fetchCourseList().then((courses) => {
            courses.map((course) => {
                fetchCourseMetrics(course.id).then((metricsData) => {
                    var temp = {
                        name: course.title,
                        examsTaken: metricsData.examsTaken,
                        inscriptions: metricsData.inscriptions
                    }
                    coursesInfo.push(course);
                    coursesMetrics.push(temp);
                    console.log(temp);
                }); 
            });
            console.log(coursesMetrics);
            console.log(coursesInfo);
        })
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
            <Bar_Chart data={coursesMetrics} title='Courses Inscriptions' grid dataKey='inscriptions'/>
            <Bar_Chart data={coursesMetrics} title='Courses Exams' grid dataKey='examsTaken'/>
      </div>
    );
  }
  
  export default Metrics;

