import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Tasklist from './components/Tasklist/Tasklist';

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <Tasklist />
      <Footer />
    </div>
  );
}

export default App;
