import Form from './components/Form';
import TodoItem from './components/TodoItem';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form/>
        <div className="todos-wrapper">
          <div className="planing-col">
            <TodoItem/>
            <TodoItem/>
          </div>
          <div className="process-col">
            <TodoItem/>
          </div>
          <div className="done-col">
            <TodoItem/>
            <TodoItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
