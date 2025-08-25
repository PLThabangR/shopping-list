import { useState } from 'react'
import './App.css'
import Home from './pages/homer/Home'
import { Route, Routes } from 'react-router-dom'

function App() {



  return (
    <>
    <div className='container'>
 <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>

    </div>
   
        
    </>
  )
}

export default App
