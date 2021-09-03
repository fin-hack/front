import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {connect} from "react-redux";
import s from './LoginForm.module.css';
import MoodOption from "./MoodOption/MoodOption";

const LoginForm = ({handleSubmit, ...props}) => {
    return (
        <form name={'login-form'} onSubmit={handleSubmit} className={s.form}>
            <div className={s.inputs}>
                {createField('Email', 'email', Input)}
                {createField('Password', 'password', Input, {type: 'password'})}
            </div>
            <div className={s.mood}>
                mood
                <div className={s.options}>
                    <MoodOption value={'bad'}/>
                    <MoodOption value={'well'}/>
                    <MoodOption value={'perfect'}/>
                </div>
            </div>
            <button className={s.submit}>
                submit
            </button>
        </form>
    )
};

const reduxLoginForm = reduxForm({form: 'login-form'})(LoginForm);

export default connect(null, {})(reduxLoginForm);