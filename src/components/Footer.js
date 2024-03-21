// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>Scotiabank</p>
    </footer>
  );
}

export default Footer;
