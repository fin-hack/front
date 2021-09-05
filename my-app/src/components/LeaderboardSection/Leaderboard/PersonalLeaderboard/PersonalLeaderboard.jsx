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

        const board = this.props.leaderboard.sort((a, b) => {
            if (a.fields.score - b.fields.score > 0) return -1;
            if (a.fields.score - b.fields.score === 0) return 0;
            if (a.fields.score - b.fields.score < 0) return 1;
        } );
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.leaderboard &&
                    <div className={s.board}>
                        <div className={s.pinned}>
                            {board.slice(0, 3).map((user, index) => {
                                return <Item key={index} trophey={getFullPath('platinum.svg')} place={index + 1} user={user}/>
                            })}
                        </div>
                        {board.slice(3, board.length).map((user, index) => {
                            return <Item key={index} trophey={getFullPath('silver.svg')} place={index + 4} user={user}/>
                        })}
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