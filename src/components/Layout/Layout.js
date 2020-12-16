import React from 'react';
import Classes from './Layout.module.css';
 
import Aux from '../../hoc/Aox';

const layout = (props) => (
    <Aux>
        <main className={Classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;