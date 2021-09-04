import React from 'react';
import s from './User.module.css';

class User extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.ava}>

                </div>
                <div className={s.userData}>
                    <div>{this.props.firstName || 'f n'} {this.props.lastName || 'l n'}</div>
                    <div>{this.props.score} баллов</div>
                </div>
            </div>
        )
    }
}

export default User;