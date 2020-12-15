import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './BurgerIngredients.module.css'

class BurgerIngreditents extends Component {
    render () {
        let ingredients = null;
        switch (this.props.type) {
            case ('Bread-top'):
                ingredients = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                    </div>
                break;
            case ('Meat') :
                ingredients = <div className={classes.Meat}></div> 
                break;
            case ('Cheese') :
                ingredients = <div className={classes.Cheese}></div> 
                break;
            case ('Salad') :
                ingredients = <div className={classes.Salad}></div> 
                break;
            case ('Bacon') :
                ingredients = <div className={classes.Bacon}></div> 
                break;
            case ('Bread-Bottom') : 
            ingredients = <div className={classes.BreadBottom}></div>
                break;
            default:
                ingredients = null;
                break;
        }

        return ingredients;
    }
}

BurgerIngreditents.propTypes = {
    type : propTypes.string.isRequired
}

export default BurgerIngreditents;