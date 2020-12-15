import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

import Aux from '../../hoc/Aox';

class burger extends Component {

    state = {
        ingredients : {
            Meat : 0,
            Salad : 1,
            Cheese : 2,
            Bacon : 0
        }
    }

    render () {
        return(
            <Aux>
                <div>
                   <Burger ingredients={this.state.ingredients}/>
                </div>
            </Aux>
        )
    }
}

export default burger;