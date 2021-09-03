import React from 'react';
import {Route} from 'react-router-dom'
import LoginPage from "../LoginPage/LoginPage";
import CabinetPage from "../CabinetPage/CabinetPage";
import {CSSTransition} from "react-transition-group";
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {setIsInitialized} from "../../store/reducers/appReducer";

const PAGES = [
    {
        url: '/',
        Component: LoginPage,
        name: 'login'
    },
    {
        url: '/cabinet',
        Component: CabinetPage,
        name: 'cabinet'
    }
];

class App extends React.Component {

    componentDidMount() {
        window.onload = () => {
            this.props.setIsInitialized(true);
        };
    }

    render() {
        const pages = PAGES.map(page => {
            return (
                <Route key={page.url} path={page.url}>
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