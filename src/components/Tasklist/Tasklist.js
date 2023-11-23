import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';

function Tasklist({ tasksList, remove, taskDone }) {
  const elements = tasksList.map((e) => (

    <Task
      values={e}
      remove={remove}
      taskDone={taskDone}
    />

  ));
  return (
    <ul className="todo-list">
      {tasksList.length !== 0 ? elements : <li className="list__empty">Tasks not found</li>}
    </ul>

  );
}

export default Tasklist;
