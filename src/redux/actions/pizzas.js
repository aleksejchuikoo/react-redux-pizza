import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  // => (dispatch) => чтобы превратить функцию в асинхронный action

  dispatch(setLoaded(false)); // если подгружаются какие-то данные, то сразу загрузка должна быть false
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        //мы делаем запрос на localhost:3000, но в package.json указали в proxy перенаправление адреса на localhost:3001
        // это для того, чтобы когда мы деплоили наше приложение на реальный сервак, то наши данные чтобы не перенаправлялись на отдельный порт, мы будем отправлять их на тот же адрес, на котором находится наше приложение
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
