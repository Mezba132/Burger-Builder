import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aox';

class burger extends Component {

    state = {
        ingredients : {
            Meat : 0,
            Salad : 0,
            Cheese : 0,
            Bacon : 0
        }
    }

    addIngredientHhandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updateCount;
        this.setState({ingredients : updateIngredients});
    }

    render () {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredientHhandler} />
            </Aux>
        )
    }
}

export default burger;