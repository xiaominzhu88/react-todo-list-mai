import React, { useState } from 'react';
import Todos from './Todos';
import Control from './Control';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [infoText, setInfoText] = useState('');
  const [checked, setChecked] = useState(false);
  //const [checkedList, setCheckedList] = useState(0);

  const change = (e) => {
    setInput(e.target.value);
  };

  function add() {
    setInput('');
    return input ? setTodos([...todos, input]) : null;
  }

  function deleteEachList(indexToDelate) {
    const newTodos = todos.filter((item, index) => {
      return index !== indexToDelate;
    });
    setTodos(newTodos);
  }

  function clearAll() {
    setTodos([]);
    setInfoText('');
  }

  function completed() {
    const info = `${todos.length} completed`;

    setTodos(todos);
    setInfoText(info);
  }

  function checkedItem() {
    setChecked(!checked);
  }

  
  return (
    <div className="App">
      <h1>Todo-List</h1>
      <input value={input} onChange={change} />
      <button className="addButton" onClick={add}>
        add
      </button>
      <Todos
        key={todos}
        value={todos}
        deleteEachList={deleteEachList}
        checkedItem={checkedItem}
      />
      <Control
        count={todos.length}
        clear={clearAll}
        completed={completed}
        infoText={infoText}
      />
      <p className="copyright">&copy; Zhu 2020</p>
    </div>
  );
}

export default App;
