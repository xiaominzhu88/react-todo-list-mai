import React, { useState } from 'react';
import { useCheckboxState, Checkbox } from 'reakit/Checkbox';
/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import './Todos.css';

export default function Todos(props) {
  const checkbox = useCheckboxState({ state: [] });

  const checkedStyle = css`
    margin-right: 2rem;
    /*text-decoration-line: line-through;*/
  `;

  return (
    <div>
      {/* Use 'map' to map over the todos from parent App.js to get each list, include remove button and checkbox input */}

      <ul className="todos">
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
                  //style={{
                  //  textDecorationLine: !checkbox.state
                  //    ? 'line-through'
                  //    : 'none'
                  //}}
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
      </ul>
      {/* !! Update the 'checked Text', if there is no checked list, then no display, otherwise add the 'checked' list-name to the text */}
      <div
        style={{
          display: !checkbox.state.length ? 'none' : 'block',
          backgroundColor: 'rgb(177, 176, 176)',
          padding: '1rem',
          width: '40%',
          margin: '0 auto',
          borderRadius: '5px',
          color: 'rgb(54, 54, 211)',
          boxShadow: '0px 3px 3px orange',
        }}
      >
        Complete: {checkbox.state.join(', ')}
      </div>
    </div>
  );
}
