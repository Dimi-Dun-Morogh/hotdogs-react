import React from 'react';
import './header.styles.css';

const Header = () => (
  <header>
    <div className="logo">
      <img src="https://ocj.com/wp-content/uploads/2016/12/hotdogBig.png" alt="hotdog" />
      <span>crud</span>
    </div>
    <span>add hotdog</span>
  </header>
);

export default Header;
