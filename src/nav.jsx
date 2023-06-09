import { useState } from 'react'
import './App.css'





function App() {
  return (
    <nav className=' w-screen bg-gradient-to-r from-blue-300 to-blue-500 h-24 font-serif shadow-2xl border-b-2 border-black'>

      <div className='flex flex-col w-fit absolute'>
        <img src='./src/assets/logo-no-background.png' className='object-cover h-14 w-14 ml-2 mt-3 animate-spin-slow'></img>
        
      </div>
    
      <div className='flex flex-row justify-end'>
      <button id='nav_button'  className='mx-5 my-5 h-17 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'>contact</button>
      <button id='nav_button'  className='mx-5 my-5 h-17 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'><a href="#main">experience</a></button>
      <button id='nav_button' className='mx-5 my-5 h-17 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'><a href=''>projects</a></button>
      
      </div>
    
    </nav>
  )
}

export default App
