import React, { useEffect, useState } from "react";
import './metrics.css';
import { fetchCoursesMetrics, fetchCourseList } from '../../services/index';
import { Loading } from '../../components';


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
                fetchCoursesMetrics(course.id).then((metricsData) => {
                    coursesInfo.push(course);
                    coursesMetrics.push(metricsData);
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
          <div className='metrics-features'>
              {coursesMetrics.map((courseMetric) => (
                <>
                    <div className='metrics-info'>
                    <div>
                        {"Inscripted: " + JSON.stringify(courseMetric.inscriptions)}                    
                    </div>
                    <div>
                        {"Exams Taken: " + JSON.stringify(courseMetric.examsTaken)}
                    </div>
                    </div>
                </>
                  ))}
          </div>
      </div>
    );
  }
  
  export default Metrics;

