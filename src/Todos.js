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
      <ul className="todos">
        {props.value.map((todo, i) => {
          return (
            <>
              <label>
                <Checkbox
                  style={{ display: 'block' }}
                  className="listItem"
                  key={`${todo}_${i}`}
                  value={todo}
                  onChange={props.checkedItem}
                  {...checkbox}
                />
                <span css={checkedStyle}>{todo}</span> ☞☞☞
                
                <button className="removeButton" onClick={props.deleteEachList}>remove</button>
              </label>
            </>
          );
        })}
      </ul>
    </div>
  );
}
