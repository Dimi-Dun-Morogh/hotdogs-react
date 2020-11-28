import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({
  children,
  type,
  dropdown,
  inverted,
  form,
  disabled,
  style,
  ...otherProps
}) => (
  <button
    disabled={disabled}
    style={style}
    type={type}
    className={`${inverted ? 'inverted' : ''} ${dropdown ? 'dropdown' : ''} custom-button ${
      form ? 'form' : ''
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
