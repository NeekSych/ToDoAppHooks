/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './Task.css';

function Task() {
  // const [taskName, setTaskName] = useState('');
  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
        />
        <label
          className="label"
        >
          <span className="title">fw</span>
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
          />

        </label>
      </div>
    </li>
  );
}

export default Task;
