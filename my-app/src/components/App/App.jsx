import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import LoginPage from "../LoginPage/LoginPage";
import CabinetPage from "../CabinetPage/CabinetPage";
import {CSSTransition} from "react-transition-group";
import AchievementsPage from "../AchievementsPage/AchievementsPage";
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {setIsInitialized} from "../../store/reducers/appReducer";

const ROUTES = [
    {
        url: '/',
        Component: LoginPage,
        name: 'login'
    },
    {
        url: '/cabinet',
        Component: CabinetPage,
        name: 'cabinet'
    },
    {
        url: '/achievements',
        Component: AchievementsPage,
        name: 'achievements'
    },
];

class App extends React.Component {

    componentDidMount() {
        window.onload = () => {
            setTimeout(() => {
                this.props.setIsInitialized(true);
            }, 1000);
        };
    }

    render() {
        const links = ROUTES.map(page => {
            return <NavLink key={page.name} to={page.url}>{page.name}</NavLink>
        });

        const pages = ROUTES.map(page => {
            return (
                <Route key={page.path} exact path={page.url}>
                    {
                        ({match}) => {
                            return <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                    <page.Component/>
                                </div>
                            </CSSTransition>
                        }
                    }
                </Route>
            )
        });

        return (
            <>
                <CSSTransition in={this.props.initialized}
                               classNames="app-wrapper"
                               unmountOnExit
                               timeout={300}
                               key={1}
                >
                    <div className={'app-wrapper'}>
                        <nav>
                            {links}
                        </nav>
                        {pages}
                    </div>
                </CSSTransition>

                <CSSTransition in={!this.props.initialized}
                               classNames="app-wrapper"
                               unmountOnExit
                               timeout={300}
                               key={2}
                >
                    <div className='app-wrapper'>
                        <Preloader/>
                    </div>
                </CSSTransition>
            </>
        )
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized
});

export default connect(mstp, {setIsInitialized})(App);