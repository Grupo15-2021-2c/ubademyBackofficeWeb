import React, { useState, Fragment } from "react";
import { Input, Label } from "../../components";
import { Visibility } from '@material-ui/icons';
import { Box, Fade } from '@material-ui/core';
import './modal.css';


function Modal({title, onClose, onSave, visibility}) {

    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    if(!visibility){
        return null;
    }

    function handleClose(){
        visibility = false;
    }

    function handleChange(name, value){

        switch (name) {
        case 'email':
          if(value.indexOf("@") < 0){
            setEmailError(true);
          }else {
            setEmail(value);
            setEmailError(false);
          }
          break;
        case 'password':
          if (value.length < 6){
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

    function togglePasswordVisiblity(){
        var tipo = document.getElementById("password");
        if(tipo.type === "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }

    return (
        <Fade in={visibility}>
        <Box className='modal-container' >
            <div className='modal-content'>
            <div className='modal-header'>
                <h4 className='modal-title'>Editing {title.firstName} {title.lastName}</h4>
            </div>
            <div className='modal-body'>
                <u1 className='modal-list'>
                    <li className='modal-list-item'>
                        <Label text='First Name'/>
                        <div className='modal-input-container' >
                        <Input attribute={{
                            id: 'firstName',
                            name: 'firstName',
                            type: 'text',
                            placeholder: title.firstName,
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
                            placeholder: title.lastName
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
                            placeholder: title.email
                        }}
                        handleChange={handleChange}
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
                        />
                        <Visibility className='modal-eye-icon' onClick={togglePasswordVisiblity}/>
                        </div>
                    </li>
                </u1>                    
            </div>
            <div className='modal-footer'>
                <button onClick={() => onClose()} 
                data-disabled='modal' className='modal-button'>
                    Cancelar
                </button>
                <button onClick={() => onSave(firstName, lastName, email, password, title.id)} 
                data-disabled='modal' className='modal-button'>
                    Guardar
                </button>
            </div>
            </div>
        </Box>
        </Fade>
    );
  }
  
  export default Modal;