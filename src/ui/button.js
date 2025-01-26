// src/components/ui/button.js
import React from 'react';
import classNames from 'classnames';

const Button = ({ variant = 'default', children, ...props }) => {
  const btnClass = classNames({
    'bg-blue-500 text-white': variant === 'default',
    'border border-blue-500 text-blue-500': variant === 'outline'
  }, 'px-4 py-2 rounded');

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
