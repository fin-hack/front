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
                {createField('E-mail или Логин сотрудника', 'email', Input)}
                {createField('Пароль', 'password', Input, {type: 'password'})}
                <div className={s.problem}>Возникли проблемы?</div>
            </div>
            <div className={s.mood}>
                <div>Оцените ваше сегодняшнее настроение</div>
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
                Войти в систему
            </button>
        </form>
    )
};

const reduxLoginForm = reduxForm({form: 'login-form'})(LoginForm);

export default connect(null, {})(reduxLoginForm);