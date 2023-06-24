import React from 'react'
import ReactDOM from 'react-dom/client'
import Range from './range.jsx'
import App from './nav.jsx'
import ModelViewer from "./threed.jsx"
import Cards from "./cards.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='bg-gradient-to-l from-blue-700 to-blue-400'>
    <ModelViewer />
    <Cards />
    </div>
    
    
  </React.StrictMode>,
)
