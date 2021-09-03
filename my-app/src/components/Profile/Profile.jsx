import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import UserCard from "./UserCard/UserCard";
import UserAchievements from "./UserAchievements/UserAchievements";

class Profile extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <UserCard />
                <UserAchievements />
            </div>
        )
    }
}

export default connect(null)(Profile);