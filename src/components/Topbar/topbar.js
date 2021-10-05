import React from "react";
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import logo from '../../images/ubademylogo.png';
import image from '../../images/avatar.png';
import { Link, Avatar } from '@material-ui/core';

function Topbar( { account }) {

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
        //console.log(color);
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return (
        <div className='topbar'>
            <div className='top-wrapper'>
                <div className='top-left'>   
                    <Link href="/images/ubademylogo.png" >
                        <div>
                            {<img src={logo} className="logo" alt="logo" />}
                        </div>
                    </Link>
                </div>
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
                    <Avatar className='topbar-icons-container' {...stringAvatar('Facundo Walter')} />
                </div>
            </div>
        </div>
    )
}

export default Topbar;

//<img src={image} alt='FW'  className='top-avatar'/>