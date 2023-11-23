import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';

function Tasklist({ tasksList, remove }) {
  const elements = tasksList.map((e) => {
    const { id } = e;
    return (
      <li
        key={id}
        className="todo-list-item"
      >
        <Task values={e} remove={remove} />
      </li>
    );
  });
  return (
    <ul className="todo-list">
      {tasksList.length !== 0 ? elements : <li className="list__empty">Tasks not found</li>}
    </ul>

  );
}

export default Tasklist;
