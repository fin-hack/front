import React from 'react';
import s from './NotificationsButton.module.css';
import cn from 'classnames';
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {setNotificationsActive, setNotificationsOpened} from "../../../store/reducers/appReducer";

class NotificationsButton extends React.Component {
    toggleNotifications = () => {
        this.props.setNotificationsOpened(!this.props.opened);
        this.props.setNotificationsActive(false);
    };

    render() {
        return (
            <div className={s.wrapper}>
                <svg onClick={this.toggleNotifications} width="32" height="34" viewBox="0 0 32 34" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.75 32.75H21.25" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path
                        d="M4.22046 13.0624C4.21828 11.5058 4.52422 9.96414 5.12064 8.52632C5.71705 7.0885 6.59215 5.78294 7.69549 4.6849C8.79882 3.58686 10.1086 2.71806 11.5493 2.12857C12.9899 1.53908 14.533 1.24056 16.0896 1.25023C22.5848 1.29851 27.7801 6.69732 27.7801 13.2107V14.3749C27.7801 20.2509 29.0095 23.6607 30.0923 25.5243C30.2089 25.7234 30.271 25.9498 30.2722 26.1806C30.2734 26.4113 30.2138 26.6383 30.0993 26.8387C29.9848 27.0391 29.8195 27.2057 29.62 27.3218C29.4206 27.4379 29.194 27.4993 28.9633 27.4999H3.03602C2.80522 27.4993 2.57866 27.4379 2.37919 27.3217C2.17972 27.2056 2.0144 27.039 1.8999 26.8386C1.78541 26.6382 1.7258 26.4111 1.72707 26.1803C1.72835 25.9495 1.79047 25.7231 1.90717 25.524C2.99052 23.6603 4.22045 20.2506 4.22045 14.3749L4.22046 13.0624Z"
                        stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={cn(s.dot, {[s.active]: this.props.active})}>

                </div>
            </div>
        )
    }
}

const mstp = (state) => ({
    opened: state.app.notificationsOpened,
    active: state.app.notificationsActive,
});

export default connect(mstp, {
    setNotificationsOpened, setNotificationsActive
})(NotificationsButton);