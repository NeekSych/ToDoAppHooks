/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './Task.css';

function Task({
  values, remove, taskDone, editTask,
}) {
  const [editValue, setEditValue] = useState(values.label);
  const [editing, setEditing] = useState(false);
  const [time, setTime] = useState(values.elapsedTime);
  const [isRunning, setIsRunning] = useState(values.timerRunning);
  const timeInWords = formatDistanceToNow(values.createDate, { includeSeconds: true });

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setTime(time > 0 ? time - 1 : 0);
      }
    }, 1000);

    if (time === 0 && isRunning === true) {
      setIsRunning(false);
      taskDone(values.id);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time, isRunning]);

  const timerToggle = () => {
    setIsRunning(!isRunning);
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
              onClick={() => timerToggle()}
            />
            <button
              type="button"
              className="icon icon-pause"
              onClick={() => timerToggle()}
            />
            {`${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`}
          </span>
          <span className="description">
            created
            {' '}
            {timeInWords}
            {' '}
            ago
            {' '}
          </span>

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
