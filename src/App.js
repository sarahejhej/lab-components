import React from 'react';
import Button from './Button';

const buttons = [
  {
    category: 'enabled',
    text: 'Click me!',
  },
  {
    category: 'disabled',
    text: 'Disabled',
  },
  {
    category: 'warning',
    text: "Don't click me!",
  },
];

export const App = () => {
  return (
    <div>
      {buttons.map((button, index) => (
        <Button category={button.category} key={index} text={button.text} />
      ))}
    </div>
  );
};
