import React from 'react';
import s from './Tasks.module.css';
import {connect} from "react-redux";
import Task from "./Task/Task";

class Tasks extends React.Component {
    render() {
        const tasks = this.props.tasks.map(task => <Task task={task}/>);
        return (
            <div>
                {
                    tasks.length !== 0 ?
                        {tasks}
                        :
                        <div>Empty</div>
                }
            </div>
        )
    }
}

const mstp = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mstp)(Tasks);