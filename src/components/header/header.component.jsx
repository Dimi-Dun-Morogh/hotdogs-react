import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.css';

const Header = () => (
  <header>
    <div className="logo">
      <img src="https://ocj.com/wp-content/uploads/2016/12/hotdogBig.png" alt="hotdog" />
      <span>crud</span>
    </div>
    <span>
      <CustomButton>add hotdog</CustomButton>
    </span>
  </header>
);

export default Header;
