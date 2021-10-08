import React, { useState } from 'react';
import './admin.css';
import { Input, Title, Label } from '../../components';
import { Visibility } from '@material-ui/icons';
import logo from '../../images/ubademylogo.png';

function Admin() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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

  function handleSubmit(){
    let account = { name, lastName, email, password }
    if(account){
        console.log(account)
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
                id: 'name',
                name: 'name',
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
            <Visibility className='admin-eye-icon' onClick={togglePasswordVisiblity}/>
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


  //endpoint register
  /*curl --location --request POST 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Caballo",
    "lastName": "Con Tacos",
    "email": "caba@ubademy.com",
    "password": "123456"
}'*/