import React from 'react';
import {Field} from "redux-form";
import s from './MoodOption.module.css';

const MoodOption = ({value, ...props}) => {
    return (
        <label>
            <div className={s.circle}> </div>
            <div className={s.hider}>
                <Field name={'mood'} component={'input'} type={'radio'} value={value} />
            </div>
        </label>
    )
};

export default MoodOption;