import React, { useState } from "react";
import { Input, Label } from "../../components";
import { SettingsPhoneTwoTone, Visibility } from '@material-ui/icons';
import './modal.css';


function Modal({title, data, dataKey, show}) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    if(!show){
        return null;
    }

    function handleClose(){
        show = false;
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
        case 'name':
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
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
                <h4 className='modal-title'>Editing {title.firstName} {title.lastName}</h4>
            </div>
            <div className='modal-body'>
                <u1 className='modal-list'>
                    <li className='modal-list-item'>
                        <Label text='First Name'/>
                        <div className='modal-input-container' >
                        <Input attribute={{
                            id: 'name',
                            name: 'name',
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
                <button onClick={() => handleClose} className='modal-button'>
                    Close
                </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Modal;