import { useEffect, useState, React } from 'react';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Button,  Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TeacherCard from './Cards/TeacherCard';
import GroupeCard from './Cards/GroupeCard';
import PersonnageCard from './Cards/PersonnageCard';
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
  const [tabValue, setTabValue] = useState('1');
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

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <Navbar />    
      <ThemeProvider theme={homeTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <TabContext value={tabValue}>
              <Toolbar>
                <TabList onChange={handleChangeTab} sx={{ borderColor: 'divider' }} aria-label='lab tabs' >
                  <Tab label="Personnage" value="1"/>
                  <Tab label="Groupe" value="2" />
                  <Tab label="Teacher" value="3" />
                  <Tab label="Subject" value="4" />
                </TabList>
              </Toolbar>

              <TabPanel value='1'>
                perso
                {personnage.map((item, index) => (
                  <PersonnageCard key={index} subject={item}/>
                ))}
              </TabPanel>

              <TabPanel value='2'>
                groupe
                {groupe.map((item, index) => (
                  <GroupeCard key={index} index={item}/>
                ))}
              </TabPanel>

              <TabPanel value='3'>
                teachers
                {teachers.map((item, index) => (
                  <TeacherCard key={index} teacher={item}/>
                  ))}
              </TabPanel>

              <TabPanel value='4'>
                subject
                {subject.map((item, index) => (
                  <SubjectCard key={index} subject={item}/>
                ))}
              </TabPanel>
              <div className="card-container">
                <div className='charactercard'>
                  {subject.map((item, index) => (
                    <SubjectCard key={index} subject={item}/>
                    ))}
                </div>
                <div className='groupcard'>
                  {teachers.map((item, index) => (
                    <TeacherCard key={index} teacher={item}/>
                    ))}
                  {/* {groupe.map((item, index) => (
                    <GroupeCard key={index} index={item}/>
                  ))} */}
                  
                </div>
              </div>
            </TabContext>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
  
export default Home;

