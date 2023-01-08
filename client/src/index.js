import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Connectors from './authentication';
import Landing from './Landing';
import TextToImage from './text-to-image';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <TextToImage name="hello!" x="0" y="10" />, */}

    
    <Landing/>
    </>
  </React.StrictMode>
  
);
