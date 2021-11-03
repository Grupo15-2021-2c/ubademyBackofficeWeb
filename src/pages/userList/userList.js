import React, { useEffect, useState } from "react";
import './userList.css';
import { Title, Modal, Label, Input, passwordRegex, validateEmail } from '../../components';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Visibility, BlockOutlined } from "@material-ui/icons";
import axios from 'axios';

const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users';



function UserList() {


    const [user, setUser] = useState({});
    //const [userData, setUserData] = useState();
    const [userInfos, setUserInfos] = useState([]);
    const [toggleRefreshList, setToggleRefreshList] = useState(false);
    const [show, setShow] = useState(false);
    const [showVisualization, setShowVisualization] = useState(false);
    const [showDeletion, setShowDeletion] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseVisualitazion = () => setShowVisualization(false);
    const handleShowVisualitazion = () => setShowVisualization(true);
    const handleCloseDeletion = () => setShowDeletion(false)
    const handleShowDeletion = () => setShowDeletion(true);
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSave = () => {
        if (firstName && lastName && email && password)
        setUser({ 
            id: user.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        });
        console.log("user:", user);
        axios
            .put(url+ "/" + user.id, {firstName: `${firstName}`, lastName: `${lastName}`, email: `${email}`, password: `${password}`})
            .then(res => { 
                console.log("res",res);
                setToggleRefreshList(!toggleRefreshList);
                handleClose();
            });
    }

    const handleEdition = (params) => {
        setUser({ 
            id: params.row.id,
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            email: params.row.email,
            password: params.row.password
        });
        console.log(params.row);
        handleShow();
    };
    
    const handleConfirmDeletion = (params) => {
        setUser({ 
            id: params.row.id,
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            email: params.row.email,
            password: params.row.password
        });

        handleShowDeletion(true);
    };

    const handleDeletion= (id) => {
        axios
        .delete(url+ "/" + id)
            .then(res => { 
                console.log(res);
                setToggleRefreshList(!toggleRefreshList);
                handleCloseDeletion();
            })
    }

    const handleVisualization = (params) => {
        setUser({ 
            id: params.row.id,
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            email: params.row.email,
            password: params.row.password,
            role: params.row.role
        });
        handleShowVisualitazion(true)

    };
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
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
                    <BlockOutlined className='users-delete' onClick={() => handleConfirmDeletion(params)}/>
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


    function togglePasswordVisiblity(){
        var tipo = document.getElementById("password");
        if(tipo.type === "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }

    
    function handleChange(name, value){

        switch (name) {
        case 'email':
            if (!validateEmail(value)){
                setEmailError(true);
            }else {
                setEmail(value);
                setEmailError(false);
            }
          break;
        case 'password':
            if (!RegExp(passwordRegex).test(value)){
                setPasswordError(true);
          }else{
            setPassword(value);
            setPasswordError(false);
          }
          break;
        case 'firstName':
          setName(value);
          break;
        case 'lastName':
            setLastName(value);
            break;
        default:
            break;
        }
      }  

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
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                    </div>
                </li>
            </ui>
            <Modal title={user} visibility={show} editing={show} onClose={handleClose} onSave={handleSave}>
                <div className='modal-body'>
                    <u1 className='modal-list'>
                        <li className='modal-list-item'>
                            <Label text='First Name'/>
                            <div className='modal-input-container' >
                            <Input attribute={{
                                id: 'firstName',
                                name: 'firstName',
                                type: 'text',
                                placeholder: user.firstName,
                            }}
                            handleChange={handleChange}
                            />                     
                            </div>

                        </li>
                        <li className='modal-list-item'>
                            <Label text='Last Name'/>
                            <div className='modal-input-container' >
                            <Input attribute={{
                                id: 'lastName',
                                name: 'lastName',
                                type: 'text',
                                placeholder: user.lastName
                            }}
                            handleChange={handleChange}
                            />
                            </div>
                        </li>
                        <li className='modal-list-item'>
                            <Label text='Email'/>
                            <div className='modal-input-container' >
                            <Input attribute={{
                                id: 'email',
                                name: 'email',
                                type: 'text',
                                placeholder: user.email
                            }}
                            handleChange={handleChange}
                            param={emailError}
                            />
                            </div>
                        </li>
                        <li className='modal-list-item'>                        
                            <Label text='Password'/>
                            <div className='modal-pass' >
                            <Input attribute={{
                                id: 'password',
                                name: 'password',
                                type: 'text',
                                placeholder: 'Ingrese su nueva Contraseña'
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                            />
                            <Visibility className='modal-eye-icon' onClick={togglePasswordVisiblity}/>
                            </div>
                        </li>
                    </u1>                    
                </div>
                <div className='modal-footer'>
                    <button onClick={() => handleClose()} 
                    data-disabled='modal' className='modal-button'>
                        Cancelar
                    </button>
                    <button onClick={() => handleSave()} 
                    data-disabled='modal' className='modal-button'>
                        Guardar
                    </button>
                </div>
            </Modal>
            <Modal title={user} visibility={showVisualization} editing={show} onClose={handleCloseVisualitazion}>
                <div className='modal-body'>
                    <u1 className='modal-list'>
                        <li className='modal-list-item'>
                            <Label text='User id'/>
                            <div className='modal-visualizing-container' >
                                {user.id}
                            </div>
                        </li>
                        <li className='modal-list-item'>
                            <Label text='First Name'/>
                            <div className='modal-visualizing-container' >
                                {user.firstName}
                            </div>
                        </li>
                        <li className='modal-list-item'>
                            <Label text='Last Name'/>
                            <div className='modal-visualizing-container' >
                                {user.lastName}
                            </div>
                        </li>
                        <li className='modal-list-item'>
                            <Label text='Email'/>
                            <div className='modal-visualizing-container' >
                                {user.email}
                            </div>
                            <li className='modal-list-item'>
                                <Label text='Email'/>
                                <div className='modal-visualizing-container' >
                                    {user.email}
                                </div>
                            </li>
                        </li>
                        <li className='modal-list-item'>
                            <Label text='Role'/>
                            <div className='modal-visualizing-container' >
                                {user.role}
                            </div>
                        </li>
                    </u1>                    
                </div>
                <button onClick={() => handleCloseVisualitazion()} 
                data-disabled='modal' className='modal-button-exit'>
                    Salir
                </button>
            </Modal>
            <Modal title={user} visibility={showDeletion} editing={show} onClose={handleCloseDeletion}>
                <div className='modal-body'>
                    <u1 className='modal-list'>
                        <li className='modal-list-item'>
                            <Label text={'¿Está seguro que desea eliminar al usuario: ' + user.firstName + ' ' + user.lastName + '?'}/>
                        </li>
                    </u1>
                </div>
                <div className='modal-footer'>
                    <button onClick={() => handleCloseDeletion()} 
                    data-disabled='modal' className='modal-button'>
                        Cancelar
                    </button>
                    <button onClick={() => handleDeletion(user.id)} 
                    data-disabled='modal' className='modal-button'>
                        Confirmar
                    </button>
                </div>
            </Modal>
          </div>
      </div>
      </>
    );
  }
  
  export default UserList;

// modal para confirmar el delete

