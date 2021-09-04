import React from 'react';
import cs from '../../../common.module.css';
import cn from 'classnames';
import s from './UserCard.module.css';

const Quote = (props) => {
    return (
        <div className={cn(s.quote, cs.card)}>
            <div className={cs.title}>{props.quote}</div>
            <div>Девиз дня</div>
        </div>
    )
};

export default Quote;