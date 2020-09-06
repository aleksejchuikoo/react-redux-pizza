import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  {
    name: 'популярности',
    type: 'rating',
    order: 'desc',
  },

  {
    name: 'цене',
    type: 'price',
    order: 'desc',
  },

  {
    name: 'алфавиту',
    type: 'name',
    order: 'asc',
  },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    // один раз сохраняет функцию и больше не меняет
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categories}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          activeSortType={sortBy.type}
          sortItems={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>{' '}
      <div
        className="content__items"
        style={
          items.length < 3
            ? {
                justifyContent: 'flex-start',
              }
            : {
                justifyContent: 'space-between',
              }
        }>
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={pizza.id}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                {...pizza}
                margin={items.length < 3}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} margin={items.length < 3} />)}
      </div>
    </div>
  );
}

export default Home;
