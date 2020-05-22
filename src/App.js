import React, { useState } from 'react';
import Todos from './Todos';
import Control from './Control';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // Input possibility
  const change = (e) => {
    setInput(e.target.value);
  };

  // Add input list, use [...todos], if there is no input then null
  function add(e) {
    setInput('');
    return input ? setTodos([...todos, input]) : null;
  }

  // Delete each list, use 'filter' to show the new lists, which do not have the same index to the list which has to be deleted, set the todo list to this new lists
  function deleteEachList(indexToDelate) {
    const newTodos = todos.filter((item, index) => {
      return index !== indexToDelate;
    });
    setTodos(newTodos);
  }

  // clear all the todo lists
  function clear() {
    setTodos([]);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <input value={input} onChange={change} placeholder="Enter task" />
      <button className="addButton" onClick={add}>
        add
      </button>

      <Todos
        todos={todos}
        deleteEachList={deleteEachList}
        setTodos={setTodos}
      />

      <Control count={todos.length} setTodos={setTodos} clear={clear} />

      <footer>
        <p className="copyright">&copy;opyright </p>
        <p className="copyright">Zhu 2020</p>
      </footer>
    </div>
  );
}

export default App;
