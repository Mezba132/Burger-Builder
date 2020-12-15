import { object } from 'prop-types';
import React from 'react';
import Classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    let transformedIngredients = Object.keys( props.ingredients) // convert object into array
    .map( igKey => {
        // console.log (props.ingredients[igKey]); // Grab Object Properties Value
        return [...Array(props.ingredients[igKey])]
        .map( (_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    });

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please Select Some Ingredients</p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredients type="Bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="Bread-Bottom"/>
        </div>
    )
}

export default burger;