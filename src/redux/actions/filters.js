export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = (cartIndex) => ({
  type: 'SET_CATEGORY',
  payload: cartIndex,
});

export const setPage = (selectedPage) => ({
  type: 'SET_PAGE',
  payload: selectedPage,
});
