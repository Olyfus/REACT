import './CSS/App.css';
import config from './Modules/config';
import { Button } from '@mui/material';
import axios from 'axios';
import TeacherCard from './Cards/TeacherCard';
import GroupeCard from './Cards/GroupeCard'
import SubjectCard from './Cards/SubjectCard';
import Navbar from "./Modules/navbar";


function Home(props) {
  
  const [teachers, setTeachers] = config.useState([]);
  const [subject, setSubject] = config.useState([]);
  const [groupe, setGroupe] = config.useState([]);
  const [personnage, setPersonnage] = config.useState([]);
  const [utilisateur, setUtilisateur] = config.useState([]);

  config.useEffect(() => {
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
      <Button onClick={() => refreshPersonnage()} variant="outlined">Personnage</Button>
      <span></span>
      <Button onClick={() => refreshGroupe()} variant="outlined">Groupe</Button>
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
    </div>
  );
}
  
export default Home;

