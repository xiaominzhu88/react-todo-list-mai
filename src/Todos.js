import React, { useState } from 'react';
import { useCheckboxState, Checkbox } from 'reakit/Checkbox';

/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import './Todos.css';

export default function Todos(props) {
  const checkbox = useCheckboxState({ state: [] });
  const [showCompletedValue, setShowCompletedValue] = useState(true);

  // Css for the lists
  const checkedStyle = css`
    margin-right: 2rem;
    /*text-decoration-line: line-through;*/
  `;

  // Css for toggle button
  const buttonStyle = css`
    background-color: rgb(177, 176, 176);
    padding: 1rem;
    width: 10%;
    margin: 0 auto;
    border-radius: 8px;
    color: rgb(54, 54, 211);
    box-shadow: 0px 3px 3px orange;
    margin-bottom: 1rem;
  `;

  

  return (
    <div className="todos">
      {/* Use 'map' to map over the todos from parent App.js to get each list, include remove button and checkbox input */}
      {props.todos.map((todo, i) => {
        return (
          <div>
            <label>
              <Checkbox
                style={{ display: 'block' }}
                className="listItem"
                value={todo}
                {...checkbox}
              />
              <span
                css={checkedStyle}
                //  style={{
                //    textDecorationLine:
                //      ? 'line-through'
                //      : 'none',
                //  }}
              >
                {todo}
              </span>{' '}
              ☞☞☞
              <button
                className="removeButton"
                // !! pass the deleteEachList function Call with current index, to get this function called in parent App.js
                onClick={() => props.deleteEachList(i)}
              >
                remove
              </button>
            </label>
          </div>
        );
      })}

      {/* Toggle Button, it remembers the complete lists wenn give the same input, then i can choose if to remove it */}
      <button
        css={buttonStyle}
        onClick={() => {
          setShowCompletedValue(!showCompletedValue);
        }}
      >
        Show/Hide Complete{' '}
      </button>

      {/* !! Update the 'completed list', if there is no checked list, then no display, otherwise add the 'completed' list-name to the 'toggle-TEXT' */}
      {showCompletedValue ? (
        <div
          style={{
            display: !checkbox.state.length ? 'none' : 'block',
            backgroundColor: 'rgb(177, 176, 176)',
            padding: '1rem',
            width: '30%',
            margin: '0 auto',
            borderRadius: '8px',
            color: 'rgb(54, 54, 211)',
            boxShadow: '0px 3px 3px orange',
          }}
        >
          Complete to uncheck: <br />
          {checkbox.state.join(' 🔶 ')} <br />
        </div>
      ) : null}
    </div>
  );
}
