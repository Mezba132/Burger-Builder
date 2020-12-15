import React from 'react';
import Classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    return (
        <div className={Classes.Burger}>
            <BurgerIngredients type="Bread-top"/>
            <BurgerIngredients type="Cheese"/>
            <BurgerIngredients type="Meat"/>
            <BurgerIngredients type="Bread-Bottom"/>
        </div>
    )
}

export default burger;