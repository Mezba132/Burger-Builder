import React from 'react';
import NavItem from './NavigationItem/NavigationItem';
import Classes from './NavigationItems.module.css'

const navItems = () => (
    <div className={Classes.NavigationItems}>
        <NavItem Link="/" active>Burger Builder</NavItem>
        <NavItem Link="/">CheckOut</NavItem>
    </div>
)


export default navItems;