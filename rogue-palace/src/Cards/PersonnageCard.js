import { useEffect, useState, React } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PersonnageCard(props) {
    
    const { perso } = props;
    
    return (
        <div className="App">
            <div>
                <Card sx={{ maxWidth: '80%', m: 2, p:2, position: 'sticky', left:'8.5%'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                                Nom : {props.personnage.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                                {props.personnage.id}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
export default PersonnageCard;