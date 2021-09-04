import React from 'react';
import s from './Done.module.css';
import {connect} from "react-redux";
import {getTasks} from "../../../../store/reducers/tasksReducer";
import Tasks from "../Tasks/Tasks";
import WithPreloader from "../../../common/WithPreloader/WithPreloader";

class Done extends React.Component {
    componentDidMount() {
        if (!this.props.tasks || this.props.tasksStatus !== 2) {
            this.props.getTasks(this.props.teamData.id, 2);
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
    isFetching: state.tasks.isFetching
});

export default connect(mstp, {getTasks})(Done);