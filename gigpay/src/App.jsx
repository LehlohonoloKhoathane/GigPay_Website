//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './pages/header/header'
import Home from './pages/home/home';


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Home/>
    </BrowserRouter>
  )
}

export default App
