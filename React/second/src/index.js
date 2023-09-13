import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Effec from './Effec';
import Listt from './Listt';
import Inlinecss from './Inlinecss';
import Formm from './Formm';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    {/* <Effec /> */}
    {/* <Home /> */}
    {/* <Listt /> */}
    {/* <Inlinecss /> */}
    <Formm />
  </React.StrictMode>
);
