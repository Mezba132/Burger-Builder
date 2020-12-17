import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aox';
import OrderSummary from '../../components/Burger/Order-Summary/Order-Summary';



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
        totalPrice : 4,
        purchaseable : false,
        purchasing : false
    }

    showModalHandler = () => {
        this.setState({purchasing : true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing : false});
    }

    continuePurchaseHandler = () => {
        alert('Submit');
    }

    updatePurchaseState (ingredients)  {
        const sum = Object.keys(ingredients)
        .map( igkey => { return ingredients[igkey]})
        .reduce( (sum, elemnt) => {
              return sum + elemnt;
        }, 0);
        this.setState({purchaseable : sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updateCount;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatePrice = oldPrice + priceAddition;
        
        this.setState({totalPrice: updatePrice, ingredients : updateIngredients});
        this.updatePurchaseState(updateIngredients);
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
        this.updatePurchaseState(updateIngredients);

    }

    render () {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal 
                show={this.state.purchasing} 
                canceled={this.cancelPurchaseHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    cancelledPurchase={this.cancelPurchaseHandler}
                    continuePurchase={this.continuePurchaseHandler}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>

                <BuildControls 
                addIngredients={this.addIngredientHandler} 
                removeIngredients={this.deleteIngredients}
                disabled={disableInfo}
                totalCost={this.state.totalPrice}
                purchaseNow={this.state.purchaseable}
                ordered={this.showModalHandler}
                />
            </Aux>
        )
    }
}

export default burger;