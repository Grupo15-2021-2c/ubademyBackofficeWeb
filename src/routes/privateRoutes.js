import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest}) {

    return (
      <Route {...rest}
        render={props => localStorage.getItem('access_token') ?
            <Component /> : 
            <Redirect to="/"/>
        }
    />
    );
  }
  
  export default PrivateRoute;