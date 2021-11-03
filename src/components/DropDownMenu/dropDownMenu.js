import React from "react";

import './dropDownMenu.css';


const DropDownMenu = ({children}) =>{
    return (
        <div className='dropdownmenu-container'>
            {children}
        </div>
    )
};


export default DropDownMenu;