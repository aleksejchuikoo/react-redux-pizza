const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default pizzas;
