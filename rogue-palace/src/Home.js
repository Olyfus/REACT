import { Button } from '@mui/material';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css';
import TeacherCard from './TeacherCard';
import Navbar from "./navbar";


function Home(props) {
  
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    refreshTeachers();
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

  return (
    <div className="App">
      <Navbar />
      
      <Button onClick={() => refreshTeachers()} variant="outlined">Rafraichir</Button>
      {teachers.map((item, index) => (
        <TeacherCard key={index} teacher={item}/>
      ))}
    </div>
  );
}
  
export default Home;

