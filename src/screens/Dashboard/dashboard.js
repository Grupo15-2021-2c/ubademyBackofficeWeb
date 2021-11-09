import React, { useState, useEffect } from 'react';
import { Sidebar, Topbar } from '../../components';
import { Home, Admin, UserList, CoursesList, Course } from '../../pages';
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses';

function Dashboard() {

  const [toggleRefreshList, setToggleRefreshList] = useState(false);
  const [coursesInfos, setCoursesInfos] = useState([]);


  const fetchCourseList = () => {
    return axios.get(url)
    .then(({data}) => {
        //handle success
        setToggleRefreshList(toggleRefreshList);
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
  }

  useEffect(() => {
    fetchCourseList().then((coursesData) => {
        //setCourseData(JSON.stringify(courseData) || 'No course data found');
        setCoursesInfos(coursesData);
    });
  },[toggleRefreshList]);

    return (
      <Router>
        <div className='dashboard-container'>
          <div className='top-panel'>
            <Topbar />
          </div>
          <div className='container' >
          <Sidebar />        
          <Switch>
            <Route exact path="/dashboard/admin" component={Admin}>
              <Admin />
            </Route>
            <Route exact path="/dashboard">
              <Home />
            </Route>
            <Route exact path="/dashboard/users" component={UserList}>
              <UserList/>
            </Route>
            <Route exact path="/dashboard/courses" component={CoursesList}>
              <CoursesList/>
            </Route>
            {coursesInfos.map((course) => (
              <Switch key={course.id}>
                <Route exact path={"/dashboard/course/:courseID" + course.id} component={Course}>
                  <Course />
                </Route>
              </Switch>
            ))
          }
          </Switch>         
          </div>
        </div>
      </Router> 
    );
  }
  
  export default Dashboard;