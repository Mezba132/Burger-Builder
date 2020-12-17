import React from 'react';

import Classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={Classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;