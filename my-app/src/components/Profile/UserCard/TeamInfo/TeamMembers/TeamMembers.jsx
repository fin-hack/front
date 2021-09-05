import React from 'react';
import s from './TeamMembers.module.css';

class TeamMembers extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                {this.props.members.map((member, index) => {
                    return (
                        <div key={index}>
                            {member.first_name || 'first name'} {member.last_name || 'last name'}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TeamMembers;