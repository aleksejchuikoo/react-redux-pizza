import { createStore, compose, applyMiddleware } from 'redux'; // импортируем compose, applyMiddleware для redux-thunk
import thunk from 'redux-thunk'; // для асинхронных функций

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // чтобы Redux знал когда использовать
// синхронные функции, а когда асинхронные

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
