import React from 'react';
import s from './Current.module.css';
import {connect} from "react-redux";
import {getTasks} from "../../../../store/reducers/tasksReducer";

class Current extends React.Component {
    componentDidMount() {
        !this.props.tasks && this.props.getTasks(this.props.teamData.id)
    }

    render() {
        return (
            <div>
                current
            </div>
        )
    }
}

const mstp = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mstp, {getTasks})(Current);