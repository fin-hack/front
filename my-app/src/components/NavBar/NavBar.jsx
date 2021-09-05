import React from 'react';
import s from './NavBar.module.css';
import {NavLink, withRouter} from "react-router-dom";
import {logout} from "../../store/reducers/loginPageReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import NotificationsButton from "./NotificationsButton/NotificationsButton";

class NavBar extends React.Component {
    render() {
        const links = this.props.sections.map(page => {
            return (
                <NavLink key={page.name}
                         to={page.url}
                         className={s.link}
                         activeClassName={s.active}
                >
                    <page.NavComponent/>
                </NavLink>
            )
        });

        return (
            <div>
                <nav className={s.nav}>
                    <div className={s.links}>
                        <NotificationsButton />
                        {links}
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/SignOut.svg'}
                         className={s.link}
                         alt=''
                         onClick={() => this.props.logout()}
                    />
                </nav>
            </div>
        )
    }
}

export default compose(
    connect(null, {logout}),
    withRouter
)(NavBar);