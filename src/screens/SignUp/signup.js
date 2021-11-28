import React, { useState } from 'react';
import { Input, Title, Label } from '../../components';
import logo from '../../images/ubademylogo.png';
import './singup.css';


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value){
        if(name === 'name'){
            setName(value)
        } else if (name === 'email'){
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    function handleSubmit(){
        let account = { name, email, password }
        if(account){
            console.log(account)
        }
    }

    return (
        <div className='index-container'>
            <Title text='Bienvenido!' />
            <img src={logo} className="App-logo" alt="logo" />
            <Label text='Name' />
            <Input attribute={{
                id: 'name',
                name: 'name',
                type: 'text',
                placeholder: 'Ingrese su Nombre'
            }}
            handleChange={handleChange} />
            <Label text='Email' />
            <Input attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange} />
            <Label text='Password' />
            <Input attribute={{
                id: 'password',
                name: 'password',
                type: 'text',
                placeholder: 'Ingrese su contraseña',
            }}
            handleChange={handleChange} />
            <div className='submit-button-container'>
                <button className='submit-button'
                    onClick={handleSubmit}>
                    Sign Up!
                </button>
            </div>
            <Label text='Ya estás registrado?' />
            <div className='submit-button-container'>
                <button className='link-button' onClick={() => window.location=`/`}>
                    <Label text='Login!' />
                </button>
            </div>
        </div>
    );
}

export default SignUp;