import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withLoginRedirect} from "../common/withLoginRedirect/withLoginRedirect";
import {logout} from "../../store/reducers/loginPageReducer";
import Achievements from "../Achievements/Achievements";
import {CSSTransition} from "react-transition-group";
import {NavLink, Route} from "react-router-dom";
import Tracker from "../Tracker/Tracker";

const SECTIONS = [
    {
        url: '/cabinet/',
        Component: Achievements,
        name: 'achievements'
    },
    {
        url: '/cabinet/tracker/',
        Component: Tracker,
        name: 'tracker'
    }
];

class Cabinet extends React.Component {
    render() {
        const sections = SECTIONS.map(page => {
            return (
                <Route key={page.url} exact path={page.url}>
                    {
                        ({match}) => {
                            return <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="section"
                                unmountOnExit
                            >
                                <div className="section">
                                    <page.Component/>
                                </div>
                            </CSSTransition>
                        }
                    }
                </Route>
            )
        });

        const links = SECTIONS.map(page => {
            return <NavLink key={page.name} to={page.url}>{page.name}</NavLink>
        });

        return (
            <div>
                <nav>
                    {links}
                </nav>
                {sections}
            </div>
        )
    }
}

export default compose(
    connect(null, {logout}),
    withLoginRedirect
)(Cabinet);