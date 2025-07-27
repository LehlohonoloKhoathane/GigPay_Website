import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './pages/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/products/products';
import Footer from './pages/footer/footer';
import WhyChooseUs from './pages/whyChooseUs/whyChooseUs';
import OpenAccount from './pages/openAccount/openAcount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page and sections — with header and footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <About />
              <Products />
              <WhyChooseUs />
              <Footer />
            </>
          }
        />

        {/* Open Account page — only footer */}
        <Route
          path="/open-account"
          element={
            <>
              <OpenAccount />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
