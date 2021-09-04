import React from 'react';
import cs from '../../../common.module.css';
import cn from 'classnames';
import s from './UserCard.module.css';

const Quote = (props) => {
    return (
        <div className={cn(s.quote, cs.card)}>
            {props.quote}
        </div>
    )
};

export default Quote;