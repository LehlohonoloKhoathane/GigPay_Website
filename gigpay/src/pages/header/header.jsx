//import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">GigPay</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
