import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import Workbox from './workbox';
import Figma from "./figmaCom/figma"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <Figma/>
  </React.StrictMode>
);
// Workbox();

