import React from 'react'
import ReactDOM from 'react-dom/client'
import Range from './range.jsx'
import App from './nav.jsx'
import ModelViewer from "./threed.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ModelViewer />
    <Range />
  </React.StrictMode>,
)
