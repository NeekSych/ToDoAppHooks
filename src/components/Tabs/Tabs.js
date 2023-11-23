import React from 'react';
import './Tabs.css';

function Tabs() {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className="select"
          // onClick={() => { filterItems('all'); }}
        >
          All

        </button>
      </li>
      <li>
        <button
          type="button"
          className=""
          // onClick={() => { filterItems('active'); }}
        >
          Active

        </button>
      </li>
      <li>
        <button
          type="button"
          className=""
          // onClick={() => { filterItems('completed'); }}
        >
          Completed

        </button>
      </li>
    </ul>
  );
}

export default Tabs;
