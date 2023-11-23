import React from 'react';
import './Input.css';

function Input() {
  return (
    <form
      className="input-form"
      // onKeyDown={(e) => {
      //   if (e.key === 'Enter') {
      //     console.log('hyt');
      //     e.preventDefault();
      //     addItem(inputValue, minValue, secValue);
      //     setInputValue('');
      //     setMinValue('');
      //     setSecValue('');
      //   }
      // }}
    >
      <input
        className="new-todo new-todo-input"
        placeholder="Task"
        // ref={ref}
        // value={inputValue}
        // autoFocus
        // onChange={(e) => inputChange(e)}
      />
      <input
        type="number"
        className="new-todo new-todo-form__timer"
        placeholder="Min"
        min="0"
        max="59"
        // value={minValue}
        // onChange={(e) => minChange(e)}
      />
      <input
        type="number"
        min="0"
        max="59"
        className="new-todo new-todo-form__timer"
        placeholder="Sec"
        // value={secValue}
        // onChange={(e) => secChange(e)}
      />
    </form>
  );
}

export default Input;
