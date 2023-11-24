import React from 'react';
import classes from './footer.module.css';
import Tabs from '../Tabs';

function Footer({ removeCompleted, doneCount, filterList }) {
  return (
    <footer className={classes.footer}>
      <span className="todo-count">
        {doneCount}
        items left
      </span>
      <Tabs
        filterList={filterList}
      />
      <button
        type="button"
        className="clear-completed"
        onClick={() => removeCompleted()}
      >
        Clear completed

      </button>
    </footer>
  );
}

export default Footer;
