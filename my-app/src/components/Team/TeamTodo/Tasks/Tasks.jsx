import React from 'react';
import s from './Tasks.module.css';
import {connect} from "react-redux";
import Task from "./Task/Task";
import cn from 'classnames';

class Tasks extends React.Component {
    render() {
        const tasks = this.props.tasks.map(t => {
            return <Task task={t}/>
        });

        const isEmpty = tasks.length <= 0;

        return (
            <div className={cn(s.wrapper, {[s.empty]: isEmpty})}>
                {
                    !isEmpty ?
                        tasks
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