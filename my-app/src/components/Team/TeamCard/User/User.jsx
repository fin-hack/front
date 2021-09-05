import React from 'react';
import s from './User.module.css';
import {getFullPath} from "../../../../utils/utils";

class User extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.ava}>
                    <img src={getFullPath('ava.svg')} alt=""/>
                </div>
                <div className={s.userData}>
                    <div>{this.props.firstName || 'f n'} {this.props.lastName || 'l n'}</div>
                    <div>{this.props.score} баллов</div>
                </div>
                {
                    this.props.firstName === 'Александра' &&
                    <img src={getFullPath('crown.svg')} alt=""/>
                }
            </div>
        )
    }
}

export default User;