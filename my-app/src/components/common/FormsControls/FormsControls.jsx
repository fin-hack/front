import React, {useState} from 'react';
import s from './FormsControls.module.css';
import cn from 'classnames';
import {Field} from "redux-form";

const FormControl = ({input, meta, children, isfocused, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <label className={s.controlWrapper}>
                {children}
                {/*<div className={cn(s.placeholder, {[s.inactive]: isfocused})}>{props.placeholder}</div>*/}
            </label>
            {hasError ?
                <div><span>{meta.error}</span></div>
                : ""
            }
        </div>
    );
};

export const Textarea = (props) =>
    <FormControl {...props}>
        <textarea {...props.input} {...props}/>
    </FormControl>;


export const Input = (props) => {
    const [focused, setFocused] = useState(false);
    return (
        <FormControl isfocused={focused} {...props}>
            <input onFocus={() => {
                console.log('true');
                setFocused(true);
            }} onBlur={() => setFocused(false)} {...props.input} {...props}/>
        </FormControl>
    )
};

export const createField = (placeholder, name, Component, props) => {
    return (
        <Field placeholder={placeholder}
               name={name}
               component={Component}
               {...props}
        />
    )
};