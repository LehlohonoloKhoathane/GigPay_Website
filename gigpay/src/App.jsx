//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './pages/header/header'
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Home/>
    <About/>
    </BrowserRouter>
  )
}

export default App
