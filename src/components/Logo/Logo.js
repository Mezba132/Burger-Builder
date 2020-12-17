import React from 'react';
import Classes from './Logo.module.css';
import image from '../../assets/burger-logo.png'

const logo = () => (
    <div className={Classes.Logo}>
        <img src={image} alt="MyBurger"/>
    </div>
)

export default logo;