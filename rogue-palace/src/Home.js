import { Button } from '@mui/material';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css';
import TeacherCard from './TeacherCard';
import GroupeCard from './GroupeCard'
import SubjectCard from './SubjectCard';
import Navbar from "./navbar";


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
      <Button onClick={() => refreshSubject()} variant="outlined">Subject</Button>
      <Button onClick={() => refreshTeachers()} variant="outlined">Teacher</Button>
      {teachers.map((item, index) => (
        <GroupeCard key={index} index={item}/>
        // <TeacherCard key={index} teacher={item}/>
      ))}
      {subject.map((item, index) => (
        <SubjectCard key={index} subject={item}/>
      ))}
    </div>
  );
}
  
export default Home;

