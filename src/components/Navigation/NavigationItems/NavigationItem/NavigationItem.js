import React from 'react';
import classes from './NavigationItem.module.css';

const navItem = (props) => (
    <div className={classes.NavigationItem}>
        <a href={props.Link} className={props.active ? classes.active : null}>{props.children}</a>
    </div>
)

export default navItem;