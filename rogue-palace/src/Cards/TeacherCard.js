import config from "../Modules/config";

export default function TeacherCard(props) {

    const theme = {
        spacing : 8,
    }

    config.useEffect(() => {
        console.log(props);
    })

    return (
        <div className="App">
            <div>
                <config.Card sx={{ maxWidth: '80%', m: 2, p:2, position: 'sticky', left:'8.5%'}}>
                    <config.CardContent>
                        <config.Typography gutterBottom variant="h5" component="div">
                                Matière {props.teacher.subjectId}
                        </config.Typography>
                        <config.Typography variant="body2" color="text.secondary">
                                {props.teacher.name} {props.teacher.firstName} 
                        </config.Typography>
                    </config.CardContent>
                </config.Card>
            </div>
        </div>
    );
};