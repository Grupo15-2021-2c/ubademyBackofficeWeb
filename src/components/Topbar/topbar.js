import React from "react";
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import logo from '../../images/ubademylogo.png';
import image from '../../images/avatar.png';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='top-wrapper'>
                <div className='top-left'><img src={logo} className="logo" alt="logo" /></div>
                <div className='top-right'>
                    <div className='topbar-icons-container'>
                        <NotificationsNone/>
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='topbar-icons-container'>
                        <Language/>
                        <span className='top-icon-badge'>2</span>
                    </div>
                    <div className='topbar-icons-container'>
                        <Settings/>
                    </div>
                    <img src={image} alt='' className='top-avatar' />
                </div>
            </div>
        </div>
    )
}

export default Topbar;