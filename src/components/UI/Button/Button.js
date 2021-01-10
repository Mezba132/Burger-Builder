import React from 'react';
import Classes from './Button.module.css';

const button = (props) => {
     return (
              <button
                  disabled={props.disabled}
                  className={[Classes.Button, Classes[props.btnType]].join(' ')}
                  onClick={props.clicked}>{props.children}</button>
     )
}

export default button;

