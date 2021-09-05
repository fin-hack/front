import React from 'react';
import s from './PersonalLeaderboard.module.css';
import {connect} from "react-redux";
import {getPersonalLeaderboard} from "../../../../store/reducers/leaderboardReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import Item from "./Item/Item";
import {getFullPath} from "../../../../utils/utils";

class PersonalLeaderboard extends React.Component {

    componentDidMount() {
        if (!this.props.leaderboard && !this.props.isFetching) {
            this.props.getPersonalLeaderboard();
        }
    }

    render() {

        const board = this.props.leaderboard;
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    board &&
                    <div className={s.board}>
                        {board.map((user,index) =>
                            <Item key={index} trophey={getFullPath('platinum.svg')} place={index + 1} user={user}/>
                        )}
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