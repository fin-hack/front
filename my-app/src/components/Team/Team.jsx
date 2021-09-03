import React from 'react';
import s from './Team.module.css';
import TeamCard from "./TeamCard/TeamCard";
import TeamAchievements from "./TeamAchievements/TeamAchievements";

class Team extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <TeamCard />
                <TeamAchievements />
            </div>
        )
    }
}

export default Team;