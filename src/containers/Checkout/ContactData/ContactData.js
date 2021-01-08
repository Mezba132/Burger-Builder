import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import axios from "../../../Axios-Order";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state={
        name : '',
        email: '',
        address: {
            street : '',
            postCode : ''
        },
        isLoading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ isLoading : true });
        const order = {
            ingredients : this.props.ingredients,
            totalCost : this.props.totalPrice,
            customer_details : {
                name : 'mezba',
                email: 'mezba@gmail.com',
                address : {
                    street : 'nikunzo-2',
                    city : 'Dhaka'
                }
            },
            delivery_service : 'Fast'
        }
        axios.post('/orders.json', order)
        .then(res => this.setState({ isLoading : false }))
        .catch(err => this.setState({ isLoading : false }));
    }

    render() {
        let form = <form onSubmit={this.orderHandler}>
            <input type='text' className={Classes.Input} name="name" placeholder='Your Name'/>
            <input type='text' className={Classes.Input} name="email" placeholder='Your Mail'/>
            <input type='text' className={Classes.Input} name="street" placeholder='Street'/>
            <input type='text' className={Classes.Input} name="post" placeholder='postCode '/>
            <Button btnType='Success'>Order</Button>
        </form>

        if(this.state.isLoading)
        {
            form = <Spinner />
        }
        return(
            <div className={Classes.ContactData}>
                <h2>Enter Your Details</h2>
                {form}
            </div>
        );
    }
}

export default ContactData;