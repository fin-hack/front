import React from 'react';
import s from './TeamCard.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames'
import {connect} from "react-redux";
import WithPreloader from "../../common/WithPreloader/WithPreloader";
import User from "./User/User";

class TeamCard extends React.Component {
    render() {
        const users = this.props.users && this.props.users.map(user => {
            return <User firstName={user.first_name} lastName={user.last_name} score={user.score}/>
        });

        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>Моя команда</div>
                <div className={s.usersBox}>
                    <div className={s.usersBoxTitle}>Участники</div>
                    <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                        {users}
                    </WithPreloader>
                </div>
                <div className={s.leaveButton}>
                    Покинуть команду
                </div>
            </div>
        )
    }
}

const mstp = (state) => ({
    users: state.teamData.users,
    isFetchingTeam: state.teamData.isFetching
});

export default connect(mstp)(TeamCard);