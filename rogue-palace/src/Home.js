import { useEffect, useState, React } from 'react';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Button,  Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Tab, Tabs } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import TeacherCard from './Cards/TeacherCard';
import GroupeCard from './Cards/GroupeCard';
import PersonnageCard from './Cards/PersonnageCard';
import SubjectCard from './Cards/SubjectCard';
import Navbar from "./Modules/navbar";
import './CSS/App.css';

const homeTheme = createTheme({
  palette: {
    primary: {
      main: '#434343',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function Home(props) {
  
  const [tabValue, setTabValue] = useState(1);
  const [groupe, setGroupe] = useState([]);
  const [personnage, setPersonnage] = useState([]);
  const [utilisateur, setUtilisateur] = useState([]);

  useEffect(() => {
    if (tabValue == 1) {
      console.log('1')
      refreshPersonnage();
    }
    if (tabValue == 2) {
      console.log('2')
      refreshGroupe();
    }
  }, [tabValue])


  function refreshGroupe(){
    axios.get("https://localhost:7183/groupe", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      console.log(res.data);
      setGroupe(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }

  function refreshPersonnage(){
    axios.get("https://localhost:7183/character", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      setPersonnage(res.data);
    }).catch((err) => {
      console.log(err);
    })

  }
  
  function refreshUtilisateur(){
    axios.get("https://localhost:7183/user/", {
      headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
      setUtilisateur(res.data);
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
        <Box sx={{ width: '95%', flexGrow: '1', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
          <AppBar position="static">
            <Tabs value={tabValue} onChange={handleChangeTab} centered textColor='secondary' indicatorColor='secondary' aria-label='tabs' >
              <Tab label="Personnage" value="1"/>
              <Tab label="Groupe" value="2" />
            </Tabs>
            
            <TabContext value={tabValue}>
              <TabPanel value='1'>
                {personnage.map((item, index) => (
                  <PersonnageCard key={index} personnage={item}/>
                ))}
              </TabPanel>

              <TabPanel value='2'>
                {groupe.map((item, index) => (
                  <GroupeCard key={index} groupe={item}/>
                ))}
              </TabPanel>
            </TabContext>
          </AppBar>
        </Box>
      </ThemeProvider>
    </div>
  );
}
  
export default Home;

