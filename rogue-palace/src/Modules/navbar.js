import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Base64 } from 'js-base64';

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

export default function Navbar(props) {

    const [isConnected, setIsConnected] = useState(false);
    
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className='app-navbar' position="static">
          <Toolbar>
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
    </div>
    )
}