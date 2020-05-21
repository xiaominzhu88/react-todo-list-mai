import React from 'react';
import './Control.css';

export default function Control(props) {
  return (
    <div className="control">
      <ul className="control-table">
        <li key={props.count}>
          <span style={{ color: 'orange', fontSize: '1.5rem' }}>
            {props.count}
          </span>{' '}
          todos
        </li>

        <li className="li" key="active" 
        onClick={props.active}
        >Active</li>

        <li className="li" key="completed" 
      onClick ={props.completed}>
          Complete
        </li>
        <li className="li" key="clear" onClick={props.clear}>
          Clear All
        </li>
      </ul>
      <p className='para'>{props.infoText}</p>
    </div>
  );
}
