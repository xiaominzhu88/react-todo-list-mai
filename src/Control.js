import React from 'react';
import './Control.css';

export default function Control({ all, activ, complete, clear, count }, i) {
  return (
    <div className="control">
      <ul className="control-table">
        <li key={Date.now()}>
          <span style={{ color: 'orange', fontSize: '1.5rem' }}>{count}</span>{' '}
          todos
        </li>

        <li className="li" key="all" onClick={() => all(i)}>
          All
        </li>

        <li className="li" key="activ" onClick={() => activ(i)}>
          Activ
        </li>

        <li className="li" key="completed" onClick={() => complete(i)}>
          Complete
        </li>

        <li className="li" key="clear" onClick={()=>clear(i)}>
          Clear All
        </li>
      </ul>
    </div>
  );
}
