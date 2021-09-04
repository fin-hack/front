import React from 'react';
import s from './Team.module.css';
import TeamCard from "./TeamCard/TeamCard";
import TeamAchievements from "./TeamAchievements/TeamAchievements";
import TeamTodo from "./TeamTodo/TeamTodo";
import {connect} from "react-redux";
import {getTeamData} from "../../store/reducers/teamReducer";
import WithPreloader from "../common/WithPreloader/WithPreloader";

class Team extends React.Component {

    componentDidMount() {
        if (!this.props.users && !this.props.isFetching && this.props.userData) {
            this.props.getTeamData(this.props.userData._team);
        }
    }

    render() {
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.users &&
                    <div className={s.wrapper}>
                        <TeamCard />
                        <TeamAchievements />
                        <TeamTodo />
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    users: state.teamData.users,
    userData: state.userData.userData,
    isFetchingTeam: state.teamData.isFetching
});

export default connect(mstp, {getTeamData})(Team);