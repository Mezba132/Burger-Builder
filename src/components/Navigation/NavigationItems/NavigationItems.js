import React from 'react';
import NavItem from './NavigationItem/NavigationItem';
import Classes from './NavigationItems.module.css'

const navItems = () => (
    <div className={Classes.NavigationItems}>
        <NavItem Link="/" exact={true}>Burger Builder</NavItem>
        <NavItem Link="/orders">Orders</NavItem>
    </div>
)


export default navItems;