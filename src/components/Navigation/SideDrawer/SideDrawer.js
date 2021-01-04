import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems'; 
import Classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxilary/Aox';
import BackDrop from '../../UI/BackDrop/BackDrop';


const sideDrawer = (props) => {

    let attachedSideDrawer = [Classes.SideDrawer, Classes.Close];
    if (props.open)
    {
        attachedSideDrawer = [Classes.SideDrawer, Classes.open];
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.close}/>
            <div className={attachedSideDrawer.join(' ')}>
                <div className={Classes.Logo}>
                <Logo />
                </div>
                <NavItems />
            </div>
        </Aux>

    ) 
}


export default sideDrawer;

