import './CSS/index.css';
import config from './Modules/config';

const root = config.ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <config.React.StrictMode>
    <config.App />
  </config.React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
config.reportWebVitals();
