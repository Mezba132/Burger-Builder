import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            Bacon: 0,
            Cheese: 0,
            Meat: 1,
            Salad: 0,
        }
    }

    componentDidMount() {
        console.log('[checkout.js] componentDidMount')
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()) {
            ingredients[param[0]] = +param[1];
            console.log(ingredients);
        }
        this.setState({ ingredients : ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;