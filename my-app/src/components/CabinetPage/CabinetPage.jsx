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
import LeaderboardSection from "../LeaderboardSection/LeaderboardSection";
import Notifications from "../Notifications/Notifications";

const SECTIONS = [
    {
        url: '/cabinet/profile/',
        Component: Profile,
        name: 'profile',
        NavComponent: () => <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 21.625C23.1609 21.625 27.75 17.0359 27.75 11.375C27.75 5.71408 23.1609 1.125 17.5 1.125C11.8391 1.125 7.25 5.71408 7.25 11.375C7.25 17.0359 11.8391 21.625 17.5 21.625Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M1.96289 30.5923C3.53812 27.8657 5.80314 25.6017 8.53039 24.0276C11.2576 22.4536 14.3511 21.625 17.5 21.625C20.6489 21.625 23.7423 22.4537 26.4695 24.0278C29.1968 25.6019 31.4617 27.866 33.0369 30.5926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    },
    {
        url: '/cabinet/team/',
        Component: Team,
        name: 'team',
        NavComponent: () => <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3125 33.2812C13.6952 33.2812 16.4375 30.539 16.4375 27.1562C16.4375 23.7735 13.6952 21.0312 10.3125 21.0312C6.92976 21.0312 4.1875 23.7735 4.1875 27.1562C4.1875 30.539 6.92976 33.2812 10.3125 33.2812Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.12402 37.8746C2.19392 36.4484 3.58113 35.2909 5.17582 34.4936C6.77052 33.6964 8.52891 33.2813 10.3118 33.2813C12.0947 33.2812 13.8531 33.6962 15.4478 34.4934C17.0426 35.2906 18.4298 36.448 19.4998 37.8742" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3125 13.375C13.6952 13.375 16.4375 10.6327 16.4375 7.25C16.4375 3.86726 13.6952 1.125 10.3125 1.125C6.92976 1.125 4.1875 3.86726 4.1875 7.25C4.1875 10.6327 6.92976 13.375 10.3125 13.375Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.12402 17.9684C2.19392 16.5422 3.58113 15.3846 5.17582 14.5874C6.77052 13.7901 8.52891 13.375 10.3118 13.375C12.0947 13.375 13.8531 13.79 15.4478 14.5871C17.0426 15.3843 18.4298 16.5418 19.4998 17.9679" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.6875 33.2812C32.0702 33.2812 34.8125 30.539 34.8125 27.1562C34.8125 23.7735 32.0702 21.0312 28.6875 21.0312C25.3048 21.0312 22.5625 23.7735 22.5625 27.1562C22.5625 30.539 25.3048 33.2812 28.6875 33.2812Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.499 37.8746C20.5689 36.4484 21.9561 35.2909 23.5508 34.4936C25.1455 33.6964 26.9039 33.2813 28.6868 33.2813C30.4697 33.2812 32.2281 33.6962 33.8228 34.4934C35.4176 35.2906 36.8048 36.448 37.8748 37.8742" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.6875 13.375C32.0702 13.375 34.8125 10.6327 34.8125 7.25C34.8125 3.86726 32.0702 1.125 28.6875 1.125C25.3048 1.125 22.5625 3.86726 22.5625 7.25C22.5625 10.6327 25.3048 13.375 28.6875 13.375Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.499 17.9684C20.5689 16.5422 21.9561 15.3846 23.5508 14.5874C25.1455 13.7901 26.9039 13.375 28.6868 13.375C30.4697 13.375 32.2281 13.79 33.8228 14.5871C35.4176 15.3843 36.8048 16.5418 37.8748 17.9679" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
    {
        url: '/cabinet/leaderboard/',
        Component: LeaderboardSection,
        name: 'leaderboard',
        NavComponent: () => <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.625 19.9355L41.6875 10.873L50.7498 19.934" stroke="#9F9F9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M41.6875 32.623V10.873" stroke="#9F9F9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.875 28.998H27.1873" stroke="#9F9F9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.875 14.498H23.5623" stroke="#9F9F9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.875 43.498H41.6873" stroke="#9F9F9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    }
];

class Cabinet extends React.Component {
    render() {
        const sections = SECTIONS.map(page => {
            return (
                <Route key={page.url} path={page.url}>
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
                <Notifications/>
            </div>
        )
    }
}

export default compose(
    connect(null, {logout}),
    withLoginRedirect
)(Cabinet);