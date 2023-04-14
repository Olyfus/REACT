import { useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function SubjectCard(props) {
    const theme = {
        spacing : 8,
    }
    const { sub } = props;
    useEffect(() => {
        console.log(props);
    })
    return (
        <div className="App">
            <div>
                <Card sx={{ maxWidth: '80%', m: 2, p:2, position: 'sticky', left:'8.5%'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                                Sujet {props.subject.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                                {props.subject.subjectId}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }
  
  export default SubjectCard;