import React from 'react';
import s from './Pool.module.css';
import {connect} from "react-redux";
import {getTasks} from "../../../../store/reducers/tasksReducer";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";
import Tasks from "../Tasks/Tasks";

class Pool extends React.Component {
    componentDidMount() {
        if (!this.props.tasks || this.props.tasksStatus !== 0) {
            this.props.getTasks(this.props.teamData.id, 0);
        }
    }

    render() {
        return (
            <WithPreloader in={!this.props.isFetching} classNames={'page'}>
                {
                    this.props.tasks &&
                        <Tasks />
                }
            </WithPreloader>
        )
    }
}

const mstp = (state) => ({
    tasks: state.tasks.tasks,
    tasksStatus: state.tasks.tasksStatus,
    isFetching: state.tasks.isFetching,
});

export default connect(mstp, {getTasks})(Pool);