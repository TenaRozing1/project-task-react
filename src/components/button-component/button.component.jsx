import React from 'react';
import './button-component.styles.scss';

const ButtonComponent = ({ type, text, disabled }) => {
  return (
    <button type={type} className="custom-button" disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonComponent;
