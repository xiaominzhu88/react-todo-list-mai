import React, { useState } from 'react';
import Control from './Control';
import './App.css';

function App() {
  const [todos, setTodos] = useState([{ input: '', checked: false }]);
  //Initial state to update todos
  const [filtered, setFiltered] = useState('');

  // Use Enter and Backspace Event to get / remove the current list
  function keyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoIndexValue(e, i);
    }
    // if 'Backspace' is pressed, and there is NO input, remove this todo list and this input form
    if (e.key === 'Backspace' && todos[i].input === '') {
      e.preventDefault();
      return removeTodo(i);
    }
  }

  function createTodoIndexValue(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      input: '',
      checked: false,
    });
    setTodos(newTodos);
  }
  // if the index of delete list is 0 and todos array length is 1, return null
  // otherwise use SLICE to get the hole index of delete list
  // then CONCAT next todos list => it makes possible to delete each list without order => remove list but except the first one
  function removeTodo(indexToDelete) {
    return indexToDelete === 0 && todos.length === 1
      ? null
      : setTodos((todo) =>
          todos
            .slice(0, indexToDelete)
            .concat(todos.slice(indexToDelete + 1, todos.length)),
        );
  }

  // Copy todos array use [...todos], change todo input key with the value inside of the event object, update todos object with updated copy
  function add(e, i) {
    const newTodos = [...todos];
    newTodos[i].input = e.target.value;
    setTodos(newTodos);
  }

  // toggle the checkbox, a temporary todo if it's checked or not
  function toggle(i) {
    const toCheckTodos = [...todos];
    toCheckTodos[i].checked = !toCheckTodos[i].checked;
    setTodos(toCheckTodos);
  }

  // clear all the todo lists exept the first input and checkbox to render at the page
  function clear() {
    setTodos([{ input: '', checked: false }]);
  }

  function all(i) {
    setFiltered(todos);
  }

  function complete(i) {
    setFiltered('completed');
  }

  function activ(i) {
    setFiltered('active');
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <form className="todo-list">
        <ul>
          {/* Use FILTER to filter to show different content with 'completed','active' or 'all'*/}
          {todos
            .filter((todo, i) => {
              if (filtered === 'completed') {
                return todo.checked === true;
              } else if (filtered === 'active') {
                return todo.checked === false;
              } else if (filtered === 'all') {
                return todo;
              }
              return true;
            })

            .map((todo, i) => {
              return (
                <div className="todo" key={`${todo}_${i}`}>
                  <div className={'checkbox'} onClick={() => toggle(i)}>
                    {todo.checked && <span>&#x2714;</span>}
                  </div>
                  <span>☞☞☞</span>
                  <input
                    style={{
                      textDecoration: todo.checked
                        ? 'line-through solid red'
                        : 'none',
                      backgroundColor: 'rgb(177, 176, 176)',
                      borderRadius: '8px',
                      color: 'rgb(54, 54, 211)',
                      boxShadow: '0px 3px 3px orange',
                    }}
                    placeholder="Enter task"
                    type="text"
                    value={todo.input}
                    onKeyDown={(e) => keyDown(e, i)}
                    onChange={(e) => add(e, i)}
                    checked={todo.checked}
                  />
                </div>
              );
            })}
        </ul>
      </form>

      <Control
        count={todos.length - 1}
        clear={clear}
        activ={activ}
        all={all}
        complete={complete}
      />

      <footer>
        <p className="copyright">&copy;opyright </p>
        <p className="copyright">Zhu 2020</p>
      </footer>
    </div>
  );
}

export default App;
