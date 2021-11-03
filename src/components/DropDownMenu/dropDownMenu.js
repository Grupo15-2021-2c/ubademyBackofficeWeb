import React from "react";

import './dropDownMenu.css';


const DropDownMenu = ({children}) =>{
    return (
        <div className='dropdownmenu-container'>
            <li className='dropdownmenu-container li'>
                {children}
            </li> 
        </div>
    )
};


export default DropDownMenu;