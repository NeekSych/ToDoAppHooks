import React, { useState } from 'react';
import classes from './App.module.css';
import Footer from '../Footer';
import Tasklist from '../Tasklist';
import Input from '../Input';

function App() {
  const [tasksList, setTasksList] = useState([]);

  const addNewTask = (taskValue, minValue, secValue) => {
    console.log(taskValue);
    console.log(minValue);
    console.log(secValue);
  };
  return (
    <div className={classes.todoapp}>
      <header className="header">
        <h1 className={classes.header__title}>todos</h1>
        <Input addNewTask={addNewTask} />
      </header>
      <section className={classes.main}>
        <Tasklist tasksList={tasksList} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
