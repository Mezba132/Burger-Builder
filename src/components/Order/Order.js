import React from "react";
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for(let ig in props.ingredients)
    {
        ingredients.push({
            name : ig,
            quantity : props.ingredients[ig]
        })
    }
    let allIngredients = ingredients.map( i => {
        return <div>
                   <p>Name : {i.name} , Quantity : {i.quantity} </p>
             </div>
    })
    return (
        <div className={classes.Order}>
            <h3>Ingredients :</h3>
            { allIngredients }
            <p>TotalPrice = ${props.price} </p>
        </div>
    )
}

export default order;