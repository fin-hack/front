import React from 'react';
import s from './UserAchievements.module.css';
import MyTracker from "./MyTracker/MyTracker";
import Progress from "./Progress/Progress";
import MySkills from "./MySkills/MySkills";
import Market from "./Market/Market";

class UserAchievements extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <MyTracker />
                <Progress/>
                <MySkills />
                <Market />
            </div>
        )
    }
}

export default UserAchievements;