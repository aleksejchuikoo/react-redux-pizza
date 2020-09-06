const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [payload.id]: !state.items[payload.id] ? [payload] : [...state.items[payload.id], payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: [].concat.apply([], Object.values(newItems)).length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
