import axios from "axios";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
import './login.css';

function Login(props) {

    const [formData, setFormData] = useState({email: '', password: ''})
    const onSubmit = (event) => {
        event.preventDefault();
        
        axios.post("https://localhost:7176/auth/login", formData)
            .then((res) => {
                localStorage.setItem("access_token", res.data.token);
                <Navigate to="/Home"></Navigate>
            })
            // .catch(() => {
            //     console.log("Id incorrects.");
            // });

    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
      <div className="Login">
        <form autocomplete='off' class='form' onSubmit={(event) => onSubmit(event)}>
            <div class='control'>
                <h1>
                Sign In
                </h1>
            </div>
            <div class='control block-cube block-input'>
                <input onChange={(event) => handleChange(event)} name="email" type="text" placeholder="Email"/>
                <div class='bg-top'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                <div class='bg-inner'></div>
                </div>
            </div>
            <div class='control block-cube block-input'>
                <input onChange={(event) => handleChange(event)} name="password" type="password" placeholder="Password"/>
                <div class='bg-top'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                <div class='bg-inner'></div>
                </div>
            </div>
            <button class='btn block-cube block-cube-hover' type="submit">
                <div class='bg-top'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                <div class='bg-inner'></div>
                </div>
                <div class='text'>
                    Log In
                </div>
            </button>
        </form>
      </div>
    );
  }
  
  export default Login;