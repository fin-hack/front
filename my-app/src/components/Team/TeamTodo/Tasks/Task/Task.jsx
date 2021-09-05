import React from 'react';
import s from './Task.module.css';
import Progressbar from "../../../../common/Progressbar/Progressbar";

class Task extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.number}>Задание {this.props.task.id}</div>
                <div className={s.description}>{this.props.task.name}</div>
                <div className={s.deadline}>
                    <Progressbar max={this.props.task.goal_score} value={this.props.task.now_score}/>
                </div>
            </div>
        )
    }
}

export default Task;