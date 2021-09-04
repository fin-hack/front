import React from 'react';
import s from './UserCard.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';

const Score = (props) => {
    return (
        <div className={cn(s.score, cs.card)}>
            {props.score}
        </div>
    )
};

export default Score;