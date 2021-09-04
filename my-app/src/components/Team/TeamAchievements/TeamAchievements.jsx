import React from 'react';
import s from './TeamAchievements.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';
import Achievement from "./Achievement/Achievement";

class TeamAchievements extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={s.title}>Награды</div>
                <div className={s.box}>
                    {['kek', 'lala'].map(ach => <Achievement key={ach} achievement={ach}/>)}
                </div>
            </div>
        )
    }
}

export default TeamAchievements;