import axios from "axios";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

function Login(props) {

    const [formData, setFormData] = useState({email: '', password: ''})
    const onSubmit = (event) => {
        event.preventDefault();
        
        axios.post("https://localhost:7176/auth/login", formData)
            .then((res) => {
                localStorage.setItem("access_token", res.data.token);
                <Navigate to="/protected"></Navigate>
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
        <form onSubmit={(event) => onSubmit(event)}>
            <input onChange={(event) => handleChange(event)} name="email" type="text" placeholder="Email"/>
            <input onChange={(event) => handleChange(event)} name="password" type="password" placeholder="Password"/>
            <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
  
  export default Login;