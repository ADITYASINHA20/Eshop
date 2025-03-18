import React from 'react';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#255F38',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    zIndex: 1000
  };

  const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const logoStyle = {
    height: '50px',
    width: '50px',
    objectFit: 'contain',
    borderRadius: '8px'
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '5px 10px',
    width: '300px'
  };

  const searchInputStyle = {
    border: 'none',
    outline: 'none',
    padding: '8px 10px',
    width: '100%',
    borderRadius: '20px'
  };

  const searchIconStyle = {
    fontSize: '18px',
    color: '#333'
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '15px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingRight: '40px' // Right side ko thoda left shift kiya
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  return (
    <nav style={navStyle}>
      {/* Left Part: Logo + Home + Search */}
      <div style={leftContainerStyle}>
        {/* Logo */}
        <img src={logo} alt="Logo" style={logoStyle} />

        {/* Home */}
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={linkStyle}>Home</a></li>
        </ul>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <i className="fa-solid fa-magnifying-glass" style={searchIconStyle}></i>
          <input
            type="text"
            placeholder="Search..."
            style={searchInputStyle}
          />
        </div>
      </div>

      {/* Right Part: Nav Links */}
      <ul style={linkContainerStyle}>
        <li><a href="#products" style={linkStyle}><i class="fa-solid fa-gift"></i>Products</a></li>
        <li><a href="#cart" style={linkStyle}>
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </a></li>
        <li>
          <a href="#login" style={linkStyle}>
            <i className="fa-solid fa-user"></i> Login
          </a>
        </li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;






