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
                    <Progressbar max={100} value={Math.random() * 100}/>
                </div>
            </div>
        )
    }
}

export default Task;