const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
  currentPage: 1,
  postsPerPage: 12,
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default filters;
