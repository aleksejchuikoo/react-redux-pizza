import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import Pagination from '../components/Pagination/Pagination';

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
  const { category, sortBy, currentPage, postsPerPage } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, currentPage]);

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

  const indexOfLastPizza = currentPage * postsPerPage;
  const indexOfFirstPizza = indexOfLastPizza - postsPerPage;
  const currentPizzas = items.slice(indexOfFirstPizza, indexOfLastPizza);
  const pages = Array(Math.ceil(items.length / postsPerPage)).fill('');

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
      <h2 className="content__title">Все пиццы</h2>
      <div
        className="content__items"
        style={{
          justifyContent: 'space-between',
        }}>
        {isLoaded
          ? currentPizzas.map((pizza) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={pizza.id}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                {...pizza}
                margin={currentPizzas.length < 3}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => (
                <PizzaLoadingBlock key={index} margin={index % 2 === 5 || index % 5 === 0} />
              ))}
      </div>
      {isLoaded && <Pagination pages={pages} activePage={currentPage} />}
    </div>
  );
}

export default Home;
