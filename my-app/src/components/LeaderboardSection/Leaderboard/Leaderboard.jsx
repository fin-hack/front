import React from 'react';
import s from './Leaderboard.module.css';
import PersonalLeaderboard from "./PersonalLeaderboard/PersonalLeaderboard";
import TeamsLeaderboard from "./TeamsLeaderboard/TeamsLeaderboard";
import {CSSTransition} from "react-transition-group";
import {Route} from "react-router-dom";
import Links from "../../Team/TeamTodo/Links/Links";

const ROUTES = [
    {
        url: '/cabinet/leaderboard/personal',
        Component: PersonalLeaderboard,
        name: 'personal'
    },
    {
        url: '/cabinet/leaderboard/teams',
        Component: TeamsLeaderboard,
        name: 'teams'
    },
];

class Leaderboard extends React.Component {
    render() {
        const routes = ROUTES.map(route => {
            return (
                <Route key={route.url} exact path={route.url}>
                    {
                        ({match}) => {
                            return (
                                <CSSTransition in={match != null}
                                               timeout={300}
                                               classNames="page"
                                               unmountOnExit>
                                    <div className="page">
                                        <route.Component teamData={this.props.teamData}/>
                                    </div>
                                </CSSTransition>
                            )
                        }
                    }

                </Route>
            )
        });

        return (
            <div className={s.wrapper}>
                <Links routes={ROUTES}/>
                <div style={{position: "relative"}}>
                    {routes}
                </div>
            </div>
        )
    }
}

export default Leaderboard;