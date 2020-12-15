import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aox';

const INGREDIENTS_PRICES = {
    Meat : 5.5,
    Salad : 6.5,
    Cheese : 7.5,
    Bacon : 8.5    
}


class burger extends Component {

    state = {
        ingredients : {
            Meat : 0,
            Salad : 0,
            Cheese : 0,
            Bacon : 0
        },
        totalPrice : 4
    }

    addIngredientHhandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updateCount;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + priceAddition;
        console.log(updatePrice);
        
        this.setState({totalPrice: updatePrice, ingredients : updateIngredients});
    }

    deleteIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updateCount;
        this.setState({ingredients : updateIngredients});

        const priceReduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice - priceReduction;
        console.log(updatePrice);

        this.setState({totalPrice: updatePrice, ingredients : updateIngredients});
    }

    render () {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredients={this.addIngredientHhandler} 
                removeIngredients={this.deleteIngredients}
                disabled={disableInfo}
                totalCost={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default burger;