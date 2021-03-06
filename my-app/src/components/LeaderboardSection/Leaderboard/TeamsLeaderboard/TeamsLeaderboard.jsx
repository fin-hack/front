import React from 'react';
import s from './TeamsLeaderboard.module.css';
import {connect} from "react-redux";
import {getTeamsLeaderboard} from "../../../../store/reducers/leaderboardReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import Item from "./Item/Item";
import {getFullPath} from "../../../../utils/utils";

class TeamsLeaderboard extends React.Component {

    componentDidMount() {
        if (!this.props.leaderboard && !this.props.isFetching) {
            this.props.getTeamsLeaderboard();
        }
    }

    render() {

        const board = this.props.leaderboard;
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    board &&
                    <div className={s.board}>
                        {board.map((team,index) =>
                            <Item key={index} trophey={getFullPath('platinum.svg')} place={index + 1} team={team}/>
                        )}
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    leaderboard: state.leaderboard.teams,
    isFetching: state.leaderboard.isFetching
});

export default connect(mstp, {getTeamsLeaderboard})(TeamsLeaderboard);