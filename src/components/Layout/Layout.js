import React from 'react';
import Classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import Aux from '../../hoc/Aox';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <SideDrawer />
        <ToolBar /> 
        <main className={Classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;