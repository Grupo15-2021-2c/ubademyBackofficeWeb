import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, ...rest}) {

  PrivateRoute.propTypes = {
    component: PropTypes.node.isRequired,
  };

    return (
      <Route {...rest}
        // eslint-disable-next-line no-unused-vars
        render={_props => localStorage.getItem('access_token') ?
            <Component /> : 
            <Redirect to="/"/>
        }
    />
    );
  }
  
  export default PrivateRoute;
