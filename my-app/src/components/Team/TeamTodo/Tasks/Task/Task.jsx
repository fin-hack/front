import React from 'react';
import s from './Task.module.css';

class Task extends React.Component {
    render() {
        return (
            <div>
                {this.props.task.name}
            </div>
        )
    }
}

export default Task;