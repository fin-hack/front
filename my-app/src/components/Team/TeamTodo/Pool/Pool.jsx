import React from 'react';
import s from './Pool.module.css';
import {connect} from "react-redux";
import {getTasks} from "../../../../store/reducers/tasksReducer";

class Pool extends React.Component {
    componentDidMount() {
        !this.props.tasks && this.props.getTasks(this.props.teamData.id)
    }

    render() {
        return (
            <div>
                pool
            </div>
        )
    }
}

const mstp = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mstp, {getTasks})(Pool);