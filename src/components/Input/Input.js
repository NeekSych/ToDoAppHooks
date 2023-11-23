import React, { useState } from 'react';
import './Input.css';

function Input({ addNewTask }) {
  const [taskValue, setTaskValue] = useState('');
  const [minValue, setMinValue] = useState('');
  const [secValue, setSecValue] = useState('');

  const inputChange = (e) => {
    setTaskValue(e.target.value);
  };
  const minChange = (e) => {
    setMinValue(e.target.value);
  };
  const secChange = (e) => {
    setSecValue(e.target.value);
  };
  const clearValue = () => {
    setTaskValue('');
    setMinValue('');
    setSecValue('');
  };

  return (
    <form
      className="input-form"
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask(taskValue, minValue, secValue);
        clearValue();
      }}
    >
      <input
        className="new-todo new-todo-input"
        placeholder="Task"
        // ref={ref}
        value={taskValue}
        // autoFocus
        onChange={(e) => inputChange(e)}
      />
      <input
        type="number"
        className="new-todo new-todo-form__timer"
        placeholder="Min"
        min="0"
        max="59"
        value={minValue}
        onChange={(e) => minChange(e)}
      />
      <input
        type="number"
        min="0"
        max="59"
        className="new-todo new-todo-form__timer"
        placeholder="Sec"
        value={secValue}
        onChange={(e) => secChange(e)}
      />
      <button style={{ display: 'none' }} type="submit">submit</button>
    </form>
  );
}

export default Input;
