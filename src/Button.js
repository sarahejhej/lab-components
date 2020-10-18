import React from 'react';
import './button.css';

const Button = props => {
  return (
    <button className={`button button--${props.category}`}>{props.text}</button>
  );
};

export default Button;
