import React, { useState } from 'react';
import logo from './assets/logo.png';
import heroImage from './assets/herosection.png';
import Categories from './components/categories';
import SpecialDealSection from './components/discount';
import Footer from "./components/footer";
import LoginModal from "./components/login"; // <-- Import LoginModal
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const openLoginModal = () => setLoginVisible(true);
  const closeLoginModal = () => setLoginVisible(false);

  // Navbar Styles
  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '50px',
    zIndex: 1000
  };

  const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '50px'
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
    width: '500px'
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
    alignItems: 'center',
    gap: '50px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    marginLeft: '30px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  const addressStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    gap: '10px'
  };

  // Hero Section Styles
  const heroStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#FFA500',
    padding: '0 50px',
    gap: '50px',
    marginTop: '50px'
  };

  const textContainer = {
    maxWidth: '500px',
    color: '#fff'
  };

  const headingStyle = {
    fontSize: '48px',
    marginBottom: '20px'
  };

  const subHeadingStyle = {
    fontSize: '18px',
    marginBottom: '30px'
  };

  const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '100%'
  };

  return (
    <>
      {/* Navbar */}
      <nav style={navStyle}>
        <div style={leftContainerStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
          <li><a href="#home" style={linkStyle}>Home</a></li>
          <div style={searchContainerStyle}>
            <i className="fa-solid fa-magnifying-glass" style={searchIconStyle}></i>
            <input
              type="text"
              placeholder="Search..."
              style={searchInputStyle}
            />
          </div>
        </div>
        <ul style={linkContainerStyle}>
          <li><a href="#products" style={linkStyle}>Products</a></li>
          <li><a href="#cart" style={linkStyle}><i className="fa-solid fa-cart-shopping"></i>Cart</a></li>
          <li>
            <button onClick={openLoginModal} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}>
              <i className="fa-solid fa-user"></i>Login
            </button>
          </li>
          <li><a href="#contact" style={linkStyle}>Contact</a></li>
          <li>
            <div style={addressStyle}>
              <i className="fa-solid fa-location-dot"></i>
              <span>Deliver to:</span>
            </div>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={textContainer}>
          <h1 style={headingStyle}>Welcome to E-Shop!</h1>
          <p style={subHeadingStyle}>Get the best deals on your favorite products. Fast delivery & great discounts!</p>
          <button style={buttonStyle}>Shop Now</button>
        </div>
        <div>
          <img src={heroImage} alt="Hero" style={imageStyle} />
        </div>
      </section>

      {/* Categories, Deals, Footer */}
      <Categories />
      <SpecialDealSection />
      <Footer />

      {/* Login Modal */}
      {isLoginVisible && <LoginModal closeModal={closeLoginModal} />}
    </>
  );
};

export default App;

