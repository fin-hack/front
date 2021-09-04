import React from 'react';
import s from './UserAchievements.module.css';
import Chart from "./Chart/Chart";
import Progress from "./Progress/Progress";
import SoftSkills from "./SoftSkills/SoftSkills";

class UserAchievements extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <Chart />
                <Progress percentage={59}/>
                <SoftSkills />
            </div>
        )
    }
}

export default UserAchievements;