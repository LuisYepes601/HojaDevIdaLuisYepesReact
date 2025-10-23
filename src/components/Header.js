import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="nombre-persona">
        <h4>LuisYepes<span>.</span></h4>
        <Link to="/" className="profile-icon"><i className="fa-solid fa-user"></i></Link>
      </div>
      <nav className="header-menu">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}><span className="home"><i className="fa-solid fa-house"></i></span></Link></li>
          <li><Link to="/proyectos" className={location.pathname === '/proyectos' ? 'active' : ''}>Proyectos</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Sobre mi</Link></li>
          <li><Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
