import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const { onClick, children, outline, cart, add, circle, minus, plus } = props;
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
        {
          'button--circle': circle,
        },
        {
          'cart__item-count-plus': plus,
        },
        {
          'cart__item-count-minus': minus,
        },
      )}>
      {children}
    </button>
  );
};

export default Button;
