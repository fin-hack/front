import React from 'react';
import s from './TeamAchievements.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';

class TeamAchievements extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div>done</div>
                <div>todo</div>
            </div>
        )
    }
}

export default TeamAchievements;