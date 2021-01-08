import React, { Component } from 'react';
import Classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import Aux from '../Auxilary/Aox';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer : false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState => {
            return { showSideDrawer : !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/> 
                <SideDrawer 
                open={this.state.showSideDrawer}
                close={this.sideDrawerCloseHandler}/>
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;