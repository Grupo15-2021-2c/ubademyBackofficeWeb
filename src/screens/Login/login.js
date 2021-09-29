import React, { useState } from 'react';
import { MailOutline, LockOutlined, Visibility } from '@material-ui/icons';
import { Input, Title, Label } from '../../components';
import logo from '../../images/ubademylogo.png';
import '../index.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setVisible] = useState();

    function handleChange(name, value){
        if (name === 'email'){
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    function handleSubmit(){
        let account = { email, password }
        window.location='/dashboard'
        if(account){
            console.log(account)
        }
    }

    function togglePasswordVisiblity(){
        var tipo = document.getElementById("password");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }
    
    /*function handleIsLoginActive(){
        let isLoginActive = false;
        console.log("register")
    }*/


    return (
        <div className='index-container'>
            <Title text='Bienvenido!' />
            <img src={logo} className="App-logo" alt="logo" />
            <u1 className='index-list'>
                <li className='index-list-icons'>
                    <MailOutline/>
                    <Label text='Usuario' />
                </li>
            </u1>
            <Input attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange} />
            <u1 className='index-list'>
                <li className='index-list-icons'>
                    <LockOutlined/>
                    <Label text='Contraseña' />
                </li>
            </u1>
            <u1 className='index-pass'>
                <li className='index-pass-icons'>
                    <Input attribute={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Ingrese su contraseña',
                    }}
                    handleChange={handleChange}
                    >
                    </Input>
                    <Visibility className='index-eye-icon' onClick={togglePasswordVisiblity}/>
                </li>
            </u1>
            <div className='submit-button-container'>
                <button className='submit-button'
                    onClick={handleSubmit}>
                    Login!
                </button>
            </div>
            <div className='submit-button-container'>
                <button className='link-button' onClick={(e) => window.location=`/signup`}>
                    <Label text='Olvidaste tu contraseña?' />
                </button>
            </div>
        </div>
    );
}

export default Login;