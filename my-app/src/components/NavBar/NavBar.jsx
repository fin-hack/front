import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        const links = this.props.sections.map(page => {
            return (
                <NavLink key={page.name}
                         to={page.url}
                         className={s.link}
                >
                </NavLink>
            )
        });

        return (
            <nav className={s.nav}>
                {links}
            </nav>
        )
    }
}

export default NavBar;