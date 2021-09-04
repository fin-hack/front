import React from 'react';
import s from './TeamInfo.module.css';
import {connect} from "react-redux";
import {getTeamData} from "../../../../store/reducers/teamReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import TeamMembers from "./TeamMembers/TeamMembers";
import cs from '../../../../common.module.css';
import cn from 'classnames';

class TeamInfo extends React.Component {

    componentDidMount() {
        !this.props.teamData && this.props.getTeamData(this.props.id);
    }

    render() {
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                { this.props.teamData &&
                    <div className={cn(s.wrapper, cs.card)}>
                        <div className={cn(cs.title, s.title)}>
                            <div>My team</div>
                            <div>{this.props.teamData.name}</div>
                        </div>
                        <TeamMembers members={this.props.users}/>
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    isFetching: state.teamData.isFetching,
    teamData: state.teamData.teamData,
    users: state.teamData.users,
});

export default connect(mstp, {getTeamData})(TeamInfo);