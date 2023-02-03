import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Palace from './palace';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Protected from './protected';
import { Base64 } from 'js-base64';

function isTokenExpired(token) {
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
  const token = localStorage.getItem("access_token");
  if (token === null || isTokenExpired(token)){
    return(<Navigate to="/login"></Navigate>)
  }

  return children;
}

function App() {

  const [test, setTest] = useState('');

  const handleClick = () => {
    setTest('On a catch le click.');
  }
  const disconnect = () => {
    localStorage.removeItem("access_token");
    return <Navigate to="/login"></Navigate>
  }
  return (
    <BrowserRouter>
    <button onClick={() => disconnect()}>Déco</button>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/protected' element={<ProtectedRoute><Protected/></ProtectedRoute>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;