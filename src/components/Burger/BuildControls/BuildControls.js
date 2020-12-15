import React from 'react';
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label : "Salad" , type : "Salad"},
    { label : "Meat" , type : "Meat"},
    { label : "Cheese" , type : "Cheese"},
    { label : "Bacon" , type : "Bacon"},
];

const buildControls = (props) => (
        <div className={Classes.BuildControls}>
            {controls.map( bctrl => {
            return <BuildControl 
            key={bctrl.label} 
            label={bctrl.label} 
            added={ () => props.addIngredients(bctrl.type)}
            removed={ () => props.removeIngredients(bctrl.type)}
            disabled= {props.disabled[bctrl.type]}
            />
            })}
        </div>
)
    

export default buildControls;