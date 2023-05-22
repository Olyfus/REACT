import { useEffect, useState, React } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PersonnageCard(props) {
    const [groupe, setGroupe] = useState([]);

    axios.get(`https://localhost:7183/groupe/${props.personnage.groupeId}`, {
        headers: { Authorization: 'Bearer '+localStorage.getItem("access_token")+''}
    }).then((res) => {
        console.log(res.data);
        setGroupe(res.data);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <div className="Card_Personnage">
            <Card sx={{ maxWidth: '20%', m: 2, p:2, position: 'sticky', left:'8.5%'}}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {props.personnage.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Classe {props.personnage.class}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Race {props.personnage.race}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Niveau {props.personnage.level}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Groupe : {groupe.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
export default PersonnageCard;