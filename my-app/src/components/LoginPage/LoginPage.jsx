import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../store/reducers/loginPageReducer";
import {Redirect} from "react-router-dom";
import s from './LoginPage.module.css';

class LoginPage extends React.Component {

    onSubmit = (formData) => {
        this.props.login(formData.username, formData.email, formData.password);
    };

    render() {

        if (this.props.isAuth) return <Redirect to={'/cabinet'}/>;

        return (
            <>
                <LoginForm onSubmit={this.onSubmit}/>
            </>
        )
    }
}

const mstp = (state) => ({
    isFetching: state.loginPage.isFetching,
    isAuth: state.userData.isAuth,
});

export default connect(mstp, {login})(LoginPage);