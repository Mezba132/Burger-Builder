import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxilary/Aox';
import OrderSummary from '../../components/Burger/Order-Summary/Order-Summary';
import axios from '../../Axios-Order';
import LoadingSpinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
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
        this.props.history.push('/checkout');
    }

    updatePurchaseState (ingredients)  {
        const sum = Object.keys(ingredients)
        .map( igkey => { return ingredients[igkey]})
        .reduce( (sum, elemnt) => {
              return sum + elemnt;
        }, 0);
        return  sum > 0;
    }

    componentDidMount() {
        // axios.get('https://burger-builder-react-911c3-default-rtdb.firebaseio.com/Ingredients.json')
        // .then(response => {
        //     this.setState({ ingredients : response.data })
        // })
        // .catch( error => { this.setState({ error : true }) });
    }

    render () {
        const disableInfo = {...this.props.ings};
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummery = null;
        let burger = this.state.error ? <p> Burger Can't load </p> : <LoadingSpinner/>

        if(this.props.ings)
        {
            burger = (

                <Aux>
                    <Burger ingredients={this.props.ings}/>

                    <BuildControls
                        addIngredients={this.props.onAddIngredients}
                        removeIngredients={this.props.onRemoveIngredients}
                        disabled={disableInfo}
                        totalCost={this.props.price}
                        purchaseNow={this.updatePurchaseState(this.props.ings)}
                        ordered={this.showModalHandler}
                    />
                </Aux>
            );

            orderSummery = <OrderSummary
                totalPurchase={this.props.price}
                ingredients={this.props.ings}
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

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredients : (ingName) => dispatch({type : actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onRemoveIngredients : (ingName) => dispatch({type : actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));