//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './pages/header/header'
import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/products/products';

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Home/>
    <About/>
    <Products/>
    </BrowserRouter>
  )
}

export default App
