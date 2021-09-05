import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {connect} from "react-redux";
import s from './LoginForm.module.css';
import MoodOption from "./MoodOption/MoodOption";
import {required} from "../../../utils/validators";

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
                    <Field validate={[required]}
                           name={'mood'}
                           component={MoodOption}
                           type={'radio'}
                           value={'perfect'}
                    />

                    <Field validate={[required]}
                           name={'mood'}
                           component={MoodOption}
                           type={'radio'}
                           value={'well'}
                    />

                    <Field validate={[required]}
                           name={'mood'}
                           component={MoodOption}
                           type={'radio'}
                           value={'sad'}
                    />
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