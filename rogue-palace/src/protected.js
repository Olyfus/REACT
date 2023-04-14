import { Button } from '@mui/material';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css';
import TeacherCard from './TeacherCard';
import SubjectCard from './SubjectCard';

function Protected(props) {
  
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState([]);

  useEffect(() => {
   refreshTeachers();
  }, [])

  useEffect(() => {
   refreshSubject();
  }, [])

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
      <Button onClick={() => refreshSubject()} variant="outlined">Subject</Button>
      <Button onClick={() => refreshTeachers()} variant="outlined">Teacher</Button>
      {teachers.map((item, index) => (
        <TeacherCard key={index} teacher={item}/>
      ))}
    </div>
  );
}

export default Protected;