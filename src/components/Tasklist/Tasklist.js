import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';
// import { ToDoContext } from '../Context';

function Tasklist() {
  // const { toDoItems } = useContext(ToDoContext);
  // const elements = toDoItems.map((e)=>)
  return (
    <ul className="todo-list">
      <Task />
    </ul>

  );
}

export default Tasklist;
