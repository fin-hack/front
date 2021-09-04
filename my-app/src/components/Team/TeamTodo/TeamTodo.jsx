import React from 'react';
import s from './TeamTodo.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';
import {connect} from "react-redux";
import TodoTitle from "./TodoTitle/TodoTitle";
import WithPreloader from "../../common/WithPreloader/WithPreloader";
import {NavLink, Route} from "react-router-dom";
import Done from "./Done/Done";
import Current from "./Current/Current";
import Pool from "./Pool/Pool";
import {CSSTransition} from "react-transition-group";

const ROUTES = [
    {
        url: '/cabinet/team/done',
        Component: Done,
        name: 'done'
    },
    {
        url: '/cabinet/team/',
        Component: Current,
        name: 'current'
    },
    {
        url: '/cabinet/team/pool',
        Component: Pool,
        name: 'pool'
    },

];

class TeamTodo extends React.Component {
    render() {
        const links = ROUTES.map(route => {
            return <NavLink key={route.name} to={route.url}>{route.name}</NavLink>
        });

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
                                        <route.Component/>
                                    </div>
                                </CSSTransition>
                            )}
                    }

                </Route>
            )
        });

        return (
            <div className={cn(cs.card, s.wrapper)}>
                <WithPreloader in={!this.props.isFetchingTeam} classNames={'page'}>
                    <>
                        {
                            this.props.teamData?.name &&
                            <TodoTitle name={this.props.teamData.name}/>
                        }
                        {links}
                        {routes}
                    </>
                </WithPreloader>
            </div>
        )
    }
}

const mstp = (state) => ({
    teamData: state.teamData.teamData,
    isFetchingTeam: state.teamData.isFetching
});

export default connect(mstp)(TeamTodo);