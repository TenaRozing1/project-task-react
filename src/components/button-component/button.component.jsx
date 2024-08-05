import React from 'react';
import './button-component.styles.scss';

const ButtonComponent = ({ type, text, disabled, ariaLabel }) => {
  return (
    <button type={type} className="custom-button" aria-label={ariaLabel} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonComponent;
