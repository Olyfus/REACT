import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Base64 } from 'js-base64';
import Home from './Home';
import Login from './Login';
import Endpoint from './endpoint';
import Character from './character';
import Profile from './profile';
import WebFont from 'webfontloader';
import './CSS/App.css';
console.log("App : Start")

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
    console.error(err);
    return true;
  }
}

function ProtectedRoute( { children } ){
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  if (isTokenExpired(token)){
    return(navigate("/"));
  }
  
  return children;
}

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans Hanunoo']
      }
    })
  })

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Endpoint/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/home' element={<Home/>}/>
    //     <Route path='/character/:id' element={<Character/>}/>
    //     <Route path='/profile/:id' element={<Profile/>}/>
    //   </Routes>
    // </BrowserRouter>  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Endpoint/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/character/:id' element={<ProtectedRoute><Character/></ProtectedRoute>}/>
        <Route path='/profile/:id' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;