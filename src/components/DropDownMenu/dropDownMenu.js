import React from "react";
import PropTypes from 'prop-types';
import './dropDownMenu.css';


const DropDownMenu = ({children}) =>{

    DropDownMenu.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <div className='dropdownmenu-container'>
            <li className='dropdownmenu-container li'>
                {children}
            </li> 
        </div>
    )
};


export default DropDownMenu;