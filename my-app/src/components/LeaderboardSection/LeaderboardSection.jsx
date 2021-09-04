import React from 'react';
import s from './LeaderboardSection.module.css';
import cs from '../../common.module.css';
import cn from 'classnames';
import Trophies from "./Trophies/Trophies";
import Leaderboard from "./Leaderboard/Leaderboard";

class LeaderboardSection extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={cn(cs.card, s.trophiesWrapper)}>
                    <div className={cn(cs.title, s.title)}>
                        Все медали
                    </div>
                    <Trophies />
                </div>
                <div className={cn(cs.card, s.leaderboardWrapper)}>
                    <div className={cn(cs.title, s.title)}>
                        Таблица лидеров
                    </div>
                    <Leaderboard />
                </div>
            </div>
        )
    }
}

export default LeaderboardSection;