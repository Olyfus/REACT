import { useEffect, useState, React } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GroupeCard(props) {

  const [character, setCharacter] = useState([]);
  setCharacter(value);

  return (
    <div>
      <Card sx={{ maxWidth: '20%', m: 2, p: 2, position: 'sticky', left: '8.5%' }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.groupe.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nombre de membre : {props.groupe.class}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default GroupeCard