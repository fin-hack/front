import React from 'react';
import s from './UserCard.module.css';
import {connect} from "react-redux";
import {getUserData} from "../../../store/reducers/userDataReducer";
import WithPreloader from "../../common/WithPreloader/WithPreloader";
import TeamInfo from "./TeamInfo/TeamInfo";
import UserInfo from "./UserInfo/UserInfo";
import Quote from "./Quote";
import Score from "./Score";

class UserCard extends React.Component {

    componentDidMount() {
        !this.props.userData && this.props.getUserData();
    }

    render() {
        const ud = this.props.userData;
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {ud &&
                <div className={s.wrapper}>
                    <UserInfo/>
                    <Quote quote={'quote'}/>
                    <Score score={ud.score}/>
                    <TeamInfo id={ud._team}/>
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

export default connect(mstp, {getUserData})(UserCard);