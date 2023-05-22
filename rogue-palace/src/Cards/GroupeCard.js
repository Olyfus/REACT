import { useEffect, useState, React } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GroupeCard(props) {

  const [personName, setPersonName] = useState([]);

  const handleChangeMultiple = (event) => {

    const { options } = event.target;

    const value = [];

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      {props.groupe.name}
    </div>
  );
}
export default GroupeCard