import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Base64 } from 'js-base64';
import '../CSS/Navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navTheme = createTheme({
  palette: {
    primary: {
      main: '#52587e',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function isTokenExpired(token) {
    if (token === null) {
      return true;
    }
    try {
      // Décoder le token pour récupérer les données de payload
      const payload = JSON.parse(Base64.decode(token.split(".")[1]));
      // Récupérer la propriété 'exp' qui contient un timestamp
      const expiresAt = payload.exp;
      // Transformer le timestamp en date
      const expirationDate = new Date(expiresAt * 1000);
      // Vérifier si la date d'expiration est supérieure à l'heure actuelle
      return expirationDate < new Date();
    } catch (err) {
      console.log(err);
      return true;
    }
  }

// function Navbar(props) {
const Navbar = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const pseudo = localStorage.getItem("pseudo");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
      setIsConnected(!isTokenExpired(localStorage.getItem("access_token")))
  }, [location])

  const disconnect = () => {
      localStorage.removeItem("access_token");
      return navigate("/")
  }
  const connect = () => {
      return navigate("/login")
  }
  
  return (
  <div>
    <ThemeProvider theme={navTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className='app-navbar' position="static">
          <Toolbar>
            <img className='logo' src='https://i.postimg.cc/HW48RBM4/Ahjin.png'/>
            {/* <a className='' href='/'>
              </a> */}
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              RoguePalace
            </Typography>
              {
                isConnected && <Button color="inherit" onClick={() => disconnect()}> Déconnexion </Button>
              }
              {
                !isConnected && <Button color="inherit" onClick={() => connect()}> Connexion </Button>
              }
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  </div>
  )
}
export default Navbar;