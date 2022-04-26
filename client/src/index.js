import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import App from './App';
import M from 'materialize-css';
import { BrowserRouter } from 'react-router-dom';


// // Auto initialize all materialize functions
M.AutoInit();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
