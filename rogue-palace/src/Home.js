import { useEffect, useState, React } from 'react';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Button,  Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import TeacherCard from './Cards/TeacherCard';
import GroupeCard from './Cards/GroupeCard'
import SubjectCard from './Cards/SubjectCard';
import Navbar from "./Modules/navbar";
import './CSS/App.css';

const homeTheme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function Home(props) {
  
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState([]);
  const [groupe, setGroupe] = useState([]);
  const [personnage, setPersonnage] = useState([]);
  const [utilisateur, setUtilisateur] = useState([]);

  useEffect(() => {
    refreshTeachers();
    refreshSubject();
  }, [])


  function refreshGroupe(){
    axios.get("https://localhost:7176/groupe/", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setSubject(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  function refreshPersonnage(){
    axios.get("https://localhost:7176/personnage/", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setSubject(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }
  
  function refreshUtilisateur(){
    axios.get("https://localhost:7176/user/", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setSubject(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  function refreshTeachers(){
    axios.get("https://localhost:7176/teachers", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setTeachers(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function refreshSubject(){
    axios.get("https://localhost:7176/subject", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setSubject(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Navbar />    
      <ThemeProvider theme={homeTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                <div className=''>
                  <Button className='' color="inherit" onClick={() => refreshPersonnage()} variant="outlined">Personnage</Button>
                  <Button className='' color="inherit" onClick={() => refreshGroupe()} variant="outlined">Groupe</Button>
                </div>
              </Typography>
            </Toolbar>
            <div className="card-container">
              <div className='charactercard'>
                {subject.map((item, index) => (
                  // <PersonnageCard key={index} subject={item}/>
                  <SubjectCard key={index} subject={item}/>
                ))}
              </div>
              <div className='groupcard'>
                {teachers.map((item, index) => (
                  <GroupeCard key={index} index={item}/>
                  // <TeacherCard key={index} teacher={item}/>
                ))}
              </div>
            </div>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
  
export default Home;

