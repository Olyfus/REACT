import './CSS/App.css';
import config from './Modules/config';

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
    console.error(err);
    return true;
  }
}

function ProtectedRoute( { children } ){
  const navigate = config.useNavigate();
  const token = localStorage.getItem("access_token");
  if (isTokenExpired(token)){
    return(navigate("/"));
  }
  
  return children;
}

export default function App() {
  config.useEffect(() => {
    config.WebFont.load({
      google: {
        families: ['Noto Sans Hanunoo']
      }
    })
  })

  return (
    <config.BrowserRouter>
      <config.Routes>
        <config.Route path='/' element={<config.Endpoint/>}/>
        <config.Route path='/login' element={<config.Login/>}/>
        <config.Route path='/home' element={<ProtectedRoute><config.Home/></ProtectedRoute>}/>
        <config.Route path='/character/:id' element={<ProtectedRoute><config.Character/></ProtectedRoute>}/>
        <config.Route path='/profile/:id' element={<ProtectedRoute><config.Profile/></ProtectedRoute>}/>
      </config.Routes>
    </config.BrowserRouter>  
  );
}