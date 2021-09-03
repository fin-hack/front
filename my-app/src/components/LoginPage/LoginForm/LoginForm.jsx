import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {connect} from "react-redux";

const LoginForm = ({handleSubmit, ...props}) => {
    return (
        <form name={'login-form'} onSubmit={handleSubmit}>
            {createField('Email', 'email', Input)}
            {createField('Password', 'password', Input, {type: 'password'})}
            <button>
                submit
            </button>
        </form>
    )
};

const reduxLoginForm = reduxForm({form: 'login-form'})(LoginForm);

export default connect(null, {})(reduxLoginForm);