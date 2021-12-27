import React from "react";
import './feature.css';
import PropTypes from 'prop-types';

function Feature({title, analytics}) {

  Feature.propTypes = {
    title: PropTypes.node.isRequired,
    analytics: PropTypes.node.isRequired,
  };

    return (
      <div className='feature-container'>
          <div className='feature-item'>
            <div className='feature-title'>
              {title}
            </div>
            <div className='feature-list'>
              {analytics ? 'Blocked: ' + JSON.stringify(analytics.blocked) : ''}
            </div>
          </div>
      </div>
    );
  }
  
  export default Feature;