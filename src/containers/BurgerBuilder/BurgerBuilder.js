import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxilary/Aox';
import OrderSummary from '../../components/Burger/Order-Summary/Order-Summary';
import axios from '../../Axios-Order';
import LoadingSpinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICES = {
    Meat : 5.5,
    Salad : 6.5,
    Cheese : 7.5,
    Bacon : 8.5    
}


class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 4,
        purchaseable : false,
        purchasing : false,
        isLoading : false,
        error : false
    }

    showModalHandler = () => {
        this.setState({purchasing : true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing : false});
    }

    continuePurchaseHandler = () => {

        const queryParams = [];
        for(let ingredients in this.state.ingredients)
        {
            queryParams.push(encodeURIComponent(ingredients) + '=' + encodeURIComponent(this.state.ingredients[ingredients]));
        }
        // Object.keys(this.state.ingredients).map( ingredients => {
        //     queryParams.push(encodeURIComponent(ingredients) + '=' + encodeURIComponent(this.state.ingredients[ingredients]));
        // })
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname : '/checkout',
            search : '?' + queryString
        });
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

    componentDidMount() {
        axios.get('https://burger-builder-react-911c3-default-rtdb.firebaseio.com/Ingredients.json')
        .then(response => {
            this.setState({ ingredients : response.data })
        })
        .catch( error => { this.setState({ error : true }) });
    }

    render () {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummery = null;
        let burger = this.state.error ? <p> Burger Can't load </p> : <LoadingSpinner/>

        if(this.state.ingredients)
        {
            burger = (

                <Aux>
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
            );

            orderSummery = <OrderSummary 
                totalPurchase={this.state.totalPrice}
                ingredients={this.state.ingredients}
                cancelledPurchase={this.cancelPurchaseHandler}
                continuePurchase={this.continuePurchaseHandler}
            />
        }

        if(this.state.isLoading) 
        {
            orderSummery = <LoadingSpinner />
        }

        return(
            <Aux>
                <Modal 
                show={this.state.purchasing} 
                canceled={this.cancelPurchaseHandler}>
                    {orderSummery}                    
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);