import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';

function Tasklist() {
  return (
    <ul className="todo-list">
      <Task />
    </ul>

  );
}

export default Tasklist;
