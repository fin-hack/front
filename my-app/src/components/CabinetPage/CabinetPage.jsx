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
        url: '/cabinet',
        Component: Profile,
        name: 'profile',
        icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 36.75C31.866 36.75 35 33.616 35 29.75C35 25.884 31.866 22.75 28 22.75C24.134 22.75 21 25.884 21 29.75C21 33.616 24.134 36.75 28 36.75Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4996 41.9996C18.7223 40.3696 20.3077 39.0467 22.1302 38.1356C23.9527 37.2244 25.9623 36.75 27.9999 36.75C30.0375 36.75 32.0471 37.2242 33.8696 38.1353C35.6922 39.0464 37.2776 40.3692 38.5004 41.9991" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45.5 47.25V8.75C45.5 7.7835 44.7165 7 43.75 7L12.25 7C11.2835 7 10.5 7.7835 10.5 8.75V47.25C10.5 48.2165 11.2835 49 12.25 49H43.75C44.7165 49 45.5 48.2165 45.5 47.25Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 14H35" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        /*icon: process.env.PUBLIC_URL + '/assets/IdentificationBadge.svg',
        activeIcon: process.env.PUBLIC_URL + '/assets/IdentificationBadgeActive.svg'*/
    },
    {
        url: '/cabinet/team',
        Component: Team,
        name: 'team',
        icon: <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.4062 15.4688H8.59375C7.64451 15.4688 6.875 16.2383 6.875 17.1875V44.6875C6.875 45.6367 7.64451 46.4062 8.59375 46.4062H46.4062C47.3555 46.4062 48.125 45.6367 48.125 44.6875V17.1875C48.125 16.2383 47.3555 15.4688 46.4062 15.4688Z" stroke="#9F9F9F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36.0938 46.4062V12.0312C36.0938 11.1196 35.7316 10.2452 35.0869 9.60057C34.4423 8.95591 33.5679 8.59375 32.6562 8.59375H22.3438C21.4321 8.59375 20.5577 8.95591 19.9131 9.60057C19.2684 10.2452 18.9062 11.1196 18.9062 12.0312V46.4062" stroke="#9F9F9F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        /*icon: process.env.PUBLIC_URL + '/assets/Suitcase.svg',
        activeIcon: process.env.PUBLIC_URL + '/assets/SuitcaseActive.svg'*/
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
                <div className={s.sections}>
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