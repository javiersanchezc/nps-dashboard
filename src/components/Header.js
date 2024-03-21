// Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'grey',
    textAlign: 'center',
  };

  const logoStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <nav style={headerStyle}>
      <div className="container">
        <span style={logoStyle}>NPS</span>
      </div>
    </nav>
  );
};

export default Header;
