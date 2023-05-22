import { useEffect, useState, React } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Navbar from './Modules/navbar';
import './CSS/login.css';


function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showForm, setShowForm] = useState('1');
    const [formDataLogin, setFormDataLogin] = useState({ email: '', password: '' });
    const [formDataSignup, setFormDataSignUp] = useState({ pseudo: '', email: '', password: '' });
    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        
        axios.post("https://localhost:7183/auth/login", formDataLogin)
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("access_token", res.data.token);
                    navigate("/home");
                };
            })
            .catch(() => {
                console.log("Id incorrects.");
            });

    }

    const onSubmitSignup = (event) => {
        event.preventDefault();

        axios.post("https://localhost:7183/auth/signup", formDataSignup)
        .then((res) => {
            if (res.data) {
                setTimeout(function() {
                    navigate("/login");
                })
            };
        })
        .catch(() => {
            console.log("Signup incorrects.");
        });
    }

    const handleChangeLogin = (event) => {
        setFormDataLogin({
            ...formDataLogin,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeSignup = (event) => {
        setFormDataSignUp({
            ...formDataSignup,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeForm = (event, newValue) => {
        setShowForm(newValue);
    }

    return (
        <div className="aruteza">
            <div className="Login">
                <form autoComplete='off' className='form' onSubmit={(event) => onSubmitLogin(event)}>
                    <div className='control'>
                        <h1>
                        Sign In
                        </h1>
                    </div>
                    <div class='control block-cube block-input'>
                        <input onChange={(event) => handleChangeLogin(event)} name="email" type="text" placeholder="Email"/>
                        <div className='bg-top'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                        <div className='bg-inner'></div>
                        </div>
                    </div>
                    <div className='control block-cube block-input'>
                        <input onChange={(event) => handleChangeLogin(event)} name="password" type="password" placeholder="Password"/>
                        <div className='bg-top'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                        <div className='bg-inner'></div>
                        </div>
                    </div>
                    <button className='btn block-cube block-cube-hover' type="submit">
                        <div className='bg-top'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg-right'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='bg'>
                        <div className='bg-inner'></div>
                        </div>
                        <div className='text'>
                            Log In
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
  }

export default Login;