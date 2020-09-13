import React from 'react';
import { useDispatch } from 'react-redux';

import { setPage } from '../../redux/actions/filters';

import './Paginations.scss';

function Pagination({ pages, activePage }) {
  const dispatch = useDispatch();

  const selectPage = (selectedPage) => {
    dispatch(setPage(selectedPage));
  };

  return (
    <ul className="pages">
      {pages.map((_, index) => (
        <li
          className={`page ${activePage === index + 1 ? 'active' : ''}`}
          key={index}
          onClick={() => selectPage(index + 1)}>
          {index + 1}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
