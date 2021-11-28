import React from "react";
import './title.css';
import PropTypes from 'prop-types';


const Title = ({ text }) => {


    Title.propTypes = {
        text: PropTypes.node.isRequired,
    };

    return (
        <div className='title-container'>
            <label className='title-label'> {text} </label>
        </div>
    )
};

export default Title;