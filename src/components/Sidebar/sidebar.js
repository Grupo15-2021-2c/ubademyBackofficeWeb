import React from "react";
import './sidebar.css';
import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Usuarios</h3>
                    <u1 className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <LineStyle />
                            Home
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline />
                            Análisis
                        </li>
                        <li className='sidebar-list-item'>
                            <TrendingUp />
                            Cursos
                        </li>
                    </u1>
                    <h3 className='sidebar-title'>Cursos</h3>
                    <u1 className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <LineStyle />
                            Home
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline />
                            Análisis
                        </li>
                        <li className='sidebar-list-item'>
                            <TrendingUp />
                            Cursos
                        </li>
                    </u1>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;