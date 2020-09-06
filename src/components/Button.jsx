import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const { onClick, children, outline, cart, add } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(
        'button',
        {
          'button--outline': outline,
        },
        {
          'button--cart': cart,
        },
        {
          'button--add': add,
        },
      )}>
      {children}
    </button>
  );
};

export default Button;
