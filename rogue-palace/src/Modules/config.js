import { useEffect, useState, React } from 'react';

// Mui
// Material
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// Lab
import { TabPanel,  } from '@mui/lab';

// Misc import
import axios from "axios";
import WebFont from 'webfontloader';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Base64 } from 'js-base64';

// Page 
import Home from '../Home';
import Login from '../Login';
import Endpoint from '../endpoint';
import Character from '../character';
import Profile from '../profile';

const config = {
    React,
    axios,
    useEffect,
    useState,
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
    Base64,
    TabPanel,
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    WebFont,
    Home,
    Login,
    Endpoint,
    Character,
    Profile,
};

export default config;