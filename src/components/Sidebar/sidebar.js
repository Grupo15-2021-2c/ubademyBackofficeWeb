import React from "react";
import './sidebar.css';
import { LineStyle, TrendingUp, SupervisorAccountOutlined, PeopleAltOutlined, BarChart, PieChart } from '@material-ui/icons';
import { ListItem } from '@material-ui/core';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Usuarios</h3>
                    <div className='sidebar-list'>
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
                        <li >
                            <NavLink exact to="/dashboard/courses" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <TrendingUp className='sidebar-icon'/>
                                    Cursos
                                </ListItem>
                            </NavLink>
                        </li>
                    </div>
                    <h3 className='sidebar-title'>Quick Menu</h3>
                    <div className='sidebar-list'>
                        <li >
                            <NavLink to="/dashboard/admin" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <SupervisorAccountOutlined className='sidebar-icon'/>
                                    Administradores
                                </ListItem>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/analytics" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <BarChart className='sidebar-icon'/>
                                    Análisis
                                </ListItem>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/dashboard/courses-analytics" className='sidebar-list-item' activeClassName='active'>
                                <ListItem button>
                                    <PieChart className='sidebar-icon'/>
                                    Análisis de Cursos
                                </ListItem>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;