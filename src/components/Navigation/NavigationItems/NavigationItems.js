import React from 'react';

import './NavigationItems.css';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';




const NavigationItems = (props) => {

    return (
        <ul className="NavigationItems" >
            {props.menu.map((item) =>
                <NavigationItem key={item.name + Math.random()}
                                link={item.link}
                                icon={item.icon}
                                subMenu={item.subMenu}
                                showedSubMenu={item.showedSubMenu}
                                showSubMenuHandler={(event) => props.showSubMenu(item.name, event)}
                                hideSubMenu ={props.hideSubMenu}>
                    {item.name}
                </NavigationItem>
            )}
        </ul>
    )};

export default NavigationItems;


