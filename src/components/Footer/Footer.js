import React from 'react';
import classes from './footer.module.css';
import Tabs from '../Tabs';

function Footer() {
  return (
    <footer className={classes.footer}>
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
