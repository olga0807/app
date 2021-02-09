import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavigationItem.css';


const navigationItem = (props) => {

    //Сhecking if the menu item has a submenu
    let subMenu, subMenuIcon = null;

    if (props.subMenu  && props.showedSubMenu) {
        subMenu = <ul className="Submenu">
            {props.subMenu.map( item =>
                <NavLink
                    key={props.name + Math.random()}
                    to={props.link + '/' + item.toLowerCase()}
                    exact
                    activeStyle={{
                        backgroundColor: "#1A1C1F",
                        color: "#39C5C8"
                    }}>
                    {item}
                </NavLink>
            )}
        </ul>;

        subMenuIcon = <FontAwesomeIcon id="subMenuIcon" onClick={ props.hideSubMenu} className="hideButton" icon="chevron-down"/>

    };

    return (
        <li className="NavigationItem" onClick={props.showSubMenuHandler}>
            {subMenuIcon}
            <NavLink
                to={props.link}
                activeClassName="active">
            <span className="LinkIcon">
            <FontAwesomeIcon icon={props.icon} />
            </span>
                {props.children}
                {subMenu}
            </NavLink>
        </li>
    )};

export default navigationItem;


