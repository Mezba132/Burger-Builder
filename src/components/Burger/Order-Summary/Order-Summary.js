import React from 'react';
import Aux from '../../../hoc/Aox';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
    return(
    <li>
        <span>{igKey} : {props.ingredients[igKey]}</span>
    </li>
    )});
    return (
    <Aux>
        <h3>Order Summary</h3>
        <p>Here is Your ingredients : </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Checkout ?</p>
    </Aux>
    )}

export default orderSummary;