import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../store/reducers/loginPageReducer";
import {Redirect} from "react-router-dom";
import s from './LoginPage.module.css';
import Logo from "../common/Logo";

class LoginPage extends React.Component {

    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password, formData.mood);
    };

    render() {
        if (this.props.isAuth) return <Redirect to={'/cabinet/profile'}/>;

        return (
            <div className={s.wrapper}
            >
                <div className={s.card}>
                    <Logo/>
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
                <div className={s.video}>
                    <video autoPlay={true} loop={'loop'}>
                        <source src={process.env.PUBLIC_URL + '/assets/loginBackground.mp4'} />
                    </video>
                </div>

            </div>
        )
    }
}

const mstp = (state) => ({
    isFetching: state.loginPage.isFetching,
    isAuth: state.userData.isAuth,
});

export default connect(mstp, {login})(LoginPage);