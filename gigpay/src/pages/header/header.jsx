import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">GigPay</div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/whyUs">Why Us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/help">Help</Link>
        <Link to="/signUp" className='signup'>Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
