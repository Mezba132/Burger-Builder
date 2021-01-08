import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: null,
        price : 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;
        for(let param of query.entries()) {
            if(param[0] === 'price')
            {
                totalPrice = param[1];
            }
            else
            {
                ingredients[param[0]] = +param[1];
            }
            console.log(ingredients);
        }
        this.setState({ ingredients : ingredients, price : totalPrice});
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
                    ingredients={this.state.ingredients} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        render={() =>
                            <ContactData
                                ingredients={this.state.ingredients}
                                totalPrice={this.state.price}/>
                         } />
            </div>
        );
    }
}

export default Checkout;