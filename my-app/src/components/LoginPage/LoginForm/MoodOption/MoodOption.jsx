import React, {Component} from 'react';
import s from './MoodOption.module.css';
import cn from 'classnames';

const assets = {
    perfect: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.125 26.25C21.5747 26.25 22.75 25.0747 22.75 23.625C22.75 22.1753 21.5747 21 20.125 21C18.6753 21 17.5 22.1753 17.5 23.625C17.5 25.0747 18.6753 26.25 20.125 26.25Z" fill="black"/>
        <path d="M35.875 26.25C37.3247 26.25 38.5 25.0747 38.5 23.625C38.5 22.1753 37.3247 21 35.875 21C34.4253 21 33.25 22.1753 33.25 23.625C33.25 25.0747 34.4253 26.25 35.875 26.25Z" fill="black"/>
        <path d="M37.0956 33.2492C36.1736 34.8456 34.8477 36.1712 33.2511 37.0929C31.6546 38.0145 29.8435 38.4997 28 38.4998C26.1565 38.4998 24.3455 38.0146 22.7489 37.0929C21.1523 36.1713 19.8264 34.8457 18.9044 33.2493" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    well: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M19.25 35H36.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.125 26.25C21.5747 26.25 22.75 25.0747 22.75 23.625C22.75 22.1753 21.5747 21 20.125 21C18.6753 21 17.5 22.1753 17.5 23.625C17.5 25.0747 18.6753 26.25 20.125 26.25Z" fill="black"/>
        <path d="M35.875 26.25C37.3247 26.25 38.5 25.0747 38.5 23.625C38.5 22.1753 37.3247 21 35.875 21C34.4253 21 33.25 22.1753 33.25 23.625C33.25 25.0747 34.4253 26.25 35.875 26.25Z" fill="black"/>
    </svg>,
    sad: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M20.125 26.25C21.5747 26.25 22.75 25.0747 22.75 23.625C22.75 22.1753 21.5747 21 20.125 21C18.6753 21 17.5 22.1753 17.5 23.625C17.5 25.0747 18.6753 26.25 20.125 26.25Z" fill="black"/>
        <path d="M35.875 26.25C37.3247 26.25 38.5 25.0747 38.5 23.625C38.5 22.1753 37.3247 21 35.875 21C34.4253 21 33.25 22.1753 33.25 23.625C33.25 25.0747 34.4253 26.25 35.875 26.25Z" fill="black"/>
        <path d="M20.125 26.25C21.5747 26.25 22.75 25.0747 22.75 23.625C22.75 22.1753 21.5747 21 20.125 21C18.6753 21 17.5 22.1753 17.5 23.625C17.5 25.0747 18.6753 26.25 20.125 26.25Z" fill="black"/>
        <path d="M35.875 26.25C37.3247 26.25 38.5 25.0747 38.5 23.625C38.5 22.1753 37.3247 21 35.875 21C34.4253 21 33.25 22.1753 33.25 23.625C33.25 25.0747 34.4253 26.25 35.875 26.25Z" fill="black"/>
        <path d="M37.0955 38.4997C36.1736 36.9033 34.8477 35.5777 33.2511 34.656C31.6545 33.7344 29.8435 33.2492 28 33.2491C26.1565 33.2491 24.3454 33.7343 22.7488 34.656C21.1522 35.5776 19.8263 36.9032 18.9044 38.4996" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


};

class MoodOption extends Component {
    render() {
        let {...props} = this.props;
        const classes = cn(s.icon, {
            [s.green]: props.input.value === 'perfect' && props.input.checked,
            [s.orange]: props.input.value === 'well' && props.input.checked,
            [s.red]: props.input.value === 'sad' && props.input.checked,
        });

        return (
            <label className={classes}>
                {assets[props.input.value]}
                <div className={s.hider}>
                    <input {...props.input} type={props.type}/>
                </div>
            </label>
        )
    }
}

export default MoodOption;