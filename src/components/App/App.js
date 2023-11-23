import React from 'react';
import './App.css';
import Footer from '../Footer';
import Tasklist from '../Tasklist';
import Input from '../Input';

function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1 className="header__title">todos</h1>
        <Input />
      </header>
      <section className="main">
        <Tasklist />
        <Footer />
      </section>
    </div>
  );
}

export default App;
