import React from 'react';
import s from './UserAchievements.module.css';
import Chart from "./Chart/Chart";
import Progress from "./Progress/Progress";
import MySkills from "./MySkills/MySkills";

class UserAchievements extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <Chart />
                <Progress/>
                <MySkills />
            </div>
        )
    }
}

export default UserAchievements;