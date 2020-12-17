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
        <p>Total Cost : <strong>{props.totalCost.toFixed(2)}</strong></p>
            {controls.map( bctrl => {
            return <BuildControl 
            key={bctrl.label} 
            label={bctrl.label} 
            added={ () => props.addIngredients(bctrl.type)}
            removed={ () => props.removeIngredients(bctrl.type)}
            disabled= {props.disabled[bctrl.type]}
            />
            })}
        <button 
        className={Classes.OrderButton}
        disabled={!props.purchaseNow}
        onClick={props.ordered}
        >Order Now</button>
        </div>
)
    

export default buildControls;