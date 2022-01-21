import React, { useState } from 'react';
import { MailOutline, LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { Input, Title, Label, passwordRegex, validateEmail } from '../../components';
import logo from '../../images/ubademylogo.png';
import { setValue } from '../../services/index';
import './login.css';
import axios from 'axios';
import {API_BASE_URL} from "../../constants/constants";


const url = API_BASE_URL + '/users/admins/login';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [visible, setVisible] = useState(false);

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
        if(!emailError && !passwordError){
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
                    console.log(res.data);
                    console.log(res.data.status);
                    localStorage.setItem('access_token', res.data.status);
                    setValue('user', res.data.data);
                    window.location='/dashboard';
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    alert(error.response.data.message);
                });
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
        <div className='index-container'>
            <Title text='Bienvenido!' />
            <img src={logo} className="App-logo" alt="logo" />
            <ul className='index-list'>
                <li className='index-list-icons'>
                    <MailOutline/>
                    <Label text='Usuario' />
                </li>
            </ul>
            <ul className='index-list'>
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
            </ul>
            <ul className='index-list'>
                <li className='index-list-icons'>
                    <LockOutlined/>
                    <Label text='Contraseña' />
                </li>
            </ul>
            <ul className='index-list'>
                <li className='index-pass'>
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
                    {visible ? <Visibility className='admin-eye-icon' onClick={togglePasswordVisiblity}/> : <VisibilityOff className='admin-eye-icon' onClick={togglePasswordVisiblity}/>}
                </li>
            </ul>
            <ul className='submit-button-container'>
                <button className='submit-button'
                    onClick={handleSubmit}>
                    Login!
                </button>
            </ul>
            <div>

            </div>
        </div>
    );
}

export default Login;