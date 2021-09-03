import React from 'react';
import s from './TeamCard.module.css';

class TeamCard extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div>logo</div>
                <div>name</div>
                <div>scoreboard</div>
                <div>add</div>
                <div>team rate</div>
                <div>stars</div>
            </div>
        )
    }
}

export default TeamCard;