import React from 'react';
import './Control.css';

export default function Control(props,i) {
  return (
    <div className="control">
      <ul className="control-table">
        <li key={Date.now()}>
          <span style={{ color: 'orange', fontSize: '1.5rem' }}>
            {props.count}
          </span>{' '}
          todos
        </li>

        <li className="li" key="active" onClick={()=>{}}>
          Active
        </li>

        {/*  <li className="li" key="completed">
          Complete 
        </li>  */}

        <li className="li" key="clear" onClick={props.clear}>
          Clear All
        </li>
      </ul>
    </div>
  );
}
