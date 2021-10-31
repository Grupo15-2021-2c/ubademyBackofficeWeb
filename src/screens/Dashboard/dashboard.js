import React from 'react';
import { Sidebar, Topbar } from '../../components';
import { Home, Admin, UserList, CoursesList } from '../../pages';
import './dashboard.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function Dashboard({account}) {

    return (
      <Router>
        <div className='dashboard-container'>
          <div className='top-panel'>
            {console.log("cuenta", account)}
            <Topbar account={account}/>
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
          </Switch>         
          </div>
        </div>
      </Router> 
    );
  }
  
  export default Dashboard;