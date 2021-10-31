import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import  { Login, Dashboard } from "../screens";
import PrivateRoute from './privateRoutes';
import image from '../images/backgroundImages.png';
import '../App.css';

function Routes({ component: Component, ...rest}) {

    return (
        <div className='background-image' style={{ backgroundImage: `url(${image})` }}>
            <div className="App">
                <Router key='router' >
                    <Route exact path="/" render={props => localStorage.getItem('access_token') ? 
                        <Redirect to="/dashboard"/> :
                        <Login {...props}/> 
                        }/> 
                    <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                    <PrivateRoute exact path='/dashboard/users' component={Dashboard}/>
                    <PrivateRoute exact path='/dashboard/admin' component={Dashboard}/>
                    <PrivateRoute exact path='/dashboard/courses' component={Dashboard}/>
                </Router>
            </div>
        </div>
    );
  }
  
  export default Routes;