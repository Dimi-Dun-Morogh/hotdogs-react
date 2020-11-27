import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ children, dropdown, inverted, form, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${dropdown ? 'dropdown' : ''} custom-button ${
      form ? 'form' : ''
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
