import React from 'react';
import s from './UserCard.module.css';
import cs from '../../../common.module.css';
import cn from 'classnames';

const Score = (props) => {
    return (
        <div className={cn(s.score, cs.card)}>
            <div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/nut.svg'} alt=''/>
                    {props.score}
                </div>
                <div className={s.rateLink}>
                    Общий рейтинг
                </div>
            </div>
            <div className={cs.title}>Общее число каштанов</div>
        </div>
    )
};

export default Score;