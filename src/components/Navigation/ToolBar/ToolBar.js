import React from 'react';

import Classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
 
const toolbar = (props) => (
    <header className={Classes.Toolbar}>

        <DrawerToggle clicked={props.drawerToggleClicked}/>

        <div className={Classes.Logo}>
           <Logo />
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;