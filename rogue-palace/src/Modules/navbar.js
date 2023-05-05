import config from './config';

const theme = config.createTheme({
  palette: {
    primary: {
      main: '',
    },
    secondary: {
      main: '',
    },
  },
});

function isTokenExpired(token) {
    if (token === null) {
      return true;
    }
    try {
      // Décoder le token pour récupérer les données de payload
      const payload = JSON.parse(config.Base64.decode(token.split(".")[1]));
      // Récupérer la propriété 'exp' qui contient un timestamp
      const expiresAt = payload.exp;
      // Transformer le timestamp en date
      const expirationDate = new Date(expiresAt * 1000);
      // Vérifier si la date d'expiration est supérieure à l'heure actuelle
      return expirationDate < new Date();
    } catch (err) {
      console.log(err);
      return true;
    }
  }

export default function Navbar(props) {

  const pseudo = localStorage.getItem("pseudo");
    const [isConnected, setIsConnected] = config.useState(false);
    const [user, setUser] = config.useState({});
    const navigate = config.useNavigate();

    const location = config.useLocation();
    config.useEffect(() => {
        setIsConnected(!isTokenExpired(localStorage.getItem("access_token")))
    }, [location])

    const disconnect = () => {
        localStorage.removeItem("access_token");
        return navigate("/")
    }
    const connect = () => {
        return navigate("/login")
    }
    
    return (
    <div>
      <config.Box sx={{ flexGrow: 1 }}>
        <config.AppBar className='app-navbar' position="static">
          <config.Toolbar>
            <config.Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              RoguePalace
            </config.Typography>
              {
                isConnected && <config.Button color="inherit" onClick={() => disconnect()}> Déconnexion </config.Button>
              }
              {
                !isConnected && <config.Button color="inherit" onClick={() => connect()}> Connexion </config.Button>
              }
          </config.Toolbar>
        </config.AppBar>
      </config.Box>
    </div>
    )
}