import React from 'react';
import Classes from './Modal.module.css';
import Aux from '../../../hoc/Aox';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <Aux>
        <BackDrop show={props.show} clicked={props.canceled}/>
        <div 

            className={Classes.Modal}
            style ={{
                transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? '1' : '0'
            }}>
            
            {props.children}

        </div>
    </Aux>
);

export default modal;