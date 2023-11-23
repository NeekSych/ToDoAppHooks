import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';

function Tasklist({ tasksList, remove, taskDone }) {
  const elements = tasksList.map((e) => {
    const { id } = e;
    console.log(e);
    return (
      <li
        key={id}
        className={e.done ? 'completed' : ''}
      >
        <Task
          values={e}
          remove={remove}
          taskDone={taskDone}
        />
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
