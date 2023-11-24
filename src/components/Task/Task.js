/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './Task.css';

function Task({
  values, remove, taskDone, editTask,
}) {
  const [editValue, setEditValue] = useState(values.label);
  const [editing, setEditing] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    editTask(values.id, e.target.value);
    setEditing(false);
  };
  const classname = () => {
    if (editing) {
      return 'editing';
    }
    if (values.done) {
      return 'completed';
    }
    return '';
  };
  return (
    <li
      key={values.id}
      className={classname()}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => taskDone(values.id)}
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
            onClick={() => setEditing(true)}
          />
          <button
            type="button"
            className="icon icon-destroy"
            onClick={() => {
              remove(values.id);
            }}
          />

        </label>
      </div>
      <input
        type="text"
        className="edit"
        value={editValue}
        onKeyDown={(e) => (e.key === 'Enter' ? onSubmit(e) : null)}
        onChange={(e) => setEditValue(e.target.value)}
      />
    </li>
  );
}

export default Task;
