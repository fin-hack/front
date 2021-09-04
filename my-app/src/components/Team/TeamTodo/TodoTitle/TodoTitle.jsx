import React from 'react';
import s from './TodoTitle.module.css';

class TodoTitle extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.ava}>

                </div>
                <div className={s.infoGroup}>
                    <div>{this.props.name}</div>
                    <div>Ранг команды</div>
                </div>
                <div className={s.totalRate}>
                    мы в общем рейтинге
                    <img src={process.env.PUBLIC_URL + '/assets/CaretRight.svg'}/>
                </div>
            </div>
        )
    }
}

export default TodoTitle;