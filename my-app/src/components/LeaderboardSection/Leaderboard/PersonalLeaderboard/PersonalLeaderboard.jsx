import React from 'react';
import s from './PersonalLeaderboard.module.css';
import {connect} from "react-redux";
import {getPersonalLeaderboard} from "../../../../store/reducers/leaderboardReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";

class PersonalLeaderboard extends React.Component {

    componentDidMount() {
        if (!this.props.leaderboard && !this.props.isFetching) {
            this.props.getPersonalLeaderboard();
        }
    }

    render() {
        console.log(this.props.leaderboard);
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.leaderboard &&
                    <div>
                        PersonalLeaderboard
                    </div>
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    leaderboard: state.leaderboard.personal,
    isFetching: state.leaderboard.isFetching
});

export default connect(mstp, {getPersonalLeaderboard})(PersonalLeaderboard);