import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from "react-router-dom";

const navItem = (props) => (
    <div className={classes.NavigationItem}>
        <NavLink
            activeClassName={classes.active}
            to={props.Link}
            exact={props.exact}>{props.children}</NavLink>
    </div>
)

export default navItem;