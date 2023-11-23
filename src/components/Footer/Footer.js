import React from 'react';
import './footer.css';
import Tabs from '../Tabs';

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        doneCount
        {' '}
        items left
      </span>
      <Tabs />
      <button
        type="button"
        className="clear-completed"
        // onClick={deleteCompleted}
      >
        Clear completed

      </button>
    </footer>
  );
}

export default Footer;
