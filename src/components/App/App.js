import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './App.module.css';
import Footer from '../Footer';
import Tasklist from '../Tasklist';
import Input from '../Input';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [filteredTasks] = useState('');
  function getFilteredTasks() {
    if (filteredTasks) {
      return filteredTasks;
    }
    return tasksList;
  }
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
    setTasksList([newTask, ...tasksList]);
  };

  const removeTask = (id) => {
    setTasksList(tasksList.filter((e) => e.id === id));
  };

  const removeCompleted = () => {
    setTasksList(tasksList.filter((e) => !e.done));
  };
  const taskDone = (id) => {
    setTasksList(tasksList.map((elem) => (elem.id === id
      ? { ...elem, done: !elem.done, elapsedTime: 0 }
      : elem)));
  };
  //   const filteredTasksktasksList]);
  const doneCount = tasksList.filter((e) => !e.done).length;
  return (
    <div className={classes.todoapp}>
      <header className="header">
        <h1 className={classes.header__title}>todos</h1>
        <Input addNewTask={addNewTask} />
      </header>
      <section className={classes.main}>
        <Tasklist
          taskDone={taskDone}
          remove={removeTask}
          tasksList={getFilteredTasks()}
        />
        <Footer
          doneCount={doneCount}
          removeCompleted={removeCompleted}
        />
      </section>
    </div>
  );
}

export default App;
