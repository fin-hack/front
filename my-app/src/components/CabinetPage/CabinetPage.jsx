import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withLoginRedirect} from "../common/withLoginRedirect/withLoginRedirect";
import {logout} from "../../store/reducers/loginPageReducer";
import Profile from "../Profile/Profile";
import {CSSTransition} from "react-transition-group";
import {Route} from "react-router-dom";
import Team from "../Team/Team";
import s from './CabinetPage.module.css';
import NavBar from "../NavBar/NavBar";

const SECTIONS = [
    {
        url: '/cabinet/',
        Component: Profile,
        name: 'profile'
    },
    {
        url: '/cabinet/team/',
        Component: Team,
        name: 'team'
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

        return (
            <div className={s.wrapper}>
                <NavBar sections={SECTIONS}/>
                <div>
                    {sections}
                </div>
            </div>
        )
    }
}

export default compose(
    connect(null, {logout}),
    withLoginRedirect
)(Cabinet);