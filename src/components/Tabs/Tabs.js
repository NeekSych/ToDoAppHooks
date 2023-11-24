import React, { useState } from 'react';
import './Tabs.css';

function Tabs({ filterList }) {
  const [selectFilter, setSelectFilter] = useState('All');
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={selectFilter === 'All' ? 'select' : ''}
          onClick={() => {
            setSelectFilter('All');
            filterList('All');
          }}
        >
          All

        </button>
      </li>
      <li>
        <button
          type="button"
          className={selectFilter === 'Active' ? 'select' : ''}
          onClick={() => {
            setSelectFilter('Active');
            filterList('Active');
          }}
        >
          Active

        </button>
      </li>
      <li>
        <button
          type="button"
          className={selectFilter === 'Completed' ? 'select' : ''}
          onClick={() => {
            setSelectFilter('Completed');
            filterList('Completed');
          }}
        >
          Completed

        </button>
      </li>
    </ul>
  );
}

export default Tabs;
