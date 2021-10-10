import React, { useState } from 'react';
import './admin.css';
import { Input, Title, Label } from '../../components';
import logo from '../../images/ubademylogo.png';

function Admin() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(name, value){
    if (name === 'email'){
      console.log(value);
      setEmail(value);
    } else if(name === 'password'){
      console.log(value);
      setPassword(value);
    }else{
      setName(value);
    }
  }

  function handleSubmit(){
    let account = { name, email, password }
    if(account){
        console.log(account)
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
            <Label text='Email' />
            <div className='admin-input-container'>
            <Input attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange} />
            </div>
          </li>
          <li className='admin-list-item'>
            <Label text='Password' />
            <div className='admin-input-container'>
            <Input attribute={{
                id: 'password',
                name: 'password',
                type: 'text',
                placeholder: 'Ingrese su contraseña',
            }}
            handleChange={handleChange} />
            </div>
          </li>
          <li className='admin-list-item'>
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