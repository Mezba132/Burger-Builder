import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../Axios-Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component{
    state = {
        orders : [],
        isLoading : true
    }
    componentDidMount() {
        axios.get('orders.json')
            .then(response => {
                const fetchData = [];
                for(let key in response.data)
                {
                    fetchData.push({         // push object into array
                        ...response.data[key],
                        id : key
                    })
                }
                // console.log(fetchData);
                this.setState({ orders : fetchData, isLoading : false})
            })
            .catch( err => {
                this.setState({ isLoading : false})
            })
    }

    render() {

        let order = this.state.orders.map( order =>
            <Order
            key = {order.id}
            ingredients = {order.ingredients}
            price = {order.totalCost}/>
        )

        return (
            <div>
                {order}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);