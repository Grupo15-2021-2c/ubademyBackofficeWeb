import React, { useState, useEffect } from 'react';
import { Sidebar, Topbar } from '../../components';
import { Home, Admin, UserList, CoursesList, Course, Resources } from '../../pages';
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchCourseList } from '../../services/index';

function Dashboard() {

  const [coursesInfos, setCoursesInfos] = useState([]);

  useEffect(() => {
    fetchCourseList().then((coursesData) => {
        //setCourseData(JSON.stringify(courseData) || 'No course data found');
        setCoursesInfos(coursesData);
    });
  },[]);

    return (
      <Router>
        <div className='dashboard-container'>
          <div className='top-panel'>
            <Topbar />
          </div>
          <div className='container' >
            <div className='side-panel'>
              <Sidebar />
            </div>

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
                  <Route exact path={"/dashboard/course/:courseID" + course.id + "/section/:sectionId/resources"} component={Resources}>
                    <Resources />
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