import React, { useState } from 'react';

function Categories({ items, onClickCategory }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const onSelectItem = (index) => {
    setActiveCategory(index);
    onClickCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeCategory === index ? 'active' : ''}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
