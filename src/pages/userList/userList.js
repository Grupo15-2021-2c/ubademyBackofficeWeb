import React, { useEffect, useState } from "react";
import './userList.css';
import { Title } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
    {
        field: 'passwordHash',
        headerName: 'Password Hashed',
        width: 300,
      },
      {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
              return (
                  <>
                  <button className='users-edit'>Edit</button>
                  <DeleteOutline className='users-delete'/>
                  </>
              )
          }
      }
  ];
  

function UserList() {

    const [userData, setUserData] = useState('');
    const [userInfos, setUserInfos] = useState([]);

    const fetchUserList = () => {
        return axios.get(url)
        .then(({data}) => {
            //handle succes
            console.log("response: ",JSON.stringify(data));
            return data;
        })
        .catch(err =>{
            //handle error
            console.error("error",err);
        })
    }

    useEffect(() => {
        fetchUserList().then((userData) => {
            setUserData(JSON.stringify(userData) || 'No user data found');
            setUserInfos(userData);
        });
      },[]);

    return (
      <div className='users'>
          <div className='users-container'>
            <ui className='users-list'>
                <li style={{listStyleType: 'none'}}>
                    <Title text='Listado de Usuarios' />
                    <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={userInfos}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                    </div>
                </li>
            </ui>
          </div>
      </div>
    );
  }
  
  export default UserList;


  /*                        {userInfos.map((userInfo, idx) => (
                            <p>{getFullUserName(userInfo)}</p>
                        ))}                   */