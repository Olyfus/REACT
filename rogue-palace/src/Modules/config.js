import { useEffect, useState, React } from 'react';
import axios from "axios";

// Mui
// Material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Lab
import { TabPanel,  } from '@mui/lab';

// Misc import
import WebFont from 'webfontloader';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Base64 } from 'js-base64';

// Page 
import App from '../App';
import Home from '../Home';
import Login from '../Login';
import Endpoint from '../endpoint';
import Character from '../character';
import Profile from '../profile';
import Navbar from '../Modules/navbar';
import reportWebVitals from '../reportWebVitals';

// Custom Cards
import TeacherCard from '../Cards/TeacherCard';
import SubjectCard from '../Cards/SubjectCard';
import GroupeCard from '../Cards/GroupeCard';

const config = {
    React, axios, useEffect, useState, 
    
    AppBar, Box, Card, CardActions, CardContent, Button, Typography, InputLabel, Select, FormControl, Toolbar, createTheme, ThemeProvider,

    TabPanel, 
    
    BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation, ReactDOM, Base64, WebFont, 

    Home, Login, Endpoint, Character, Profile, App, Navbar, reportWebVitals,

    SubjectCard, TeacherCard, GroupeCard,
};

export default config;