import React from "react";
import PropTypes from 'prop-types';
import './label.css';


const Label = ({ text }) =>{

    Label.propTypes = {
        text: PropTypes.node.isRequired,
    };

    return (
        <div className='label-container'>
            <label> {text}</label>
        </div>
    )
};


export default Label;