const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[payload.id]
        ? [payload]
        : [...state.items[payload.id].items, payload];

      const newItems = {
        ...state.items,
        [payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    case 'INCREMENT_CART_ITEM': {
      const newItems = [...state.items[payload].items, state.items[payload].items[0]];
      const newObjItems = {
        ...state.items,
        [payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      const totalCount = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newObjItems,
        totalCount,
        totalPrice,
      };
    }

    case 'DECREMENT_CART_ITEM': {
      const prevItems = state.items[payload].items;
      const newItems = prevItems.length > 1 ? prevItems.slice(1) : prevItems;
      const newObjItems = {
        ...state.items,
        [payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      };

      const totalCount = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newObjItems).reduce(
        (sum, key) => newObjItems[key].totalPrice + sum,
        0,
      );

      return {
        ...state,
        items: newObjItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentPrice = newItems[payload].totalPrice;
      const currentCount = newItems[payload].items.length;

      delete newItems[payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentPrice,
        totalCount: state.totalCount - currentCount,
      };
    }

    default:
      return state;
  }
};

export default cart;
