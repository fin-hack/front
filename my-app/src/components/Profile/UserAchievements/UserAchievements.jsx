import React from 'react';
import s from './UserAchievements.module.css';
import Chart from "./Chart/Chart";
import Progress from "./Progress/Progress";
import MySkills from "./MySkills/MySkills";
import Market from "./Market/Market";

class UserAchievements extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <Chart />
                <Progress/>
                <MySkills />
                <Market />
            </div>
        )
    }
}

export default UserAchievements;