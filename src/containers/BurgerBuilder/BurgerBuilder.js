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

        this.setState({ ingredients : updateIngredients});
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

        this.setState({ ingredients : updateIngredients});
    }

    disableButton = (key) => {

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
                />
            </Aux>
        )
    }
}

export default burger;