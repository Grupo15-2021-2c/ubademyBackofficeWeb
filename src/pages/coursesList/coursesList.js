import React, { useState, useEffect } from 'react';
import './coursesList.css';
import { Title, Modal, Label, Input, passwordRegex, validateEmail } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { Visibility, BlockOutlined } from "@material-ui/icons";
import axios from 'axios';


const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/courses';

function CoursesList() {

  const [user, setUser] = useState({});
  //const [userData, setUserData] = useState();
  const [userInfos, setUserInfos] = useState([]);
  const [toggleRefreshList, setToggleRefreshList] = useState(false);
  const [showVisualization, setShowVisualization] = useState(false);
  const handleShowVisualitazion = () => setShowVisualization(true);


  const handleVisualization = (params) => {
    setUser({ 
        id: params.row.id,
        firstName: params.row.firstName,
        lastName: params.row.lastName,
        email: params.row.email,
        password: params.row.password,
        blocked: params.row.blocked,
        role: params.row.role
    });
    handleShowVisualitazion(true)

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'owner', headerName: 'Owner', width: 150 },
    //{ field: 'lastName', headerName: 'Last name', width: 150 },
    //{ field: 'email', headerName: 'Email', width: 200 },
    { field: 'blocked', headerName: 'Blocked', width: 200 },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                <Visibility className='users-visualize' onClick={() => handleVisualization(params)}/>
                </>
            )
        }
    }
  ];


  const fetchUserList = () => {
    return axios.get(url)
    .then(({data}) => {
        //handle succes
        setToggleRefreshList(toggleRefreshList);
        return data.data;
    })
    .catch(err =>{
        //handle error
        console.error("error",err);
    })
}

  useEffect(() => {
    fetchUserList().then((userData) => {
        //setUserData(JSON.stringify(userData) || 'No user data found');
        setUserInfos(userData);
    });
  },[toggleRefreshList]);

  return (
    <div className='courses'>
      <div className='courses-container'>
      <ui className='courses-list'>
                <li style={{listStyleType: 'none'}}>
                    <Title text='Listado de Cursos' />
                    <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={userInfos}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                    </div>
                </li>
            </ui>
      </div>
    </div>
    );
  }
  
  export default CoursesList;
