import React, { useState } from 'react';
import { MailOutline, LockOutlined, Visibility } from '@material-ui/icons';
import { Input, Title, Label, passwordRegex, validateEmail } from '../../components';
import logo from '../../images/ubademylogo.png';
import './login.css';
import { Link, Grid } from '@material-ui/core';
import axios from 'axios'; 


const url = 'https://ubademy-g15-back-node-stage.herokuapp.com/api/users/login';

const Login = () => {
    //const [account, setAccount] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    function handleChange(name, value){
        if (name === 'email'){
            if (!validateEmail(value)){
                setEmailError(true);
            }else{
                setEmail(value);
                setEmailError(false);
            }
        } else {
            if (!RegExp(passwordRegex).test(value)){
                setPasswordError(true);
            }else{
                setPassword(value);
                setPasswordError(false);
            }
        }
    }

    function handleSubmit(){
        const payload = {
            "email": `${email}`,
            "password": `${password}`
        };
        axios({
            method: 'post',
            url: `${url}`,
            data: payload
        })
            .then(res => { 
                console.log(res);
                localStorage.setItem('access_token', "OK");
                window.location='/dashboard';
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert("Usuario o contraseña inválidas");
            });    
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
        <div className='index-container'>
            <Title text='Bienvenido!' />
            <img src={logo} className="App-logo" alt="logo" />
            <u1 className='index-list'>
                <li className='index-list-icons'>
                    <MailOutline/>
                    <Label text='Usuario' />
                </li>
            </u1>
            <u1 className='index-list'>
                <li className='index-pass-icons'>
            <Input attribute={{
                id: 'email',
                name: 'email',
                type: 'text',
                placeholder: 'Ingrese su Email'
            }}
            handleChange={handleChange}
            param={emailError}
            />
            </li>
            </u1>
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
                    param={passwordError}
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
            <div>
            <Grid item>
                <Link href="/SignUp" >
                    <div className='link-button'>
                        {'Olvidaste tu contraseña?'}
                    </div>
                </Link>
            </Grid>
            </div>
        </div>
    );
}

export default Login;