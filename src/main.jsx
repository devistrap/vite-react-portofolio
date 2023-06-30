import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './nav.jsx';
import ModelViewer from "./threed.jsx";
import Cards from "./cards.jsx";
import Projects from "./projects.jsx";
import './index.css';
import Contact from './contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='bg-gradient-to-t from-blue-700 to-blue-400'>
      <ModelViewer />
      <Cards />
      <Projects />
      <Contact />
    </div>
  </React.StrictMode>,
   document.getElementById('root')
);
