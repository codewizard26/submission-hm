import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Connectors from './authentication';
import Landing from './Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Landing />
    
    {/* <App /> */}
    </>
  </React.StrictMode>
  
);
