import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import UserCard from "./UserCard/UserCard";
import UserAchievements from "./UserAchievements/UserAchievements";
import WithPreloader from "../common/WithPreloader/WithPreloader";
import {getUserData} from "../../store/reducers/userDataReducer";

class Profile extends React.Component {

    componentDidMount() {
        !this.props.userData && this.props.getUserData();
    }

    render() {
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {this.props.userData &&
                    <div className={s.wrapper}>
                        <UserCard/>
                        <UserAchievements/>
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    userData: state.userData.userData,
    isFetching: state.userData.isFetching
});

export default connect(mstp, {getUserData})(Profile);