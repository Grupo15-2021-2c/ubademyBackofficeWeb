import React from "react";
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, SupervisorAccountOutlined, PeopleAltOutlined } from '@material-ui/icons';
import { ListItem } from '@material-ui/core';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Usuarios</h3>
                    <u1 className='sidebar-list'>
                        <li>
                            <NavLink exact to="/dashboard" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <LineStyle className='sidebar-icon'/>
                                    Home
                                </ListItem>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/dashboard/users" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <PeopleAltOutlined className='sidebar-icon'/>
                                    Usuarios
                                </ListItem>
                            </NavLink>
                        </li>
                        <li className='sidebar-list-item'>
                            <ListItem button>
                                <TrendingUp className='sidebar-icon'/>
                                Cursos
                            </ListItem>
                        </li>
                    </u1>
                    <h3 className='sidebar-title'>Quick Menu</h3>
                    <u1 className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <NavLink to="/dashboard/admin" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <VerifiedUserOutlined className='sidebar-icon'/>
                                    Administradores
                                </ListItem>
                            </NavLink>
                        </li>
                        <li className='sidebar-list-item'>
                            <ListItem button>
                                <Timeline className='sidebar-icon'/>
                                Análisis
                            </ListItem>
                        </li>
                        <li className='sidebar-list-item'>
                            <ListItem button>
                                <TrendingUp className='sidebar-icon'/>
                                Cursos
                            </ListItem>
                        </li>
                    </u1>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;