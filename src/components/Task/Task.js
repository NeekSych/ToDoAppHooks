/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Task.css';

function Task({ values, remove, taskDone }) {
  // const [taskName, setTaskName] = useState('');
  return (

    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={() => taskDone()}
      />
      <label
        className="label"
      >
        <span className="title">{values.label}</span>
        <span className="description">
          <button
            type="button"
            className="icon icon-play"
          />
          <button
            type="button"
            className="icon icon-pause"
          />
          12:25
        </span>
        <span className="description">created 17 seconds ago</span>

        <button
          type="button"
          className="icon icon-edit"
        />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={() => {
            console.log('values.id');
            remove(values.id);
          }}
        />

      </label>
    </div>

  );
}

export default Task;
