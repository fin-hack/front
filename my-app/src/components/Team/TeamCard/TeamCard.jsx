import React from 'react';
import s from './TeamCard.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames'
import {connect} from "react-redux";
import User from "./User/User";

class TeamCard extends React.Component {
    render() {
        const users = this.props.users && this.props.users.map(user => {
            return <User key={user.token} firstName={user.first_name} lastName={user.last_name} score={user.score}/>
        });

        return (
            <div className={cn(cs.card, s.wrapper)}>
                <div className={cs.title}>Моя команда</div>
                <div className={s.usersBox}>
                    <div className={s.usersBoxTitle}>Участники</div>
                    {users}
                </div>
            </div>
        )
    }
}

const mstp = (state) => ({
    users: state.teamData.users,
});

export default connect(mstp)(TeamCard);