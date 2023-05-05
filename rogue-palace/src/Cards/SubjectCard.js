import config from "../Modules/config";

export default function SubjectCard(props) {
    const theme = {
        spacing : 8,
    }

    const { sub } = props;

    config.useEffect(() => {
        console.log(props);
    })

    return (
        <div className="App">
            <div>
                <config.Card sx={{ maxWidth: '80%', m: 2, p:2, position: 'sticky', left:'8.5%'}}>
                    <config.CardContent>
                        <config.Typography gutterBottom variant="h5" component="div">
                                Sujet {props.subject.name}
                        </config.Typography>
                        <config.Typography variant="body2" color="text.secondary">
                                {props.subject.subjectId}
                        </config.Typography>
                    </config.CardContent>
                </config.Card>
            </div>
        </div>
    );
};