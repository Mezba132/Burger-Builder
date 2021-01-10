import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    let inputClass = [classes.InputElement]
    if(props.invalid && props.validDropDown && props.isTouched)
    {
        inputClass.push(classes.Invalid)
    }
    switch (props.elementType) {
        case 'input' :
             inputElement = <input
                 className={inputClass.join(' ')}
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed}/>
             break;
        case 'textarea' :
             inputElement = <textarea
                 className={inputClass.join(' ')}
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed}/>
             break;
        case 'select' :
            inputElement = <select
                className={inputClass.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map( option => { return <option key={option.value}
                value={option.value}>{option.displayValue}</option>})}</select>
            break;
        default :
             inputElement = <input
                 className={inputClass.join(' ')}
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed}/>
             break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}> {props.label} </label>
            {inputElement}
        </div>
    );
}

export default Input;