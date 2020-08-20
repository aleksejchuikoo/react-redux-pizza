import React, { useState } from 'react';

function Categories({ items }) {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => setActiveCategory(index)}
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
