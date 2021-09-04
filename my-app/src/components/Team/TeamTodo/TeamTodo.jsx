import React from 'react';
import s from './TeamTodo.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';
import {connect} from "react-redux";
import TodoTitle from "./TodoTitle/TodoTitle";

class TeamTodo extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                <TodoTitle name={this.props.teamData.name}/>
            </div>
        )
    }
}

const mstp = (state) => ({
   teamData: state.teamData.teamData
});

export default connect(mstp)(TeamTodo);