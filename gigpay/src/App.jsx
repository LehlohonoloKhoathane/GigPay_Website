//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './pages/header/header'
import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/products/products';
import Footer from './pages/footer/footer';

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Home/>
    <About/>
    <Products/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
