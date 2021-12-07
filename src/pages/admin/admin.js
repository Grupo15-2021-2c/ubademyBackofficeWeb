import React, { useState } from 'react';
import './admin.css';
import { Input, Title, Label, passwordRegex, validateEmail } from '../../components';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import logo from '../../images/ubademylogo.png';
import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";

const url = API_BASE_URL + '/users/admins/register';


function Admin() {

  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [visible, setVisible] = useState(true);

  function handleChange(firstName, value){

    switch (firstName) {
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

  function handleSubmit(){
    if(!emailError && !passwordError){
      const payload = {
          "firstName": `${firstName}`,
          "lastName": `${lastName}`,
          "email": `${email}`,
          "password": `${password}`
      };
      axios({
          method: 'post',
          url: `${url}`,
          data: payload
      })
          .then(res => { 
              console.log(res.statusText);
              alert(res.statusText);
              window.location.reload(false);
          })
          .catch(error => {
              console.log(error);
              alert(error);
          });
      }else{
          if(emailError){
              alert("Usuario inválido");
          }else{
              alert("Contraseña inválidas");
          }
      }
  }

  function togglePasswordVisiblity(){
    var tipo = document.getElementById("password");
    if(tipo.type === "password"){
        tipo.type = "text";
        setVisible(true);
    }else{
        tipo.type = "password";
        setVisible(false);
    }
}

  return (
    <div className='admin'>
      <div className='admin-container'>
        <ui className='admin-list'>
          <img src={logo} className="App-logo" alt="logo" />
          <li style={{listStyleType: 'none'}}>
            <Title text='Añadir nuevo Administrador!' />
          </li>
          <li className='admin-list-item'>
            <Label text='Name'/>
            <div className='admin-input-container'>
            <Input attribute={{
                id: 'firstName',
                name: 'firstName',
                type: 'text',
                placeholder: 'Ingrese su Nombre'
            }}
            handleChange={handleChange} />
            </div>
          </li>
          <li className='admin-list-item'>
            <Label text='Last Name'/>
            <div className='admin-input-container'>
            <Input attribute={{
                id: 'lastName',
                name: 'lastName',
                type: 'text',
                placeholder: 'Ingrese su Apellido'
            }}
            handleChange={handleChange} />
            </div>
          </li>
          <li className='admin-list-item'>
            <Label text='Email' />
            <div className='admin-input-container'>
            <Input attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange}
            param={emailError}
            />
            </div>
          </li>
          <li className='admin-list-item'>
            <Label text='Password' />
            <div className='admin-pass'>
            <Input attribute={{
                id: 'password',
                name: 'password',
                type: 'password',
                placeholder: 'Ingrese su contraseña',
            }}
            handleChange={handleChange}
            param={passwordError}/>
            {visible ? <Visibility className='admin-eye-icon' onClick={togglePasswordVisiblity}/> : <VisibilityOff className='admin-eye-icon' onClick={togglePasswordVisiblity}/>}
            </div>
          </li>
          <li className='admin-list-item-button'>
              <button className='admin-submit-button'
                  onClick={(handleSubmit)}>
                  Añadir!
              </button>
          </li>
        </ui>
      </div>
    </div>
    );
  }
  
  export default Admin;