import React from 'react';
import s from './TodoTitle.module.css';
import {getFullPath} from "../../../../utils/utils";
import {NavLink} from "react-router-dom";

class TodoTitle extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.ava}>
                    <img src={getFullPath('platinum.svg')} alt=''/>
                </div>
                <div className={s.infoGroup}>
                    <div>{this.props.name}</div>
                    <div>Ранг команды</div>
                </div>
                <NavLink className={s.totalRate} to={'/cabinet/leaderboard/teams'}>
                    Мы в общем рейтинге
                    <img src={process.env.PUBLIC_URL + '/assets/CaretRight.svg'}/>
                </NavLink>
            </div>
        )
    }
}

export default TodoTitle;