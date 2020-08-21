import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} />
        <SortPopup sortItems={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
