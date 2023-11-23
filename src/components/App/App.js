import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './App.module.css';
import Footer from '../Footer';
import Tasklist from '../Tasklist';
import Input from '../Input';

function App() {
  const [tasksList, setTasksList] = useState([]);

  const addNewTask = (value, minutes, seconds) => {
    const newTask = {
      label: value,
      done: false,
      timerId: null,
      id: uuidv4(),
      timerRunning: true,
      createDate: Date.now(),
      elapsedTime: (+minutes * 60) + (+seconds),
    };
    setTasksList([...tasksList, newTask]);
  };

  const removeTask = (id) => {
    setTasksList(tasksList.filter((e) => e.id !== id));
  };
  return (
    <div className={classes.todoapp}>
      <header className="header">
        <h1 className={classes.header__title}>todos</h1>
        <Input addNewTask={addNewTask} />
      </header>
      <section className={classes.main}>
        <Tasklist
          remove={removeTask}
          tasksList={tasksList}
        />
        <Footer />
      </section>
    </div>
  );
}

export default App;
