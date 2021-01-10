import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import axios from "../../../Axios-Order";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from "../../../components/UI/Input/Input";
import { connect } from 'react-redux';

class ContactData extends Component {
    state={
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Name'
                },
                value : '',
                validity : {
                    required : true
                },
                isValid : false,
                isTouch : false
            },
            email: {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Email'
                },
                value : '',
                validity : {
                    required : true
                },
                isValid : false,
                isTouch : false
            },
            street : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Street No.'
                },
                value : '',
                validity : {
                    required : true
                },
                isValid : false,
                isTouch : false
            },
            postCode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Post Code'
                },
                value : '',
                validity : {
                    required : true,
                    min_length : 4,
                    max_length : 6
                },
                isValid : false,
                isTouch : false
            },
            city : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your City'
                },
                value : '',
                validity : {
                    required : true
                },
                isValid : false,
                isTouch : false
            },
            delivery_service : {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue : 'Fastest'},
                        {value : 'cheapest', displayValue : 'Cheapest'},
                    ]
                },
                value : 'fastest',
                validity : {},
                isValid : true
            }
        },
        isFormValid : false,
        isLoading: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if(rules.required)
        {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.min_length)
        {
            isValid = value.trim().length >= rules.min_length && isValid;
        }
        if(rules.max_length)
        {
            isValid = value.trim().length <= rules.max_length && isValid;
        }
        return isValid;
    }

    onInputChangeHandler = (event, id) => {
        const updateForm = {
            ...this.state.orderForm    // clone deeply orderForm (immutably)
        }
        const updateFormElement = {
            ...updateForm[id]         // clone deeply orderForm's inside objects like name : { ... }, email : { ... }  (immutably)
        }
        updateFormElement.value = event.target.value;
        updateFormElement.isValid = this.checkValidity(updateFormElement.value, updateFormElement.validity)
        updateFormElement.isTouch = true;
        updateForm[id] = updateFormElement;

        let isFormValid = true;
        for(let inputId in updateForm)
        {
            isFormValid = updateForm[inputId] && isFormValid;
        }

        this.setState({ orderForm : updateForm, isFormValid : isFormValid });
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ isLoading : true });
        let updateOrderForm = {}
        for(let id in this.state.orderForm)
        {
            updateOrderForm[id] = this.state.orderForm[id].value;
        }
        const order = {
            ingredients : this.props.ings,
            totalCost : this.props.price,
            customer_details : updateOrderForm
        }
        axios.post('/orders.json', order)
        .then(res => this.setState({ isLoading : false }))
        .catch(err => this.setState({ isLoading : false }));
    }



    render() {
        let formElements = [];
        for(let key in this.state.orderForm) {
            formElements.push({
                id : key, // name,email,street,....
                config : this.state.orderForm[key] // name : { elementType, elementConfig, value }, ...
            })
        }

        let form = <form onSubmit={this.orderHandler}>
            {formElements.map( formEl => {
                return <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                    invalid={!formEl.config.isValid}
                    validDropDown={formEl.config.validity}
                    isTouched={formEl.config.isTouch}
                    changed={(event) => this.onInputChangeHandler(event, formEl.id)}/>
            })}
            <Button btnType='Success' disabled={!this.state.isFormValid}>Order</Button>
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

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);