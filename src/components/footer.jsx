import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0", // Only necessary padding
    textAlign: "center",
  };

  const linkContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px", // Controlled small gap
    marginBottom: "10px",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  };

  const copyRightStyle = {
    fontSize: "12px",
    color: "#aaa",
    margin: "0", // No margin
  };

  return (
    <footer style={footerStyle}>
      <div style={linkContainerStyle}>
        <a href="#about" style={linkStyle}>About Us</a>
        <a href="#privacy" style={linkStyle}>Privacy</a>
        <a href="#terms" style={linkStyle}>Terms</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
      <div style={copyRightStyle}>
        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

