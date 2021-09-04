import React from 'react';
import s from './Task.module.css';

class Task extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.number}>No</div>
                <div className={s.description}>{this.props.task.name}</div>
                <div className={s.deadline}>deadline</div>
            </div>
        )
    }
}

export default Task;