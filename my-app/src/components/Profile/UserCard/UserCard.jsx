import React from 'react';
import s from './UserCard.module.css';

class UserCard extends React.Component {
    render() {
        return (
            <div>
                <div>Logo</div>
                <div>UserInfo(ava + name)</div>
                <div>quote</div>
                <div>score + stars</div>
                <div>My team</div>
            </div>
        )
    }
}

export default UserCard;