import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';

// Navbar();

function Login(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: '', password: ''})
    const onSubmit = (event) => {
        event.preventDefault();
        
        axios.post("https://localhost:7176/auth/login", formData)
            .then((res) => {
                localStorage.setItem("access_token", res.data.token);
                navigate("/home")
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
    <div className="aruteza">
        <div className="Login">
            <form autoComplete='off' className='form' onSubmit={(event) => onSubmit(event)}>
                <div className='control'>
                    <h1>
                    Sign In
                    </h1>
                </div>
                <div class='control block-cube block-input'>
                    <input onChange={(event) => handleChange(event)} name="email" type="text" placeholder="Email"/>
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
                    <input onChange={(event) => handleChange(event)} name="password" type="password" placeholder="Password"/>
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