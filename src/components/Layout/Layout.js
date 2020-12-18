import React, { Component } from 'react';
import Classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import Aux from '../../hoc/Aox';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer : true
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer : false});
    }

    render() {
        return (
            <Aux>
                <SideDrawer 
                open={this.state.showSideDrawer}
                close={this.sideDrawerCloseHandler}/>
                <ToolBar /> 
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;