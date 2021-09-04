import React from 'react';
import s from './TeamTodo.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';

class TeamTodo extends React.Component {
    render() {
        return (
            <div className={cn(cs.card, s.wrapper)}>
                Team todo
            </div>
        )
    }
}

export default TeamTodo;