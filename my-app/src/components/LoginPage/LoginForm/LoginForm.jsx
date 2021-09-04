import React from 'react';
import {reduxForm} from 'redux-form';
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
                <div className={s.problem}>Problems?</div>
            </div>
            <div className={s.mood}>
                <div>mood</div>
                <div className={s.options}>
                    <MoodOption icon={process.env.PUBLIC_URL + '/assets/Smiley.svg'} value={'perfect'}/>
                    <MoodOption icon={process.env.PUBLIC_URL + '/assets/SmileyMeh.svg'} value={'well'}/>
                    <MoodOption icon={process.env.PUBLIC_URL + '/assets/SmileySad.svg'} value={'sad'}/>
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