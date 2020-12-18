import React from 'react';

import Classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={Classes.Toolbar}>
        <div>Menu</div>
        <div className={Classes.Logo}>
           <Logo />
        </div>
        <nav className={Classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;