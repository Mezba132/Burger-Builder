import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems'; 
import Classes from './SideDrawer.module.css';

const sideDrawer = () => {
    return (
        <div className={Classes.SideDrawer}>
            <div className={Classes.Logo}>
               <Logo />
            </div>
            <NavItems />
        </div>
    ) 
}


export default sideDrawer;

