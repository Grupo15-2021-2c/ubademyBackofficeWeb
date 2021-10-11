import React, { useEffect, useState } from "react";
import './userList.css';
import { Title, Modal } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users';



function UserList() {


    const [user, setUser] = useState({});
    const [userData, setUserData] = useState();
    const [userInfos, setUserInfos] = useState([]);
    const [toggleRefreshList, setToggleRefreshList] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdition = (params) => {
        const userId = params.row.id;

        setUser({ 
            id: params.row.id,
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            email: params.row.email
        });
        console.log(user);
        handleShow();
        /*axios
            .put(url+ "/" + userId, {...params.row, id: 2, firstName:"torta", lastName:"Manzana"})
            .then(res => { 
                console.log(res);
                setToggleRefreshList(!toggleRefreshList);
            })*/
    };
    
    const handleDeletion = (params) => {
        console.log("DELETE", params.row);

        const userId = params.row.id

        axios
        .delete(url+ "/" + userId)
            .then(res => { 
                console.log(res);
                setToggleRefreshList(!toggleRefreshList);
            })
    };
    
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
                    <button className='users-edit' onClick={() => handleEdition(params)}>
                        Edit
                    </button>
                    <DeleteOutline className='users-delete' onClick={() => handleDeletion(params)}/>
                    </>
                )
            }
        }
      ];


    const fetchUserList = () => {
        return axios.get(url)
        .then(({data}) => {
            //handle succes
            console.log('res',data);
            setToggleRefreshList(!toggleRefreshList);
            return data.data;
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
      },[toggleRefreshList]);

      
      
    return (
    <>
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
      <div>
      <Modal title={user} show={show}/>;
      </div>
      </>
    );
  }
  
  export default UserList;