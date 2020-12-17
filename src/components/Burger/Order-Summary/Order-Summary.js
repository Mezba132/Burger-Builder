import React from 'react';
import Aux from '../../../hoc/Aox';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
    return(
    <li key={igKey}>
         <span>{igKey} : {props.ingredients[igKey]}</span>   {/* Salad : 1 */}
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
        <Button type="Danger" clicked={props.cancelledPurchase}>Cancel</Button>
        <Button type="Success" clicked={props.continuePurchase}>Coninue</Button>
    </Aux>
    )}

export default orderSummary;