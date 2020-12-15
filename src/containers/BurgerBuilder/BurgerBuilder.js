import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

import Aux from '../../hoc/Aox';

class burger extends Component {
    render () {
        return(
            <Aux>
                <div>
                   <Burger />
                </div>
            </Aux>
        )
    }
}

export default burger;