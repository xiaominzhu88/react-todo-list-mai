import React, { useState } from 'react';
import { useCheckboxState, Checkbox } from 'reakit/Checkbox';

/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import './Todos.css';

export default function Todos(props) {
  const checkbox = useCheckboxState({ state: [] });
  const [showing, setShowing] = useState(true);

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
    <div>
      {/* Use 'map' to map over the todos from parent App.js to get each list, include remove button and checkbox input */}
      <div className="todos">
        {props.todos.map((todo, i) => {
          return (
            <>
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
            </>
          );
        })}
      </div>

      <button
        css={buttonStyle}
        onClick={() => {
          setShowing(!showing);
        }}
      >
        Show/Hide Complete{' '}
      </button>
      {showing ? (
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
          Complete: <br />
          {/* !! Update the 'completed list', if there is no checked list, then no display, otherwise add the 'completed' list-name to the text */}
          {checkbox.state.join(' 🔶 ')} <br />
        </div>
      ) : null}
    </div>
  );
}
