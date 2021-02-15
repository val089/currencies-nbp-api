import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = ({ opened, closeMenu }) => {

    const styles = {
        left: opened ? '0%': '-100%'
    };

    return(
        <nav className="menu" style={styles}>
            <ul className="menu__links-list">
                <li className="menu__item" onClick={closeMenu}>
                    <NavLink exact to="/currencies-nbp-api" className="menu__link" activeClassName="menu__link--active">Home</NavLink>
                </li>
                <li className="menu__item" onClick={closeMenu}>
                    <NavLink exact to="/currencies-nbp-api/favourites" className="menu__link" activeClassName="menu__link--active">Favourites</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
