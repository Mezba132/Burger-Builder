import React from 'react';
import Classes from './BackDrop.module.css';

const backDrop = (props) => (
    props.show ? <div className={Classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backDrop;