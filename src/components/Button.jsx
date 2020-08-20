import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const { children, outline, cart } = props;
  return (
    <button
      className={classNames(
        'button',
        {
          'button--outline': outline,
        },
        {
          'button--cart': cart,
        },
      )}>
      {children}
    </button>
  );
};

export default Button;
