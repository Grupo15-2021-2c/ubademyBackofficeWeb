import React from "react";
import './loading.css';
import logo from '../../images/ubademylogo.png';

function Loading() {

    return (
      <div className='loading-container'>
          <div className='loading-item'>
              Loading...
          </div>
          <div className='loading-item'>
              Please Wait
          </div>
          <img src={logo} className="loading-logo" alt="logo" />
      </div>
    );
  }
  
  export default Loading;