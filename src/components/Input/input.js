import React from 'react';
import './input.css';
import PropTypes from 'prop-types';

const Input = ({ attribute, handleChange, param }) => {

    Input.propTypes = {
        attribute: PropTypes.node.isRequired,
        handleChange: PropTypes.node.isRequired,
        param: PropTypes.node.isRequired,
    };

    return (
        <div className='input-container'>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={param ? 'input-error' : 'regular-style'}
            />
        </div>
    );
}

export default Input;