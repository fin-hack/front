import React from 'react';
import s from './UserCard.module.css';
import {connect} from "react-redux";
import WithPreloader from "../../common/WithPreloader/WithPreloader";
import TeamInfo from "./TeamInfo/TeamInfo";
import UserInfo from "./UserInfo/UserInfo";
import Quote from "./Quote";
import Score from "./Score";
import AboutBonuses from "./AboutBonuses/AboutBonuses";

class UserCard extends React.Component {

    render() {
        const ud = this.props.userData;
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                <div className={s.wrapper}>
                    <UserInfo/>
                    <AboutBonuses />
                    <Quote quote={'Работа не волк'}/>
                    <Score score={ud.score}/>
                    <TeamInfo id={ud._team}/>
                </div>
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    userData: state.userData.userData,
});


export default connect(mstp)(UserCard);