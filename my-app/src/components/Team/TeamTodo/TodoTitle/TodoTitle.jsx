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
                    <div>рейтинг</div>
                </div>
                <div className={s.totalRate}>
                    мы в общем рейтинге
                </div>
            </div>
        )
    }
}

export default TodoTitle;